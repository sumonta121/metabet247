const express = require("express");
const router = express.Router();
const User = require('../../../../models/User')
const Exchange = require('../../../../models/Exchange')
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const axios = require('axios');


const client_key = 'e3aa754feff07456ce544c4545521128';
const client_name = 'skydemo2';


// http://203.161.43.18:2000/api/exchange/api/v1/initGame/maxbet
// https://203.161.43.18/api/exchange/api/v1/initGame/maxbet
// https://xchangemaxxbat.site/api/exchange/api/v1/initGame/maxbet
// http://xchangemaxxbat.site/api/exchange/api/v1/initGame/maxbet



  router.get("/initGame/:usAutoId",  async (req, res) => {
    try {

      const user_id = req.params.usAutoId;
      const user_details = await User.findOne({user_id: user_id});

      if (!user_details) {
        return res.status(200).json({ message: "User not found" });
      }
    
      // Build request data
      const requestData = {
        user_id: user_details.user_id,
        client_key: client_key,
        client_name: client_name,
        balance: user_details.currency,
        back_url: 'https://maxxbat.com'
      };

      // return res.json({
      //   status: "success",
      //   url: 'https://skyiframes.3iframe.com/home',  
      // });

      // Axios request for creating a session
      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://exiframe.3iframe.com/api/v1/createSession',
        headers: {},
        data: JSON.stringify(requestData)
      };

      const response = await axios(config);
      const responseData = response.data;
      
      if (responseData.status === 1 && responseData.data.url) {
        const sessionUrl = responseData.data.url;

        // Get the client IP address
        const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        // Respond with session details
        return res.json({
          status: "success",
          url: sessionUrl,
          ip: clientIp 
        });
      } else {
        return res.status(200).json({
          error: "Failed to create session",
          details: responseData.data.message
        });
      }
      
    } catch (error) {
      console.error(error);
      res.status(200).json({ message: "Internal server error" });
    }
  });


  router.post("/getBalance",  async (req, res) => {
    try {
      const userId = req.body.user_id;
  
      // Find user details
      const user_details = await User.findOne({ user_id: userId });
      
      // Check if the user exists
      if (!user_details) {
        return res.status(200).json({ 
          status: false,
          message: "User not found",
          errors: "User not found in the database"
        });
      }
  
      const balance = user_details.currency;
  
      return res.json({
        status: true,
        message: "Success",
        data: {
          balance: balance,
          user_id: userId
        },
        errors: ""
      });
  
    } catch (error) {
      // Error handling
      return res.status(200).json({
        status: false,
        message: "Internal Server Error",
        errors: error.message
      });
    }
  });



  router.post("/result", async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();
  
    try {
        const {
            user_id,
            sport_name,
            sport_id,
            amount,
            exposure,
            match_name,
            match_id,
            round_name,
            round_id,
            result,
            bets
        } = req.body;
  
        // Check if user exists
        const user = await User.findOne({ user_id: user_id }).session(session);
        if (!user) {
            await session.abortTransaction();
            return res.status(200).json({
                status: false,
                message: "User not found",
                errors: "User does not exist in the database."
            });
        }
  
        let totalWinLoss = 0;
  
        // Process each bet in the result
        for (let bet of bets) {
            const { transation_id, win_loss } = bet;
  
            // Update the Exchange status based on bet result
            await Exchange.updateOne(
                { transation_id },
                { $set: { status: win_loss > 0 ? 'win' : 'lose', result, win_loss } },
                { session }
            );
         
            // Accumulate total win/loss
            totalWinLoss += win_loss;
        }
  
        // Step 4: Create a new exchange result record
        const exchangeResult = new ExchangeResult({
            user_id,
            sport_name,
            sport_id,
            amount,
            exposure,
            match_name,
            match_id,
            round_name,
            round_id,
            result,
            bets,
            status: 'result' 
        });
  
        await exchangeResult.save({ session });
  
        // Calculate the new balance (win/loss adjustment)
        let newBalance = user.currency + totalWinLoss;
  
        // Apply exposure only if the user lost (no further adjustment if won)
        if (totalWinLoss <= 0) {
            // The user lost, so we keep exposure as is (it's already deducted during bet placement)
            newBalance = newBalance; // No change here
        } else {
            // The user won, release exposure (add it back to balance)
            newBalance += exposure; // Add the exposure back to the balance
        }
  
        // Update the user's balance with the final value
        await User.updateOne(
            { user_id: user_id },
            { $set: { currency: newBalance } },
            { session }
        );
  
        // Commit the transaction
        await session.commitTransaction();
  
        // Respond with success
        return res.json({
            status: true,
            message: "Result processed successfully",
            data: {
                balance: newBalance,
                user_id
            },
            errors: ""
        });
  
    } catch (error) {
        await session.abortTransaction();
        return res.status(200).json({
            status: false,
            message: "Internal Server Error",
            errors: error.message
        });
    } finally {
        session.endSession();
    }
  });
  

  router.post("/placeBet", async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
      const {
        user_id,
        sport_name,
        sport_id,
        amount,
        match_name,
        match_id,
        round_name,
        round_id,
        size,
        odds,
        selection,
        back_lay,
        transation_id
      } = req.body;
  
      // Step 1: Check if the user exists
      const user_details = await User.findOne({ user_id: user_id }).session(session);
  
      if (!user_details) {
        await session.abortTransaction();
        session.endSession();
        return res.status(200).json({
          status: false,
          message: "User not found",
          errors: "User does not exist in the database."
        });
      }
  
      // Step 2: Calculate exposure based on the bet type (back or lay)
      let exposure;
      if (back_lay === "lay") {
        // Lay bet: exposure = size * (odds - 1)
        exposure = size * (odds - 1);
      } else {
        // Back bet: exposure is just the bet amount
        exposure = size;
      }
  
      // Step 3: Check if the user has enough balance
      const userBalance = user_details.currency;
  
      if (userBalance < exposure) {
        await session.abortTransaction();
        session.endSession();
        return res.status(200).json({
          status: false,
          message: "Insufficient balance",
          errors: `User balance (${userBalance}) is less than the required exposure amount (${exposure}).`
        });
      }
  
      // Step 4: Deduct the exposure from the user's balance
      const newBalance = userBalance - exposure;
  
      await User.updateOne(
        { user_id },
        { $set: { currency: newBalance } }
      ).session(session);
  
      // Step 5: Create a new exchange record
      const exchange = new Exchange({
        user_id,
        sport_name,
        sport_id,
        amount: amount,
        exposure: exposure,
        match_name,
        match_id,
        round_name,
        round_id,
        size,
        odds,
        selection,
        back_lay,
        transation_id,
        status: 'pending' // Initial bet status is pending
      });
  
      await exchange.save({ session });
  
      // Step 6: Commit the transaction
      await session.commitTransaction();
      session.endSession();
  
      // Step 7: Send a success response
      return res.json({
        status: true,
        message: "Bet placed successfully",
        data: {
          balance: newBalance,
          user_id: user_id,
          transaction_id: transation_id
        },
        errors: ""
      });
  
    } catch (error) {
      // Rollback in case of errors during transaction
      await session.abortTransaction();
      session.endSession();
      return res.status(200).json({
        status: false,
        message: "Internal Server Error",
        errors: error.message
      });
    }
  });
  

  router.post("/rollback", async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();
  
    try {
        const { user_id, exposure, round_name, round_id, amount } = req.body;
  
        // Step 1: Find the user by user_id
        const user = await User.findOne({ user_id: user_id }).session(session);
        if (!user) {
            await session.abortTransaction();
            return res.status(200).json({
                status: false,
                message: "User not found",
                errors: "User does not exist in the database."
            });
        }
  
        // Step 2: Reverse the exposure
        // Since exposure was previously deducted during bet placement, we always add it back in rollback
        const restoredBalance = user.currency + exposure;  // Add back the exposure
  
        // Step 3: Reverse the amount change
        const finalBalance = restoredBalance + amount;  // Add back the bet amount
  
        // Step 4: Update the user balance back to its previous state
        await User.updateOne(
            { user_id: user_id },
            { $set: { currency: finalBalance } },
            { session }
        );
  
        // Step 5: Update the transaction with rollback status
        await Exchange.updateOne(
            { user_id: user_id, round_id: round_id }, // Find the relevant transaction
            { $set: { status: 'rollback' } }, // Set status to 'rollback'
            { session }
        );
  
        // Step 6: Insert a rollback record into the RollbackRecords collection
        const rollbackRecord = new RollbackRecord({
            user_id,
            exposure,
            amount,
            round_name,
            round_id
        });
  
        await rollbackRecord.save({ session });
  
        // Step 7: Commit the transaction
        await session.commitTransaction();
  
        // Respond with success
        return res.json({
            status: true,
            message: "Rollback processed successfully",
            data: {
                balance: finalBalance,
                user_id
            },
            errors: ""
        });
  
    } catch (error) {
        await session.abortTransaction();
        return res.status(200).json({
            status: false,
            message: "Internal Server Error",
            errors: error.message
        });
    } finally {
        session.endSession();
    }
  });
  

module.exports = router; 