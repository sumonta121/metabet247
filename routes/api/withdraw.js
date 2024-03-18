const express = require("express");
const router = express.Router();
const User = require('../../models/User')
const Game = require('../../models/Game')
const Comment = require('../../models/Comment')
const Countries = require('../../models/Countries')
const Slide = require('../../models/SlideManage')
const Withdraw = require("../../models/AgentWithdraw");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


// Update user data route

router.post("/withdraw_to_reseller", async (req, res) => {
  const transafer_amount = req.body.amount;
  const reseller_id = req.body.reseller_userid;
  
  if (isNaN(transafer_amount)) {
    return res.status(401).json({ message: 'Invalid amount: not a number' });
  }

  if (transafer_amount <= 0) {
    return res.status(401).json({ message: "Invalid Amount" });
  }

  if (transafer_amount < 5) {
    return res.status(401).json({ message: "Minimum withdraw $5" });
  }

  const session = await mongoose.startSession();

  try { 
    session.startTransaction();

    const opts = { session };

    // const agentInfo = await User.findOne({ user_id: reseller_id, role_as: 2 }).session(session);
    // if (!agentInfo) {
    //   await session.abortTransaction();
    //   session.endSession();
    //   return res.status(401).json({ message: 'Agent not found' });
    // }

    const user = await User.findById(req.body.id).session(session);
    if (!user) {
      await session.abortTransaction();
      session.endSession();
      return res.status(401).json({ message: "This user does not exist" });
    }

    const isMatch = await bcrypt.compare(req.body.security_pin, user.tpin);
    if (!isMatch) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({ message: "Incorrect Security PIN" });
    }

    const userBalance      = Number(user.currency);
    const NewTransferMoney = Number(transafer_amount);
    const final_pay_amount = (NewTransferMoney -  (NewTransferMoney * 2 / 100));
    const userFinalBalance = userBalance - NewTransferMoney;

    if (userFinalBalance < 0) {
      await session.abortTransaction();
      session.endSession();
      return res.status(401).json({ message: "Balance is insufficient" });
    }

    await User.updateOne(
      { user_id: user.user_id },
      { currency: userFinalBalance },
      opts
    );

    const newRandomAlphanumeric = (length) => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let result = '';
      const charactersLength = characters.length;    
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters.charAt(randomIndex);
      }    
      return result;
    };
    
    const vouchar_id = newRandomAlphanumeric(6);
    const transaction_id = newRandomAlphanumeric(10);

    const WithdrawSave = new Withdraw({
      //receiver_user_id: agentInfo.user_id,
      receiver_user_id: '-',
      agentEmail: '-',
      user_id: user.user_id,
      amount: transafer_amount,
      transaction_id: transaction_id,
      voucher: vouchar_id,
      pay_amount: final_pay_amount,
      payment: 1,
      acc_number: 1,
      status_type: 0,
      withdraw_type: 1,
    });

    await WithdrawSave.save(opts);

    await session.commitTransaction();
    session.endSession();

    return res.status(200).json({ message: "Withdraw request created Successfully." });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    return res.status(500).json({ message: error.message });
  } 
  
});


router.post('/withdrawHistory', async (req, res) => {
  try {
    const user_id = req.body['user_id'];
    const page = req.body['page'];
    const respone = await Withdraw.find({user_id:user_id}).sort({ _id: -1 });
    console.log(respone);
    return res.status(200).json(respone);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// validate cashin from reseller of user balance 

router.post('/cashin', async (req, res) => {
    const user_id      = req.body.user_id;
    const voucher_id   = req.body.voucher_id;
    const security_pin = req.body.s_key;
    const agent_userid = req.body.agent_userid;

    const findVoucher   =  await Withdraw.findOne({ voucher: voucher_id});
      
    if (!findVoucher) {
      return res.status(400).json({ message: "Voucher is not found" });
    }

    if(findVoucher.status_type === 0){}else{
      return res.status(400).json({ message: "Voucher is invalid" });
    }

    const session = await mongoose.startSession();

    try { 
      session.startTransaction();
 
      const opts = { session };

      const agentInfo = await User.findOne({ user_id: agent_userid, role_as: 4 }).session(session);;
      
      const isMatch   = await bcrypt.compare(security_pin, agentInfo.tpin);
      if (!isMatch) {
        await session.abortTransaction();
        session.endSession();
        return res.status(400).json({ message: "Incorrect Security PIN" });
      }
   
      const agent_balance = Number(agentInfo.currency);
      const TransferMoney = Number(findVoucher.amount);
      const agentFinalBalance = agent_balance + TransferMoney;

      await User.updateOne({ user_id: agent_userid },{currency: agentFinalBalance},opts);

      await Withdraw.findByIdAndUpdate(findVoucher.id,{ receiver_user_id: agentInfo.user_id, status_type: 1, updatedAt: new Date() },opts);      
    
      await session.commitTransaction();
      session.endSession();

      return res.status(200).json({ message: "Cash In Successfully approved." });
    } catch (error) {
      await session.abortTransaction();
      session.endSession();
      return res.status(500).json({ message: error.message });
    } 
    
});




router.get("/resellerWithdraw/:user_id", async (req, res) => {

  if (req.params.user_id === "undefined") {
    return res.status(400).json({ message: "userId is undefined" });
  }

  const allUser = await Withdraw.find({ receiver_user_id: req.params.user_id });
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  const startIndex = (page - 1) * limit;
  const lastIndex = page * limit;

  const results = {};
  results.totalUser = allUser.length;
  results.pageCount = Math.ceil(allUser.length / limit);

  if (lastIndex < allUser.length) {
    results.next = {
      page: page + 1,
    };
  }
  if (startIndex > 0) {
    results.prev = {
      page: page - 1,
    };
  }
  results.result = allUser.slice(startIndex, lastIndex);
  return res.json(results);
});



module.exports = router; 