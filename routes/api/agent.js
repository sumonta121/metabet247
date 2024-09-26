// import {useEffect, useState} from 'react';
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const Binancepayment = require("../../models/Binancepayment");
const keys = require("../../config/keys_development");
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const validateAgentInput = require("../../validation/agent");
const validateAgentWithdraw = require("../../validation/agentWithdraw");
const quickSort = require("../../util/sort");
const BalanceDeposit = require("../../models/BalanceDeposit");
const AgentBLTR = require("../../models/AgentBLTR");
const AgentWallets = require("../../models/AgentWallets");
const Deposit = require("../../models/Deposit");
const Withdraw = require("../../models/Withdraw");
const UserBLTR = require("../../models/UserBLTR");
const AgentCommission = require("../../models/AgentCommission");
// const Agent = require("../../models/Agent");
const AgentWithdraw = require("../../models/AgentWithdraw");
var elasticemail = require('elasticemail');
const axios = require('axios');
const crypto = require('crypto');
const authenticateJWT = require('./authenticateJWT');
const CryptoJS = require('crypto-js');
//// ================================ From Admin dashboard =========================== //////

// transfer,update Agent , User table

router.post("/agent_transfer_update", (req, res) => {
  //  let gameId = req.body.gameId

  User.findOne({ user_id: req.body.user_id }, (err, user) => {
    if (err) {
      return res.status(422).json("user not exist!");
    }
    if (!user) {
      return res.status(404).json({ user_id: "This user does not exist" });
    }

    const AgentEmail = req.body.agentEmail;

    User.findOne({ email: req.body.agentEmail }, (err, agent) => {
      const Agentcurrency = Number(agent.currency);
      const transferMoney = Number(req.body.amount);
      console.log("Money: " + Agentcurrency + " Email: " + AgentEmail);

      const checkBalance = Agentcurrency < transferMoney;

      if (checkBalance) {
        return res.status(422).json({ checkBalance: "Not Available Money" });
      } else {
        // T-pin security

        if (!agent) {
          return res.status(404).json({ s_key: "This user does not exist" });
        }

        const tpin = agent.tpin;
        const s_key = req.body.s_key;
        const AgentEmail = req.body.agentEmail;

        // console.log("T-pin: " + tpin + " Agent Email: " + AgentEmail + " S-key " + s_key );

        bcrypt.compare(req.body.s_key, agent.tpin).then((isMatch) => {
          if (!!isMatch) {
            // update User Table  Currency Field
            var date = new Date(Date.now());
            // User.findOne({ email: req.body.email }, (err, user) => {
            const oldCurrncy = Number(user.currency);
            const newCurrency = Number(req.body.amount);
            const currency = oldCurrncy + newCurrency;

            // console.log(
            //   "oldCurrncy: " +
            //     oldCurrncy +
            //     " newCurrency: " +
            //     newCurrency +
            //     " Total currency " +
            //     currency
            // );

            //  });

            User.updateOne(
              { user_id: req.body.user_id },
              { currency: currency }
            )
              .then((user) => res.json(user))
              .catch((err) => console.log(err));

            // Agent user table Balance Minus

            const AgentCurrencyHas = Number(agent.currency);
            const NewTransferMoney = Number(req.body.amount);
            const AgentNewAmount = AgentCurrencyHas - NewTransferMoney;

            User.updateOne(
              { email: req.body.agentEmail },
              { currency: AgentNewAmount }
            )
              .then((user) => res.json(user))
              .catch((err) => console.log(err));

            //  UserBLTR Table Insert

            const AgentBLTRData = new AgentBLTR({
              user_id: req.body.user_id,
              status_type: 1,
              amount: req.body.amount,
              s_key: req.body.s_key,
              history: [{ x: date }],
            });

            AgentBLTRData.save()
              .then((agent) => res.json(agent))
              .catch((err) => console.log(err));
          } else {
            return res.status(400).json({ TPIN: "Incorrect T-PIN" });
          }
        });
      }
    });
  });
});

// Show all User

router.get("/getdataAllUser", (req, res) => {
  if (req.params.userId === "undefined") {
    return res.status(422).json({ msg: "userId is undefined" });
  }

  User.find().then((user) => {
    // UserBLTR.find().then((user) => {
    if (!!user) {
      return res.json(user);
    } else {
      return res.status(404).json({ msg: "User not found" });
    }
  });
});

//  User index read role_as: 3
router.get("/getdataUser", (req, res) => {
  if (req.params.userId === "undefined") {
    return res.status(422).json({ msg: "userId is undefined" });
  }

  User.find({ role_as: 3 }).then((user) => {
    // UserBLTR.find().then((user) => {
    if (!!user) {
      return res.json(user);
    } else {
      return res.status(404).json({ msg: "User not found" });
    }
  });
});

// paginate user
 
router.get("/paginatedgetdataUser",  async (req, res) => {

  const { page  = 1, limit = 10, search = "", status } = req.query;
  const regex   = new RegExp(search, "i"); 

  console.log( req.query);

  const allUser = await User.find({ role_as: 3, account_status: status, $or: [
                      { first_name: regex },
                      { last_name: regex },
                      { handle: regex },
                      { user_id: regex }
                    ] }).sort({ _id: -1 });  

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


// get agent index read
router.get("/getdataAgent", (req, res) => {

  if (req.params.userId === "undefined") {
    return res.status(422).json({ msg: "userId is undefined" });
  }

  User.find({ role_as: 2 }).then((user) => {
    if (!!user) {
      return res.json(user);
    } else {
      return res.status(404).json({ msg: "User not found" });
    }
  });
  
});


router.get("/paginatedAgent",  async (req, res) => {
  const { page = 1, limit = 10, search = "", status } = req.query;
  const regex = new RegExp(search, "i"); // case-insensitive search

  const allUser = await User.find({ role_as: 2, account_status: status, $or: [
    { first_name: regex },
    { last_name: regex },
    { handle: regex },
    { user_id: regex }
  ] }).sort({ _id: -1 });

  const startIndex = (page - 1) * limit;
  const lastIndex = page * limit;

  const results = {};
  results.totalUser = allUser.length;
  results.pageCount = Math.ceil(allUser.length / limit);

  if (lastIndex < allUser.length) {
    results.next = { page: page + 1 };
  }
  if (startIndex > 0) {
    results.prev = { page: page - 1 };
  }
  results.result = allUser.slice(startIndex, lastIndex);
  res.json(results);
});

  
router.get("/downLineView",  async (req, res) => {
  const { page = 1, limit = 10, search = "", down_userid } = req.query;
  
  let allUser = [];

  if (!down_userid || down_userid === 'null') {
    // Fetch users with role_as 2 if down_userid is null or 'null'
    allUser = await User.find({ role_as: 2 }).sort({ _id: 1 });
  } else {
    // Fetch the user data for down_userid
    const usercheck = await User.findOne({ user_id: down_userid });
    
    if (usercheck) {
      if (usercheck.role_as === 4) {
        // If the role is 4, fetch users where agent_id matches
        allUser = await User.find({ agent_id: down_userid }).sort({ _id: 1 });
      } else {
        // Otherwise, fetch users where refferer matches
        allUser = await User.find({ refferer: down_userid }).sort({ _id: 1 });
      }
    } else {
      console.error("User not found");
    }
  }
  

  const startIndex = (page - 1) * limit;
  const lastIndex = page * limit;

  const results = {};
  results.totalUser = allUser.length;
  results.pageCount = Math.ceil(allUser.length / limit);

  if (lastIndex < allUser.length) {
    results.next = { page: page + 1 };
  }
  if (startIndex > 0) {
    results.prev = { page: page - 1 };
  }
  results.result = allUser.slice(startIndex, lastIndex);
  res.json(results);
});
  


router.get("/agentDownLineView",  async (req, res) => {
  const { page = 1, limit = 50, search = "", down_userid } = req.query;
  
  let allUser = [];

  if (!down_userid || down_userid === 'null') {
    // Fetch users with role_as 2 if down_userid is null or 'null'
    allUser = await User.find({ role_as: 2 }).sort({ _id: 1 });
  } else {
    // Fetch the user data for down_userid
    const usercheck = await User.findOne({ user_id: down_userid });
    
    if (usercheck) {
      if (usercheck.role_as === 4) {
        // If the role is 4, fetch users where agent_id matches
        allUser = await User.find({ agent_id: down_userid }).sort({ _id: 1 });
      } else {
        // Otherwise, fetch users where refferer matches
        allUser = await User.find({ refferer: down_userid }).sort({ _id: 1 });
      }
    } else {
      console.error("User not found");
    }
  }
  

  const startIndex = (page - 1) * limit;
  const lastIndex = page * limit;

  const results = {};
  results.totalUser = allUser.length;
  results.pageCount = Math.ceil(allUser.length / limit);

  if (lastIndex < allUser.length) {
    results.next = { page: page + 1 };
  }
  if (startIndex > 0) {
    results.prev = { page: page - 1 };
  }
  results.result = allUser.slice(startIndex, lastIndex);
  res.json(results);
});


router.get("/paginatedSuperAgent",  async (req, res) => {
  const { page = 1, limit = 10, search = "", status } = req.query;
  const regex = new RegExp(search, "i"); // case-insensitive search

  const allUser = await User.find({ role_as: 2.1, account_status: status, $or: [
    { first_name: regex },
    { last_name: regex },
    { handle: regex },
    { user_id: regex }
  ] }).sort({ _id: -1 });

  const startIndex = (page - 1) * limit;
  const lastIndex = page * limit;

  const results = {};
  results.totalUser = allUser.length;
  results.pageCount = Math.ceil(allUser.length / limit);

  if (lastIndex < allUser.length) {
    results.next = { page: page + 1 };
  }
  if (startIndex > 0) {
    results.prev = { page: page - 1 };
  }
  results.result = allUser.slice(startIndex, lastIndex);
  res.json(results);
});


router.get("/paginatedMasterAgent",  async (req, res) => {
  const { page = 1, limit = 10, search = "", status } = req.query;
  const regex = new RegExp(search, "i"); // case-insensitive search

  const allUser = await User.find({ role_as: 4, account_status: status, $or: [
    { first_name: regex },
    { last_name: regex },
    { handle: regex },
    { user_id: regex }
  ] }).sort({ _id: -1 });

  const startIndex = (page - 1) * limit;
  const lastIndex = page * limit;

  const results = {};
  results.totalUser = allUser.length;
  results.pageCount = Math.ceil(allUser.length / limit);

  if (lastIndex < allUser.length) {
    results.next = { page: page + 1 };
  }
  if (startIndex > 0) {
    results.prev = { page: page - 1 };
  }
  results.result = allUser.slice(startIndex, lastIndex);
  res.json(results);
});


// ##### Paginate ##### // get agent paginatedUsers
router.get("/master-and-agent",  async (req, res) => {

  const allUser = await User.find({ role_as: { $in: [2.1, 4] } });
  const page = parseInt(req.query.page)
  const limit = parseInt(req.query.limit)

  const startIndex = (page - 1) * limit
  const lastIndex = (page) * limit

  const results = {}
  results.totalUser=allUser.length;
  results.pageCount=Math.ceil(allUser.length/limit);

  if (lastIndex < allUser.length) {
    results.next = {
      page: page + 1,
    }
  }
  if (startIndex > 0) {
    results.prev = {
      page: page - 1,
    }
  }
  results.result = allUser.slice(startIndex, lastIndex);
  res.json(results)
  
});



// paginate user jwt data
// router.post("/userData",  async (req, res) => {
//   const { token } = req.body;
//   try {
//     const user = jwt.verify(token, JWT_SECRET, (err, res) => {
//       if (err) {
//         return "token expired";
//       }
//       return res;
//     });
//     console.log(user);
//     if (user == "token expired") {
//       return res.send({ status: "error", data: "token expired" });
//     }

//     const useremail = user.email;
//     User.findOne({ email: useremail })
//       .then((data) => {
//         res.send({ status: "ok", data: data });
//       })
//       .catch((error) => {
//         res.send({ status: "error", data: error });
//       });
//   } catch (error) { }
// });

// agent create

router.post("/agent_create", (req, res) => {
  const { errors, isValid } = validateAgentInput(req.body);

  if (!isValid) {
    return res.status(401).json(errors);
  }

  // Check to make sure nobody has already registered with a duplicate email

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      // Throw a 400 error if the email address already exists
      return res
        .status(400)
        .json({ email: "Already registered with this address" });
    } else {
      // or latest query

      async function getAgent() {
        try {
          // Otherwise create a new user

          const agentID = User.find({ role_as: "2" }).then((user) => {
            // console.log("Agent: " + user);
          });
          // if (agentID) {
          var date = new Date(Date.now());
          const newRandomNumber = () => {
            const min = 100; // Minimum 3-digit number
            const max = 999; // Maximum 3-digit number
            const randomNumber = Math.floor(
              Math.random() * (max - min + 1) + min
            );
            return randomNumber;
          };
          // const randomNumber = newRandomNumber();

          const Agents = await User.findOne({ role_as: "2" })
                              .sort({ _id: -1 })
                              .limit(1);
          let new_user_id;
          if (Agents) {
            const lastId = Agents.user_id;
            const newStr = lastId.replace(/[A-Za-z]/g, '');

            const newRandomNumber = () => {
              const min = 100; // Minimum 3-digit number
              const max = 999; // Maximum 3-digit number
              const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
              return randomNumber;
            };
            const latestId = Number(newStr);
            const Randomuser_id = Number(newRandomNumber());
            const IdAdd = latestId + Randomuser_id;
            new_user_id = "CA" + IdAdd;
          } else {
            const newStr = 1;
            const newRandomNumber = () => {
              const min = 100; // Minimum 3-digit number
              const max = 999; // Maximum 3-digit number
              const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
              return randomNumber;
            };

            const latestId = Number(newStr);
            const Randomuser_id = Number(newRandomNumber());
            const IdAdd = latestId + Randomuser_id;
            new_user_id = "CA" + IdAdd;
          }

          // }

          const newAgent = new User({
            user_id: new_user_id,
            handle: req.body.handle,
            first_name: req.body.handle,
            email: req.body.email,
            password: req.body.password,
            tpin: req.body.password,
            mobile: req.body.mobile,
            refferer: req.body.refferer,
            ref_percentage: req.body.ref_percentage,
            deposit_percentage: req.body.deposit_percentage,
            status: "Country Agent",
            role_as: 2,
            // currency: 0,
            history: [{ x: date, y: 1000 }],
          });

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newAgent.password, salt, (err, hash) => {
              if (err) throw err;
              newAgent.password = hash;

              bcrypt.hash(newAgent.tpin, salt, (err, hash) => {
                if (err) throw err;
                newAgent.tpin = hash;
                newAgent
                  .save()
                  .then((user) => res.json(user))
                  .catch((err) => console.log(err));
              });
            });
          });
        } catch (error) {
          console.log(error.message);
        }
      }

      getAgent();
    }
  });
});

// Edit agent route
router.get("/editagent/:user_id", function (req, res) {
  const user_id = req.params.user_id;
  
  console.log('User ID:', user_id);
  
  User.findOne({ user_id: user_id })
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch((err) => {
      console.error('Error fetching user:', err);
      res.status(500).json({ message: "Server error" });
    });
});


//  edit agent
router.get("/getAgent/:id").get(function (req, res) {
  const user_id = req.params.id;  
  User.findOne({ _id: user_id }).then((user) => res.json(user));
});


// Update agent route
router.post("/updateAgent/:_id",  async (req, res) => {
  const { errors, isValid } = validateAgentInput(req.body);

  // Validate input
  if (!isValid) {
    return res.status(401).json(errors);
  }

  const rowId = req.params._id;

  // Destructure fields from request body
  const {
    handle,
    email,
    password,
    tpassword,
    mobile,
    account_status,
    ref_percentage,
    deposit_percentage,
  } = req.body;

  try {
    let updateFields = {
      handle,
      email,
      mobile,
      account_status,
      ref_percentage,
      deposit_percentage,
    };

    // If password is provided, hash it before updating
    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      updateFields.password = hashedPassword;
    }  
    
    // If password is provided, hash it before updating
    if (tpassword) {
      const salt = await bcrypt.genSalt(10);
      const hashedtPassword = await bcrypt.hash(tpassword, salt);
      updateFields.tpin = hashedtPassword;
    }

    // Update the agent
    const updatedUser = await User.updateOne({ user_id: rowId }, { $set: updateFields });

    if (updatedUser.nModified === 0) {
      return res.status(404).json({ message: "User not found or no changes made" });
    }

    res.json({ message: "User updated successfully", user: updatedUser });
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Update agent route
router.post("/updateSuperAgent/:_id",  async (req, res) => {
  const { errors, isValid } = validateAgentInput(req.body);

  // Validate input
  if (!isValid) {
    return res.status(401).json(errors);
  }

  const rowId = req.params._id;

  // Destructure fields from request body
  const {
    handle,
    email,
    password,
    tpassword,
    mobile,
    account_status,
    ref_percentage,
    deposit_percentage,
  } = req.body;

  try {
    let updateFields = {
      handle,
      email,
      mobile,
      account_status,
      ref_percentage,
      deposit_percentage,
    };

    // If password is provided, hash it before updating
    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      updateFields.password = hashedPassword;
    }  
    
    // If password is provided, hash it before updating
    if (tpassword) {
      const salt = await bcrypt.genSalt(10);
      const hashedtPassword = await bcrypt.hash(tpassword, salt);
      updateFields.tpin = hashedtPassword;
    }

    // Update the agent
    const updatedUser = await User.updateOne({ _id: rowId }, { $set: updateFields });

    if (updatedUser.nModified === 0) {
      return res.status(404).json({ message: "Agent not found or no changes made" });
    }

    res.json({ message: "Agent updated successfully", user: updatedUser });
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ message: "Server error" });
  }
});


// Update agent route
router.post("/updateMasterAgent/:_id",  async (req, res) => {
  const { errors, isValid } = validateAgentInput(req.body);

  // Validate input
  if (!isValid) {
    return res.status(401).json(errors);
  }

  const rowId = req.params._id;

  // Destructure fields from request body
  const {
    handle,
    email,
    password,
    tpassword,
    mobile,
    account_status,
    ref_percentage,
    deposit_percentage,
  } = req.body;

  try {
    let updateFields = {
      handle,
      email,
      mobile,
      account_status,
      ref_percentage,
      deposit_percentage,
    };

    // If password is provided, hash it before updating
    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      updateFields.password = hashedPassword;
    }  
    
    // If password is provided, hash it before updating
    if (tpassword) {
      const salt = await bcrypt.genSalt(10);
      const hashedtPassword = await bcrypt.hash(tpassword, salt);
      updateFields.tpin = hashedtPassword;
    }

    // Update the agent
    const updatedUser = await User.updateOne({ _id: rowId }, { $set: updateFields });

    if (updatedUser.nModified === 0) {
      return res.status(404).json({ message: "Agent not found or no changes made" });
    }

    res.json({ message: "Agent updated successfully", user: updatedUser });
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ message: "Server error" });
  }
});



// Update agent route
router.post("/updateCountryAdmin/:_id",  async (req, res) => {
  const { errors, isValid } = validateAgentInput(req.body);

  // Validate input
  if (!isValid) {
    return res.status(401).json(errors);
  }

  const rowId = req.params._id;
  // Destructure fields from request body
  const {
    handle,
    email,
    password,
    tpassword,
    mobile,
    account_status,
    ref_percentage,
    deposit_percentage,
  } = req.body;

  try {
    let updateFields = {
      handle,
      email,
      mobile,
      account_status,
      ref_percentage,
      deposit_percentage,
    };

    // If password is provided, hash it before updating
    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      updateFields.password = hashedPassword;
    }
    
    // If password is provided, hash it before updating
    if (tpassword) {
      const salt = await bcrypt.genSalt(10);
      const hashedTPassword = await bcrypt.hash(tpassword, salt);
      updateFields.tpin = hashedTPassword;
    }

    // Update the agent
    const updatedUser = await User.updateOne({ _id: rowId }, { $set: updateFields });

    if (updatedUser.nModified === 0) {
      return res.status(404).json({ message: "User not found or no changes made" });
    }

    res.json({ message: "User updated successfully", user: updatedUser });
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ message: "Server error" });
  }
});


router.get("/getUserById/:id",  async (req, res) => {
  try {
    const rowId = req.params.id;

    // Check if the provided ID is a valid ObjectId
    if (!rowId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: "Invalid user ID format" });
    }

    const userDetails = await User.findById(rowId);

    // Check if user with the provided ID exists
    if (!userDetails) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(userDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});


router.put("/updateUser/:id",  async (req, res) => {
  const userId = req.params.id;

  try {
    // Validate ObjectId format using Mongoose's built-in method
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID format" });
    }

    // Find the user by ID
    const user = await User.findById(userId);

    // Check if the user was found
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update all fields except password and tppassword
    Object.keys(req.body).forEach((field) => {
      if (field !== "password" && field !== "tppassword") {
        user[field] = req.body[field];
      }
    });

    // Hash passwords if provided in the request body
    if (req.body.password) {
      const hashedNewPassword = await bcrypt.hash(req.body.password, 10);
      user.password = hashedNewPassword;
    }

    if (req.body.tppassword) {
      const hashedNewTPPassword = await bcrypt.hash(req.body.tppassword, 10);
      user.tpin = hashedNewTPPassword;
    }

    // Save the updated user
    const updatedUser = await user.save();

    res.status(200).json({ message: "User updated successfully", updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});


// Delete agent
router.delete("/deleteAgent/:id",  async (req, res) => {
  try {
    const rowId = req.params.id;

    // Delete the row with the specified ID
    const deletedRow = await User.findByIdAndDelete(rowId);

    if (deletedRow) {
      res.status(200).json({ message: "Row deleted successfully" });
    } else {
      res.status(404).json({ message: "Row not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// ### SubReseller create

router.post("/SubResellerCreate", (req, res) => {
  const { errors, isValid } = validateAgentInput(req.body);

  //return res.status(400).json(req.body);


  if (!isValid) {
    return res.status(401).json(errors);
  }

  // Check to make sure nobody has already registered with a duplicate email

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      // Throw a 400 error if the email address already exists
      return res
        .status(400)
        .json({ email: "Already registered with this address" });
    } else {
      // or latest query

      async function getAgent() {
        try {
          // Otherwise create a new user

        const last_user = await User.findOne({ role_as: 2.1 }).sort({ _id: -1 });
      

        let New_user_id;
        if (last_user) {
          const lastId = last_user.user_id;
          const newStr = lastId.replace(/[A-Za-z]/g, '');

          const newRandomNumber = () => {
            const min = 100; // Minimum 3-digit number
            const max = 999; // Maximum 3-digit number
            const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
            return randomNumber;
          };
          const latestId = Number(newStr);
          const Randomuser_id = Number(newRandomNumber());
          const IdAdd = latestId + Randomuser_id;
          New_user_id = "MA" + IdAdd;
        } else {
          const newStr = 1;
          const newRandomNumber = () => {
            const min = 100; // Minimum 3-digit number
            const max = 999; // Maximum 3-digit number
            const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
            return randomNumber;
          };

          const latestId = Number(newStr);
          const Randomuser_id = Number(newRandomNumber());
          const IdAdd = latestId + Randomuser_id;
          New_user_id = "MA" + IdAdd;
        }

        

          const newAgent = new User({
            user_id: New_user_id,
            handle: req.body.handle,
            email: req.body.email,
            password: req.body.password,
            tpin: req.body.password,
            mobile: req.body.mobile,
            ref_percentage: req.body.ref_percentage,
            deposit_percentage: req.body.deposit_percentage,
            status: "Super Agent",
            refferer: req.body.referrer,
            role_as: 2.1,
          //  "1 = Admin, 2 = Country Agent, 2.1 = Super Agent, , 2.2 = Agent, 3 = User, 4 = Affiliate",
            // currency: 0,
            history: [{ x: 0, y: 1000 }],
          });

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newAgent.password, salt, (err, hash) => {
              if (err) throw err;
              newAgent.password = hash;

              bcrypt.hash(newAgent.tpin, salt, (err, hash) => {
                if (err) throw err;
                newAgent.tpin = hash;
                newAgent
                  .save()
                  .then((user) => res.json(user))
                  .catch((err) => console.log(err));
              });
            });
          });

        //  await sendWelcomeEmail(New_user_id, req.body.password, req.body.email);


        } catch (error) {
          console.log(error.message);
        }
      }

      getAgent();
    }
  });
});




router.post("/super_agent_creat", (req, res) => {
  const { errors, isValid } = validateAgentInput(req.body);

  //return res.status(400).json(req.body);


  if (!isValid) {
    return res.status(401).json(errors);
  }

  // Check to make sure nobody has already registered with a duplicate email

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      // Throw a 400 error if the email address already exists
      return res
        .status(400)
        .json({ email: "Already registered with this address" });
    } else {
      // or latest query

      async function getAgent() {
        try {
          // Otherwise create a new user

        const last_user = await User.findOne({ role_as: 2.1 }).sort({ _id: -1 });
      

        let New_user_id;
        if (last_user) {
          const lastId = last_user.user_id;
        //  const newStr =  lastId.replace(/^./, "");
          const newStr = lastId.replace(/[A-Za-z]/g, '');
       
          const newRandomNumber = () => {
            const min = 100; // Minimum 3-digit number
            const max = 999; // Maximum 3-digit number
            const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
            return randomNumber;
          };
          const latestId = Number(newStr);       
          const Randomuser_id = Number(newRandomNumber());
          const IdAdd = latestId + Randomuser_id;
          New_user_id = "MA" + IdAdd;


        } else {
          const newStr = 1;
          const newRandomNumber = () => {
            const min = 100; // Minimum 3-digit number
            const max = 999; // Maximum 3-digit number
            const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
            return randomNumber;
          };

          const latestId = Number(newStr);
          const Randomuser_id = Number(newRandomNumber());
          const IdAdd = latestId + Randomuser_id;
          New_user_id = "MA" + IdAdd;
        }

        

          const newAgent = new User({
            user_id: New_user_id,
            handle: req.body.handle,
            email: req.body.email,
            password: req.body.password,
            tpin: req.body.password,
            mobile: req.body.mobile,
            ref_percentage: req.body.ref_percentage,
            deposit_percentage: req.body.deposit_percentage,
            status: "Super Agent",
            refferer: req.body.referrer,
            role_as: 2.1,
          //  "1 = Admin, 2 = Country Agent, 2.1 = Super Agent, , 2.2 = Agent, 3 = User, 4 = Affiliate",
            // currency: 0,
            history: [{ x: 0, y: 1000 }],
          });

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newAgent.password, salt, (err, hash) => {
              if (err) throw err;
              newAgent.password = hash;

              bcrypt.hash(newAgent.tpin, salt, (err, hash) => {
                if (err) throw err;
                newAgent.tpin = hash;
                newAgent
                  .save()
                  .then((user) => res.json(user))
                  .catch((err) => console.log(err));
              });
            });
          });

        //  await sendWelcomeEmail(New_user_id, req.body.password, req.body.email);


        } catch (error) {
          console.log(error.message);
        }
      }

      getAgent();
    }
  });
});

//  edit SubReseller

router.get("/editsubreseller/:usAutoId").get(function (req, res) {
  const rowId = req.params.id;
  User.findOne({ usAutoId: rowId }).then((user) => res.json(user));
});

// Update SubReseller
// ...

// getdataSubReseller
router.get("/getdataSubReseller", (req, res) => {
  if (req.params.userId === "undefined") {
    return res.status(422).json({ msg: "userId is undefined" });
  }

  User.find({ role_as: 2, status: "SubReseller" }).then((user) => {
    // UserBLTR.find().then((user) => {
    if (!!user) {
      return res.json(user);
    } else {
      return res.status(404).json({ msg: "User not found" });
    }
  });
});

// sub reseller paginate

// get agent index read
router.get("/getSubReseller", (req, res) => {

  if (req.params.userId === "undefined") {
    return res.status(422).json({ msg: "userId is undefined" });
  }

  User.find({ role_as: 2, status: "SubReseller" }).then((user) => {
    if (!!user) {
      return res.json(user);
    } else {
      return res.status(404).json({ msg: "User not found" });
    }
  });
  
});



// ##### Paginate and Search ##### // get agent paginatedUsers
router.get("/paginatedSubReseller",  async (req, res) => {
  const { referrerid, page = 1, limit = 10, search = "", status = "" } = req.query;

  const regex = new RegExp(search, "i");

  const allUser = await User.find({
    refferer: referrerid,
    account_status: status,
    status: 'Super Agent',
    $or: [
      { first_name: regex },
      { last_name: regex },
      { handle: regex },
      { user_id: regex }
    ]
  });

  const startIndex = (page - 1) * limit;
  const lastIndex = page * limit;

  const results = {};
  results.totalUser = allUser.length;
  results.pageCount = Math.ceil(allUser.length / limit);

  if (lastIndex < allUser.length) {
    results.next = {
      page: parseInt(page) + 1,
    };
  }

  if (startIndex > 0) {
    results.prev = {
      page: parseInt(page) - 1,
    };
  }

  results.result = allUser.slice(startIndex, lastIndex);
  return res.status(200).json(results);
});


router.get("/agentData/:user_id",  async (req, res) => {
  try {
    const userId = req.params.user_id;

    const [receivedFromAdmin] = await AgentBLTR.aggregate([
      { $match: { user_id: userId } },
      { $group: { _id: null, totalAmount: { $sum: "$amount" } } }
    ]);

    const [TransferToAgents] = await UserBLTR.aggregate([
      { $match: { sender_id: userId } },
      { $group: { _id: null, totalAmount: { $sum: "$currency" } } }
    ]);
    
    const [TotalDownlineBalance] = await User.aggregate([
      { $match: { refferer: userId } }, 
      { $group: { _id: null, totalAmount: { $sum: "$currency" } } }
    ]);

    const [totalDownlineCount] = await User.aggregate([
      { $match: { refferer: userId } }, 
      { $group: { _id: null, totalCount: { $sum: 1 } } }
    ]);

    const [TotalAgentDownlineBalance] = await User.aggregate([
      { $match: { agent_id: userId } }, 
      { $group: { _id: null, totalAmount: { $sum: "$currency" } } }
    ]);


    const [totalAgentDownlineCount] = await User.aggregate([
      { $match: { agent_id: userId } }, 
      { $group: { _id: null, totalCount: { $sum: 1 } } }
    ]);

    const alldata = {
      received_from_admin: receivedFromAdmin?.totalAmount || 0,
      total_Transfer_Agents: TransferToAgents?.totalAmount || 0,
      total_Downline_Balance: TotalDownlineBalance?.totalAmount || 0,
      total_Downline_Count: totalDownlineCount?.totalCount || 0,
      Total_Agent_Downline_Balance: TotalAgentDownlineBalance?.totalCount || 0,
      total_agent_Downline_Count: totalAgentDownlineCount?.totalCount || 0,
    };

    return res.json(alldata);
  } catch (error) {
    console.error("Error fetching admin data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});




// Agent Balance Report
router.get("/AgentBalanceReport", (req, res) => {
  if (req.params.userId === "undefined") {
    return res.status(422).json({ msg: "userId is undefined" });
  }
  var mysort = { name: -1 };
  AgentBLTR.find()
    .sort(mysort)
    .then((user) => {
      // UserBLTR.find().then((user) => {
      if (!!user) {
        return res.json(user);
      } else {
        return res.status(404).json({ msg: "User not found" });
      }
    });
});

router.get("/paginatedAgentBalReport",  async (req, res) => {
  try {
    const { page = 1, limit = 10, startDate, endDate } = req.query;

    // Convert page and limit to integers
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);

    // Create date range query if startDate and endDate are provided
    const dateQuery = {};
    if (startDate) {
      const start = new Date(startDate);
      if (!isNaN(start.getTime())) { // Ensure the date is valid
        dateQuery.$gte = start;
      }
    }
    if (endDate) {
      const end = new Date(endDate);
      if (!isNaN(end.getTime())) { // Ensure the date is valid
        dateQuery.$lte = end;
      }
    }

    // Query to include date filtering
    const filterQuery = Object.keys(dateQuery).length > 0 ? { createdAt: dateQuery } : {};

    // Fetch total number of records with date filter applied
    const allUsers = await AgentBLTR.find(filterQuery).exec();

    // Apply pagination
    const startIndex = (pageNum - 1) * limitNum;
    const lastIndex = pageNum * limitNum;

    const results = {};
    results.totalUsers = allUsers.length;
    results.pageCount = Math.ceil(results.totalUsers / limitNum);

    // Pagination logic
    if (lastIndex < results.totalUsers) {
      results.next = {
        page: pageNum + 1,
      };
    }
    if (startIndex > 0) {
      results.prev = {
        page: pageNum - 1,
      };
    }

    // Fetch paginated results with date filter applied
    const paginatedResults = await AgentBLTR.find(filterQuery)
      .sort({ createdAt: -1 })  // Sort by creation date
      .skip(startIndex)
      .limit(limitNum)
      .exec();

    results.result = paginatedResults;

    res.json(results);
  } catch (error) {
    console.error('Error fetching paginated data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



    

//  paginatedAgentBalReport
router.get("/paginatedAgentBalReport_back",  async (req, res) => {
  const allUser = await AgentBLTR.find();
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
  res.json(results);
});

// withdraw index list ref: "0= Pending, 1= Paid, 2= Rejected,  3 = Block",

// 0= Pending
router.get("/withdrawPending", (req, res) => {
  if (req.params.userId === "undefined") {
    return res.status(422).json({ msg: "userId is undefined" });
  }

  AgentWithdraw.find({ status_type: 0 }).then((user) => {
    // UserBLTR.find().then((user) => {
    if (!!user) {
      return res.json(user);
    } else {
      return res.status(404).json({ msg: "User not found" });
    }
  });
});

// paginate withdrawPending
router.get("/paginatedwithdrawPending",  async (req, res) => {
  const allUser = await AgentWithdraw.find({ status_type: 0 });
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
  res.json(results);
});

// 1= Paid
router.get("/withdrawPaid", (req, res) => {
  if (req.params.userId === "undefined") {
    return res.status(422).json({ msg: "userId is undefined" });
  }

  AgentWithdraw.find({ status_type: 1 }).then((user) => {
    // UserBLTR.find().then((user) => {
    if (!!user) {
      return res.json(user);
    } else {
      return res.status(404).json({ msg: "User not found" });
    }
  });
});

// paginate  withdrawPaid
router.get("/paginatedwithdrawPaid",  async (req, res) => {
  const allUser = await AgentWithdraw.find({ status_type: 1 });
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
  res.json(results);
});

// 2= Rejected

router.get("/withdrawRejected", (req, res) => {
  if (req.params.userId === "undefined") {
    return res.status(422).json({ msg: "userId is undefined" });
  }

  AgentWithdraw.find({ status_type: 2 }).then((user) => {
    // UserBLTR.find().then((user) => {
    if (!!user) {
      return res.json(user);
    } else {
      return res.status(404).json({ msg: "User not found" });
    }
  });
});

// paginate withdrawRejected

router.get("/paginatedwithdrawRejected",  async (req, res) => {
  const allUser = await AgentWithdraw.find({ status_type: 2 });
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
  res.json(results);
});

// 3 = Block

router.get("/withdrawBlock", (req, res) => {
  if (req.params.userId === "undefined") {
    return res.status(422).json({ msg: "userId is undefined" });
  }

  AgentWithdraw.find({ status_type: 3 }).then((user) => {
    // UserBLTR.find().then((user) => {
    if (!!user) {
      return res.json(user);
    } else {
      return res.status(404).json({ msg: "User not found" });
    }
  });
});

// paginate withdrawBlock
router.get("/paginatedwithdrawBlock",  async (req, res) => {
  const allUser = await AgentWithdraw.find({ status_type: 3 });
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
  res.json(results);
});

//Action approve withdraw  Pending  paid

router.delete("/withdrawPaid/:id",  async (req, res) => {
  try {
    const rowId = req.params.id;

    AgentWithdraw.findByIdAndUpdate(
      rowId,
      { status_type: 1 },
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          // console.log("Updated User : ", docs);
          res.status(200).json({ message: "paid successfully" });
        }
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// withdraw  Pending Rejected

router.delete("/withdrawRejected/:id",  async (req, res) => {
  try {
    const rowId = req.params.id;

    AgentWithdraw.findByIdAndUpdate(
      rowId,
      { status_type: 2 },
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          // console.log("Updated User : ", docs);
          res.status(201).json({ message: "Rejected successfully" });
        }
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// withdraw  Pending Block

router.delete("/withdrawBlock/:id",  async (req, res) => {
  try {
    const rowId = req.params.id;

    AgentWithdraw.findByIdAndUpdate(
      rowId,
      { status_type: 3 },
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          // console.log("Updated User : ", docs);
          res.status(202).json({ message: "Updated successfully" });
        }
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// withdraw  Pending Pending

router.delete("/withdrawPending/:id",  async (req, res) => {
  try {
    const rowId = req.params.id;

    AgentWithdraw.findByIdAndUpdate(
      rowId,
      { status_type: 0 },
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          // console.log("Updated User : ", docs);
          res.status(203).json({ message: "Updated successfully" });
        }
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
 
// Affiliate create
router.post("/affiliate_create", (req, res) => {
  const { errors, isValid } = validateAgentInput(req.body);

  if (!isValid) {
    return res.status(401).json(errors);
  }

  // Check to make sure nobody has already registered with a duplicate email

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      // Throw a 400 error if the email address already exists
      return res
        .status(400)
        .json({ email: "Already registered with this address" });
    } else {
      // or latest query

      async function getAgent() {
        try {
          // Otherwise create a new user

          // show agent user  role_as: "2"
        //  const agentID = User.find({ role_as: "4" }).then((user) => {});

          // if (agentID) {

          var date = new Date(Date.now());

          const newRandomNumber = () => {
            const min = 100; // Minimum 3-digit number
            const max = 999; // Maximum 3-digit number
            const randomNumber = Math.floor(
              Math.random() * (max - min + 1) + min
            );
            return randomNumber;
          };

          // const randomNumber = newRandomNumber();

          
          const Agents = await User.findOne({ role_as: "4" })
                              .sort({ _id: -1 })
                              .limit(1);
          let new_user_id;
          if (Agents) {
            const lastId = Agents.user_id;
            const newStr = lastId.replace(/[A-Za-z]/g, '');

            const newRandomNumber = () => {
              const min = 100; // Minimum 3-digit number
              const max = 999; // Maximum 3-digit number
              const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
              return randomNumber;
            };
            const latestId = Number(newStr);
            const Randomuser_id = Number(newRandomNumber());
            const IdAdd = latestId + Randomuser_id;
            new_user_id = "A" + IdAdd;
          } else {
            const newStr = 1;
            const newRandomNumber = () => {
              const min = 100; // Minimum 3-digit number
              const max = 999; // Maximum 3-digit number
              const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
              return randomNumber;
            };

            const latestId = Number(newStr);
            const Randomuser_id = Number(newRandomNumber());
            const IdAdd = latestId + Randomuser_id;
            new_user_id = "A" + IdAdd;
          }


          const newAgent = new User({
            user_id: new_user_id,
            handle: req.body.handle,
            email: req.body.email,
            password: req.body.password,
            tpin: req.body.password,
            mobile: req.body.mobile,
            address: req.body.address,
            personal_mobile: req.body.personal_mobile,
            mobile: req.body.mobile,
            refferer: req.body.referrer,
            ref_percentage: req.body.ref_percentage,
            deposit_percentage: req.body.deposit_percentage,
            status: "Agent",
            role_as: 4,
            // currency: 0,
            history: [{ x: date, y: 1000 }],
          });

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newAgent.password, salt, (err, hash) => {
              if (err) throw err;
              newAgent.password = hash;

              bcrypt.hash(newAgent.tpin, salt, (err, hash) => {
                if (err) throw err;
                newAgent.tpin = hash;
                newAgent
                  .save()
                  .then((user) => res.json(user))
                  .catch((err) => console.log(err));
              });
            });
          });

         // await sendWelcomeEmail(new_user_id, req.body.password, req.body.email);
          
        } catch (error) {
          console.log(error.message);
        }
      }

      getAgent();
    }
  });
});

// edit affiliate
router.get("/editAffiliate/:_id").get(function (req, res) {
  const rowId = req.params._id;
  User.findOne({ _id: rowId }).then((user) => res.json(user));
});

router.get("/getaffiliate/:_id",  async (req, res) => {
  try {
    const rowId = req.params._id;
    const user = await User.findOne({ _id: rowId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// update affiliate
router.post("/updateaffiliate/:_id", (req, res) => {
  const { errors, isValid } = validateAgentInput(req.body);
  if (!isValid) {
    //return res.status(401).json(errors);
  }
  const rowId = req.params._id;
  // console.log("Id: " + rowId);
  // handle, email, password, mobile,  ref_percentage, deposit_percentage
  const handle = req.body.handle;
  const email = req.body.email;
  const password = req.body.password;
  const mobile = req.body.mobile;
  const ref_percentage = req.body.ref_percentage;
  const deposit_percentage = req.body.deposit_percentage;

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) throw err;
      const password = hash;

      User.updateOne(
        { _id: rowId },
        {
          handle: handle,
          email: email,
          password: password,
          mobile: mobile,
          address: req.body.address,
          personal_mobile: req.body.personal_mobile,
          ref_percentage: ref_percentage,
          deposit_percentage: deposit_percentage,
        }
      )
        .then((user) => res.json(user))
        .catch((err) => console.log(err));
    });
  });
});

// Delete affiliate
router.delete("/deleteAffiliate/:id",  async (req, res) => {
  try {
    const rowId = req.params.id;

    // Delete the row with the specified ID
    const deletedRow = await User.findByIdAndDelete(rowId);

    if (deletedRow) {
      res.status(200).json({ message: "Row deleted successfully" });
    } else {
      res.status(404).json({ message: "Row not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Affiliate old  data show edit
router.get("/oldDataAffiliate/:_id", (req, res) => {

  if (req.params._id === "undefined") {
    return res.status(422).json({ msg: "userId is undefined" });
  }
    User.find({ _id: req.params._id }).then((user) => {
    // UserBLTR.find().then((user) => {
    if (!!user) {
      return res.json(user);
    } else {
      return res.status(404).json({ msg: "User not found" });
    }
  });

});

// getdataAffiliate
router.get("/getdataAffiliate", (req, res) => {
  if (req.params.userId === "undefined") {
    return res.status(422).json({ msg: "userId is undefined" });
  }

  User.find({ role_as: 4 }).then((user) => {
    // UserBLTR.find().then((user) => {
    if (!!user) {
      return res.json(user);
    } else {
      return res.status(404).json({ msg: "User not found" });
    }
  });
});
 


router.get("/paginatedAffiliate",  async (req, res) => {
   
  const { page  = 1, limit = 10, search = "", status } = req.query;
  const regex   = new RegExp(search, "i"); 
  const referrerid  = req.query.referrerid;
  const allUser = await User.find({ refferer: referrerid , role_as: 4, account_status: status, $or: [
                      { first_name: regex },
                      { last_name: regex },
                      { mobile: regex },
                      { user_id: regex }
                    ] }).sort({ _id: -1 });  

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





router.get("/reffered_list",  async (req, res) => {
   
  const { page  = 1, limit = 10, search = "", status } = req.query;
  const regex   = new RegExp(search, "i"); 

  const user_id  = req.query.user_id;

  const allUser = await User.find({ agent_id: user_id , account_status: status, $or: [
                      { first_name: regex },
                      { last_name: regex },
                      { mobile: regex },
                      { user_id: regex }
                    ] }).sort({ _id: -1 });  

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


//  SubAffiliate create

router.post("/SubAffiliateCreate", (req, res) => {
  const { errors, isValid } = validateAgentInput(req.body);
  if (!isValid) {
    return res.status(401).json(errors);
  }
  // Check to make sure nobody has already registered with a duplicate email

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      // Throw a 400 error if the email address already exists
      return res
        .status(400)
        .json({ email: "Already registered with this address" });
    } else {
      // or latest query

      async function getAgent() {
        try {
          // Otherwise create a new user

          const agentID = User.find({ role_as: "4" }).then((user) => {
            // console.log("Agent: " + user);
          });
          // if (agentID) {
          var date = new Date(Date.now());
          const newRandomNumber = () => {
            const min = 100; // Minimum 3-digit number
            const max = 999; // Maximum 3-digit number
            const randomNumber = Math.floor(
              Math.random() * (max - min + 1) + min
            );
            return randomNumber;
          };
          // const randomNumber = newRandomNumber();

          const Agents = await User.find({ role_as: "4" })
            .sort({ _id: -1 })
            .limit(1);

          const lastId = Agents[0].user_id;
          let str = lastId;
          let newStr = str.replace(/^./, "");

          const latestId = Number(newStr);
          const Randomuser_id = Number(newRandomNumber());
          const IdAdd = latestId + Randomuser_id;
          const New_user_id = "A" + IdAdd;

          // }

          const newAgent = new User({
            user_id: New_user_id,
            handle: req.body.handle,
            email: req.body.email,
            password: req.body.password,
            tpin: req.body.password,
            mobile: req.body.mobile,
            ref_percentage: req.body.ref_percentage,
            deposit_percentage: req.body.deposit_percentage,
            status: "SubAffiliate",
            role_as: 4,
            // currency: 0,
            history: [{ x: date, y: 1000 }],
          });

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newAgent.password, salt, (err, hash) => {
              if (err) throw err;
              newAgent.password = hash;

              bcrypt.hash(newAgent.tpin, salt, (err, hash) => {
                if (err) throw err;
                newAgent.tpin = hash;
                newAgent
                  .save()
                  .then((user) => res.json(user))
                  .catch((err) => console.log(err));
              });
            });
          });
        } catch (error) {
          console.log(error.message);
        }
      }

      getAgent();
    }
  });
});

//  edit SubAffiliate

router.get("/editsubreseller/:usAutoId").get(function (req, res) {
  const rowId = req.params.id;
  User.findOne({ usAutoId: rowId }).then((user) => res.json(user));
});


router.put('/block/:userId',  async (req, res) => {
  try {
    const userId = req.params.userId;

    const agent_details = await User.findOne({ _id:userId});

    if(agent_details.account_status == 1){

      const update = { account_status: 2 }; 

      const updatedUser = await User.findByIdAndUpdate(userId, update, { new: true }); // Return updated document
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
     
      return res.status(200).json({ message: 'User blocked successfully' });

    } else if(agent_details.account_status == 2){
      
      const update = { account_status: 1 }; 

      const updatedUser = await User.findByIdAndUpdate(userId, update, { new: true }); // Return updated document
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
       return res.status(200).json({ message: 'User unblocked successfully' });
    }


 
  } catch (error) {
    console.error('Error blocking user:', error);
  }
});


// Update SubAffiliate

// getdataSubAffiliate

router.get("/getdataSubAffiliate", (req, res) => {
  if (req.params.userId === "undefined") {
    return res.status(422).json({ msg: "userId is undefined" });
  }

  User.find({ role_as: 4, status: "SubAffiliate" }).then((user) => {
    // UserBLTR.find().then((user) => {
    if (!!user) {
      return res.json(user);
    } else {
      return res.status(404).json({ msg: "User not found" });
    }
  });
});

router.get("/paginatedSubAffiliate",  async (req, res) => {
  const allUser = await User.find({role_as: 4, status: "SubAffiliate"});
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
  res.json(results);
});

////// ========================== From Agent dashboard ===================== /////////////


router.post("/balance_deposit",  async (req, res) => {
  try {
    const newBalanceDeposit = new BalanceDeposit({
      user_id: req.body.user_id,
      amount: req.body.amount,
      deposit_type: 1, //"1= reseller", // You may want to clarify this format
      transaction_id: req.body.transaction_id,
      status_type: 0, //"0 = pending , 1= Paid",
      payment_type: req.body.payment_type //"1= Paid",
    });
    // Save the new BalanceDeposit instance to the database
    const savedBalanceDeposit = await newBalanceDeposit.save();
    return res.status(200).json({ message: 'Successfully created a new deposit.', data: savedBalanceDeposit });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
});


router.post("/agent_balance_deposit",  async (req, res) => {

      try {
        const { user_id, amount } = req.body;
        // Validate request data
        if (!user_id || !amount) {
            return res.status(400).json({ message: "User ID and amount are required" });
        }

        // Check if amount is not a number
        if (isNaN(amount)) {
          return res.status(500).json({ message: 'Invalid amount' });
        }

        if (amount < 9) {
          return res.status(500).json({ message: 'Minimum $10 Deposit' });
        }

        const paymentType = 'USDT';
    
        const binancePay = "2yog30mywpkwgjrduhu7gvwgpgqd728zuur6ko9jdc00g2x4kugrf5a8zc2r2l9m";
        const binancePaySecret = "nqp8y2zozm3clyk5zkrvd2kfwfcrhgsnatdf1bsdnmkcumda7skjnkcu5aif6psl";

        // Generate nonce string
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let nonce = '';
        for (let i = 1; i <= 32; i++) {
            const pos = Math.floor(Math.random() * chars.length);
            const char = chars[pos];
            nonce += char;
        }

        const timestamp = Math.round(new Date().getTime());
        const orderId = crypto.randomBytes(16).toString('hex');

        const requestData = {
            env: {
                terminalType: "MINI_PROGRAM"
            },
            merchantTradeNo: orderId,
            orderAmount: amount,
            currency: paymentType,
            goods: {
                goodsType: "01",
                goodsCategory: "0000",
                referenceGoodsId: "abc001",
                goodsName: "Balance Deposit",
                goodsUnitAmount: {
                    currency: paymentType,
                    amount: amount
                }
            },
            shipping: {
                shippingName: {
                    firstName: "Maxx Bat",
                    lastName: "Maxx Bat"
                },
                shippingAddress: {
                    region: "BD"
                }
            },
            buyer: {
                buyerName: {
                    firstName: "Maxx Bat",
                    lastName: "Maxx Bat"
                }
            }
        };

        const payload = `${timestamp}\n${nonce}\n${JSON.stringify(requestData)}\n`;
        const signature = crypto.createHmac('sha512', binancePaySecret).update(payload).digest('hex').toUpperCase();

        const headers = {
            'Content-Type': 'application/json',
            'BinancePay-Timestamp': timestamp,
            'BinancePay-Nonce': nonce,
            'BinancePay-Certificate-SN': binancePay,
            'BinancePay-Signature': signature
        };

        const binancePayment = new Binancepayment({
          user_id: user_id,
          uuid: orderId,
          amount: amount,
          status: 0
        });
           
        await binancePayment.save();

        const response = await axios.post("https://bpay.binanceapi.com/binancepay/openapi/v2/order", requestData, { headers });
        return res.json( response.data);       
     
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }

});



  router.get("/agent_balance_check/:userId",  async(req, res) => {
      return res.status(200).json('please try again...');
      // const user_id = req.params.userId;

      // const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000); // Calculate the date 24 hours ago

      // const order_details = await Binancepayment.find({ 
      //   user_id: user_id, 
      //   status: 0,
      //   createdAt: { $gte: twentyFourHoursAgo } // Filter records with updated_at greater than or equal to twentyFourHoursAgo
      // });

      
      // for (const order of order_details) {      
      //     const order_id = order.uuid;
  
      //     const externalApiResponse = await axios.get(`https://capitalrevenue.uk.com/binance-deposit-status/${order_id}`);
      //     const relevantData = externalApiResponse.data[0];     
      //       if (relevantData.status === "SUCCESS" && relevantData.data.status === "PAID") {
            
      //         const order_details = await Binancepayment.findOne({ uuid: order_id, status: 0 });
      //         const deposit_amount = order_details.amount;
         
      //       await Binancepayment.findOneAndUpdate(
      //         { _id: order_details._id }, // Assuming _id is the primary key
      //         { $set: { status: 1, updated_at: new Date() } },
      //         { new: true }
      //       );
            
      //       // 5% commission bonus
      //       const bonus_amount      = (deposit_amount * 5 /100);            
      //       const with_bonus_amount = deposit_amount + bonus_amount; 

      //       await User.findOneAndUpdate(
      //           { user_id: user_id }, 
      //           { $inc: { currency: with_bonus_amount } },
      //           { new: true } 
      //       );        
            
      //       const country_agent = await User.findOne({user_id:'CA290'}).select('name user_id email currency');
      //       country_agent.currency -= deposit_amount;            
      //       await country_agent.save();
            
      //     }
      // }
     
      //  return res.status(200).json('Balance updated success');
  
});



// Function to check pending balance
const pendingBalanceCheck_back = async (order_id, user_id, res) => {
  try {
      const binance_pay = "2yog30mywpkwgjrduhu7gvwgpgqd728zuur6ko9jdc00g2x4kugrf5a8zc2r2l9m";
      const binance_pay_secret = "nqp8y2zozm3clyk5zkrvd2kfwfcrhgsnatdf1bsdnmkcumda7skjnkcu5aif6psl";

      const nonce = crypto.randomBytes(16).toString('hex');
      const timestamp = new Date().getTime();

      const requestData = {
          merchantTradeNo: order_id
      };

      const payload = `${timestamp}\n${nonce}\n${JSON.stringify(requestData)}\n`;
      const signature = crypto.createHmac('sha512', binance_pay_secret).update(payload).digest('hex').toUpperCase();

      const headers = {
          'Content-Type': 'application/json',
          'BinancePay-Timestamp': timestamp,
          'BinancePay-Nonce': nonce,
          'BinancePay-Certificate-SN': binance_pay,
          'BinancePay-Signature': signature
      };

      const response = await axios.post("https://bpay.binanceapi.com/binancepay/openapi/v2/order/query", requestData, { headers });

      const decode = response.data;
      if (decode.status === "SUCCESS" && decode.data.status === "PAID") {
          const order_details = await Binancepayment.findOne({ uuid: order_id, status: 0 });
          
          await Binancepayment.updateOne({ id: order_details.id }, { status: 1, updated_at: new Date() });
        
          await User.findOneAndUpdate(
              { user_id: user_id }, 
              { $inc: { currency: order_details.amount } }, // Increment the balance by order.amount
              { new: true } // Return the updated document
          );
          
        return  res.status(200).send('successully balance added...');
      } else {
        return  res.status(200).send('Internal Server Error');
      }
  } catch (error) {
      console.error(error);
      res.status(500).send(error);
  }
};




//  paginatedUserBalanceReport
router.get("/agent_deposit_report",  async (req, res) => {

  const allUser = await Binancepayment.find({ user_id : req.query.user_id });
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
  res.json(results);
  
});



//  paginatedUserBalanceReport
router.get("/agentCommission/:user_id",  async (req, res) => {
    const result = await AgentCommission.aggregate([
      {
          $match: {
              agent_id: req.params.user_id 
          }
      },
      {
          $group: {
              _id: null,
              totalAmount: { $sum: "$commission" }
          }
      }
  ]);

  const totalAmount = result.length > 0 ? result[0].totalAmount : 0;

  return res.json(totalAmount);
});



//  paginatedUserBalanceReport
router.get("/deposited_report",  async (req, res) => {

  const allUser = await BalanceDeposit.find({ deposit_type: 1, user_id : req.query.user_id });
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
  res.json(results);
});


router.post("/agent_wallet_create",  async (req, res) => {
  try {

    const newAgentWallet = new AgentWallets({
      user_id: req.body.user_id,
      wallet_method: req.body.wallet_method,
      wallet_type: req.body.wallet_type,
      agent_wallet: req.body.agent_wallet,
      status: 'active', 
    });
  
    const savedBalanceDeposit = await newAgentWallet.save();
    return res.status(200).json({ message: 'Successfully created  wallet.', data: savedBalanceDeposit });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
});


//  paginatedUserBalanceReport
router.get("/agent_wallet_list",  async (req, res) => {

  const allUser = await AgentWallets.find({ user_id : req.query.user_id });
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
  res.json(results);
});



router.get("/agent_wallet_edit/:_id",  async (req, res) => {
  try {
    const id = req.params._id;
    const user = await AgentWallets.findOne({ _id: id });
    if (!user) {
      return res.status(404).json({ message: "Data not found" });
    }
    return res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});



router.post("/agent_wallet_update/:_id",  async (req, res) => {
  try {
    const user_id = req.params._id;

    // Validate request body
    const { status, agent_wallet, wallet_type, wallet_method } = req.body;
    if (typeof status === 'undefined' || typeof agent_wallet === 'undefined' || typeof wallet_type === 'undefined' || typeof wallet_method === 'undefined') {
      return res.status(400).json({ message: "Invalid input" });
    }

    // Update the document
    const updateResult = await AgentWallets.updateOne(
      { _id: user_id },
      {
        $set: {
          status: status,
          agent_wallet: agent_wallet,
          wallet_type: wallet_type,
          wallet_method: wallet_method,
        }
      }
    );

    // Check if any document was modified
    if (updateResult.nModified === 0) {
      return res.status(404).json({ message: "No document found with the given user_id" });
    }

    return res.status(200).json({ message: "Data updated successfully..." });
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});



//  paginatedUserBalanceReport
router.get("/pending_balance_request",  async (req, res) => {

  const allUser = await Deposit.find({
    agent_id: req.query.user_id,
    status: req.query.status,
  }).sort({ _id: -1 });

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
  res.json(results);
});



//  paginatedUserBalanceReport
router.get("/pending_withdraw_request",  async (req, res) => {

  const allUser = await Withdraw.find({ agent_id : req.query.user_id, status: req.query.status, });
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
  res.json(results);
});


router.get("/daily_depositt",  async (req, res) => {
  try {
    const { page = 1, limit = 10, startDate, endDate } = req.query;

    // Convert page and limit to integers
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);

    // Create date range query if startDate and endDate are provided
    const dateQuery = {};
    if (startDate) {
      const start = new Date(startDate);
      if (!isNaN(start.getTime())) { // Ensure the date is valid
        dateQuery.$gte = start;
      }
    }
    if (endDate) {
      const end = new Date(endDate);
      if (!isNaN(end.getTime())) { // Ensure the date is valid
        dateQuery.$lte = end;
      }
    }

    // Query to include date filtering
    const filterQuery = Object.keys(dateQuery).length > 0 ? { createdAt: dateQuery } : {};

    // Fetch total number of records with date filter applied
    const allUsers = await Deposit.find(filterQuery).exec();

    // Apply pagination
    const startIndex = (pageNum - 1) * limitNum;
    const lastIndex = pageNum * limitNum;

    const results = {};
    results.totalUsers = allUsers.length;
    results.pageCount = Math.ceil(results.totalUsers / limitNum);

    // Pagination logic
    if (lastIndex < results.totalUsers) {
      results.next = {
        page: pageNum + 1,
      };
    }
    if (startIndex > 0) {
      results.prev = {
        page: pageNum - 1,
      };
    }

    // Fetch paginated results with date filter applied
    const paginatedResults = await Deposit.find(filterQuery)
      .sort({ createdAt: -1 })  // Sort by creation date
      .skip(startIndex)
      .limit(limitNum)
      .exec();

    results.result = paginatedResults;

    res.json(results);
  } catch (error) {
    console.error('Error fetching paginated data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});




router.get("/daily_deposit",  async (req, res) => {
  try {
    const { page = 1, limit = 30, startDate, endDate, status } = req.query;

    // Convert page and limit to integers
    const pageNum = parseInt(page, 30);
    const limitNum = parseInt(limit, 30);

    // Create date range query if startDate and endDate are provided
    const dateQuery = {};
    if (startDate) {
      const start = new Date(startDate);
      if (!isNaN(start.getTime())) { // Ensure the date is valid
        dateQuery.$gte = start;
      }
    }
    if (endDate) {
      const end = new Date(endDate);
      if (!isNaN(end.getTime())) { // Ensure the date is valid
        dateQuery.$lte = end;
      }
    }

    // Query to include date filtering and status = 'paid'
    const filterQuery = {
      ...Object.keys(dateQuery).length > 0 ? { createdAt: dateQuery } : {},
      status: status
    };

    
    // Fetch total number of records with date filter applied
    const allUsers = await Deposit.find(filterQuery).exec();

    // Apply pagination
    const startIndex = (pageNum - 1) * limitNum;
    const lastIndex = pageNum * limitNum;

    const results = {};
    results.totalUsers = allUsers.length;
    results.pageCount = Math.ceil(results.totalUsers / limitNum);

    // Pagination logic
    if (lastIndex < results.totalUsers) {
      results.next = {
        page: pageNum + 1,
      };
    }
    if (startIndex > 0) {
      results.prev = {
        page: pageNum - 1,
      };
    }

    // Fetch paginated results with date filter applied
    const paginatedResults = await Deposit.find(filterQuery)
      .sort({ createdAt: -1 })  // Sort by creation date
      .skip(startIndex)
      .limit(limitNum)
      .exec();

    results.result = paginatedResults;

    res.json(results);
  } catch (error) {
    console.error('Error fetching paginated data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});





router.get("/daily_withdraw",  async (req, res) => {
  try {
    const { page = 1, limit = 30, startDate, endDate,status } = req.query;

    // Convert page and limit to integers
    const pageNum = parseInt(page, 30);
    const limitNum = parseInt(limit, 30);

    // Create date range query if startDate and endDate are provided
    const dateQuery = {};
    if (startDate) {
      const start = new Date(startDate);
      if (!isNaN(start.getTime())) { // Ensure the date is valid
        dateQuery.$gte = start;
      }
    }
    if (endDate) {
      const end = new Date(endDate);
      if (!isNaN(end.getTime())) { // Ensure the date is valid
        dateQuery.$lte = end;
      }
    }

    // Query to include date filtering and status = 'paid'
    const filterQuery = {
      ...Object.keys(dateQuery).length > 0 ? { createdAt: dateQuery } : {},
      status: status
    };

    
    // Fetch total number of records with date filter applied
    const allUsers = await Withdraw.find(filterQuery).exec();

    // Apply pagination
    const startIndex = (pageNum - 1) * limitNum;
    const lastIndex = pageNum * limitNum;

    const results = {};
    results.totalUsers = allUsers.length;
    results.pageCount = Math.ceil(results.totalUsers / limitNum);

    // Pagination logic
    if (lastIndex < results.totalUsers) {
      results.next = {
        page: pageNum + 1,
      };
    }
    if (startIndex > 0) {
      results.prev = {
        page: pageNum - 1,
      };
    }

    // Fetch paginated results with date filter applied
    const paginatedResults = await Withdraw.find(filterQuery)
      .sort({ createdAt: -1 })  // Sort by creation date
      .skip(startIndex)
      .limit(limitNum)
      .exec();

    results.result = paginatedResults;

    res.json(results);
  } catch (error) {
    console.error('Error fetching paginated data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



router.post("/user_withdraw_update",  async (req, res) => {
  try {
    const depositId       = req.body.depositId;
    const withdraw_status = req.body.status;

    // Fetch the deposit details
    const result = await Withdraw.findOne({ _id: depositId });

    if (!result) {
      return res.status(404).json({ message: 'Withdraw not found' });
    }

    if (result.status == 'Paid') {
      return res.status(404).json({ message: 'Sorry! This is already paid' });
    }
    
    if (result.status == 'Reject') {
      return res.status(404).json({ message: 'Sorry! This is already Rejected' });
    }

    // Fetch user details based on the user_id in the result
    const user_details = await User.findOne({ user_id: result.user_id });
    if (!user_details) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    // Fetch agent details based on the agent_id in the result
    const agent_details = await User.findOne({ user_id: result.agent_id });
    if (!agent_details) {
      return res.status(404).json({ message: 'Agent not found' });
    }

    if (withdraw_status == 'Paid') {
        agent_details.currency += Number(result.withdraw_amount);
        await agent_details.save();

        // Update the status of the deposit
        result.status = "Paid";
        await result.save();

        // Send the appropriate response
        res.json({ message: 'Withdraw approved successfully!' });
    } 


    if (withdraw_status == 'Reject') {
        user_details.currency += Number(result.withdraw_amount);
        await user_details.save();

        // Update the status of the deposit
        result.status = "Reject";
        await result.save();

        // Send the appropriate response
        res.json({ message: 'Withdraw rejected successfully!' });
    } 

    
  
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});



router.post("/user_transfer_update",  async (req, res) => {
  try {
    const depositId = req.body.depositId;
  
    // Fetch the deposit details
    const result = await Deposit.findOne({ _id: depositId });

    if (!result) {
      return res.status(404).json({ message: 'Deposit not found' });
    }

    if (result.status == 'paid') {
      return res.status(404).json({ message: 'Sorry! This is already paid' });
    }

    // Fetch user details based on the user_id in the result
    const user_details = await User.findOne({ user_id: result.user_id });
    if (!user_details) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    // Fetch agent details based on the agent_id in the result
    const agent_details = await User.findOne({ user_id: result.agent_id });
    if (!agent_details) {
      return res.status(404).json({ message: 'Agent not found' });
    }

   if (agent_details.currency < result.send_amount) {
      return res.status(404).json({ message: 'You dont have sufficiant balance...' });
    }

    const bonusAmount = result.send_amount * 0.03;
    const withrefferamnt  = Number(result.send_amount) + Number(bonusAmount);
   
    const sponsor_details = await User.findOne({ user_id: user_details.refferer });
    
    if (sponsor_details) {
      sponsor_details.currency += Number(bonusAmount);
      await sponsor_details.save();
    }

    user_details.currency += Number(withrefferamnt);
    await user_details.save();

    agent_details.currency -= Number(result.send_amount);
    await agent_details.save();


    // Update the status of the deposit
    result.status = "paid";
    await result.save();

    // Send the appropriate response
    res.json({ message: 'Payment approved successfully!' });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});



 router.post("/user_transfer_reject",  async (req, res) => {
  try {
    const depositId = req.body.depositId;
    // Fetch the deposit details
    const result = await Deposit.findOne({ _id: depositId });

    if (!result) {
      return res.status(404).json({ message: 'Deposit not found' });
    }

    if (result.status == 'paid') {
      return res.status(404).json({ message: 'Sorry! This is already paid' });
    }

    // Fetch user details based on the user_id in the result
    const user_details = await User.findOne({ user_id: result.user_id });
    if (!user_details) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    // Fetch agent details based on the agent_id in the result
    const agent_details = await User.findOne({ user_id: result.agent_id });
    if (!agent_details) {
      return res.status(404).json({ message: 'Agent not found' });
    }

    result.status = "reject";
    await result.save();
    
    res.json({ message: 'Payment rejected successfully!' });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});



router.post("/balance_send_to_superagent",  async (req, res) => {
  try {
    const { user_id, amount, agent_id, s_key } = req.body;
    
    if (isNaN(amount)) {
      return res.status(422).json("Amount is incorrect");
    }

    // Fetch sender (agent) details
    const sender_details = await User.findOne({ user_id: agent_id });
    if (!sender_details) {
      return res.status(422).json("Agent not found");
    }

    // Fetch receiver (user) details
    const receiver_details = await User.findOne({ user_id: user_id });
    if (!receiver_details) {
      return res.status(422).json("User not found");
    }

    if(receiver_details.role_as == 3 ){
      if(receiver_details.agent_id != agent_id ){
        return res.status(422).json("You don't know this user.");
      }
    }
   
    if(receiver_details.role_as == 2.1 ){
      if(receiver_details.refferer != agent_id ){
        return res.status(422).json("You don't know this user.");
      }
    }
   
    if(receiver_details.role_as == 4 ){
      if(receiver_details.refferer != agent_id ){
        return res.status(422).json("You don't know this user.");
      }
    }
   
    
    if(sender_details.role_as == 2){
      if(receiver_details.role_as != 2.1){
        return res.status(422).json("You have entered wrong USER ID. Please check again");
      }
    }

    if(sender_details.role_as == 2.1){
      if(receiver_details.role_as != 4){
        return res.status(422).json("You have entered wrong USER ID. Please check again");
      }
    }

    if(sender_details.role_as == 4){
      if(receiver_details.role_as != 3){
        return res.status(422).json("You have entered wrong USER ID. Please check again");
      }
    }

    const transferAmountCheck = Number(amount);

    if (0 > transferAmountCheck) {
      return res.status(422).json("Amount is wrong");
    }


    const agentCurrency = Number(sender_details.currency);
    const transferAmount = Number(amount);

    if (agentCurrency < transferAmount) {
      return res.status(422).json("Not Available Balance");
    }

    const isMatch = await bcrypt.compare(s_key, sender_details.tpin);
    if (!isMatch) {
      return res.status(400).json("Incorrect Security PIN");
    }

    // Update receiver's balance
    const receiverOldCurrency = Number(receiver_details.currency);
    const receiverNewCurrency = receiverOldCurrency + transferAmount;
    await User.updateOne(
      { user_id: receiver_details.user_id },
      { currency: receiverNewCurrency }
    );

    // Update agent's balance
    const agentNewCurrency = agentCurrency - transferAmount;
    await User.updateOne(
      { user_id: sender_details.user_id },
      { currency: agentNewCurrency }
    );

    // Save transaction record
    const userBLTRData = new UserBLTR({
      sender_id: sender_details.user_id,
      user_id: receiver_details.user_id,
      status_type: 1,
      amount: transferAmount,
      s_key: 1,
    });

    await userBLTRData.save();

    res.json({ message: 'Balance transferred successfully!' });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});




router.post("/xuser_transfer_updatex", (req, res) => {
  //  let gameId = req.body.gameId

  User.findOne({ user_id: req.body.user_id }, (err, user) => {
    if (err) {
      return res.status(422).json("user not exist!");
    }
    if (!user) {
      return res.status(404).json({ email: "This user does not exist" });
    }

    const AgentEmail = req.body.agentEmail;

    User.findOne({ email: req.body.agentEmail }, (err, agent) => {
      const Agentcurrency = Number(agent.currency);
      const transferMoney = Number(req.body.amount);
      // console.log("Money: " + Agentcurrency + " Email: " + AgentEmail);

      const checkBalance = Agentcurrency < transferMoney;

      if (checkBalance) {
        return res.status(422).json({ checkBalance: "Not Available Money" });
      } else {
        // T-pin security
        if (!agent) {
          return res.status(404).json({ s_key: "This user does not exist" });
        }
        const tpin       = agent.tpin;
        const s_key      = req.body.s_key;
        const AgentEmail = req.body.agentEmail;

        // console.log("T-pin: " + tpin + " Agent Email: " + AgentEmail + " S-key " + s_key );

        bcrypt.compare(req.body.s_key, agent.tpin).then((isMatch) => {
          if (!!isMatch) {
            // update User Table  Currency Field

            var date = new Date(Date.now());

            const oldCurrncy = Number(user.currency);
            const newCurrency = Number(req.body.amount);

            const currency = newCurrency + oldCurrncy;

            User.updateOne(
              { user_id: req.body.user_id },
              { currency: currency }
            )
              .then((user) => res.json(user))
              .catch((err) => console.log(err));

            // Agent user table Balance Minus

            const AgentCurrencyHas = Number(agent.currency);
            const NewTransferMoney = Number(req.body.amount);
            const AgentNewAmount = AgentCurrencyHas - NewTransferMoney;

            User.updateOne(
              { email: req.body.agentEmail },
              { currency: AgentNewAmount }
            )
              .then((user) => res.json(user))
              .catch((err) => console.log(err));

            //  UserBLTR Table Insert

            const userBLTRData = new UserBLTR({
              sender_id: req.body.agent_id,
              user_id: req.body.user_id,
              status_type: 1,
              amount: req.body.amount,
              s_key: req.body.s_key,
              history: [{ x: date }],
            });


            userBLTRData
              .save()
              .then((agent) => res.json(agent))
              .catch((err) => console.log(err));
          
          const commAmount = req.body.amount * agent.deposit_percentage/100;
              
          const Commission = new AgentCommission({
              agent_id: agent.user_id,
              user_id: req.body.user_id,
              amount: req.body.amount,
              commission: commAmount,
              transfer_id: userBLTRData._id,
              status_type: 0,           
            });

          Commission
            .save()
            .then((AgentCom) => res.json(AgentCom))
            .catch((err) => console.log(err));
          } else {
            return res.status(400).json({ TPIN: "Incorrect T-PIN" });
          }
        });
      }
    });
  });
});

// Agent Balance Report

router.get("/UserBalanceReport", (req, res) => {
  if (req.params.userId === "undefined") {
    return res.status(422).json({ msg: "userId is undefined" });
  }
  var mysort = { name: -1 };
  UserBLTR.find()
    .sort(mysort)
    .then((user) => {
      if (!!user) {
        return res.json(user);
      } else {
        return res.status(404).json({ msg: "User not found" });
      }
    });
});
 
//  paginatedUserBalanceReport
router.get("/paginatedUserBalanceReport",  async (req, res) => {
  const allUser = await UserBLTR.find({  sender_id : req.body.user_id });
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

//  paginatedUserBalanceReport
router.get("/paginatedAgentBalanceTransferReport",  async (req, res) => {
  const allUser = await UserBLTR.find({  sender_id : req.query.userid });
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


// AgentWithdraw
router.post("/withdraw",  async (req, res) => {
  const { errors, isValid } = validateAgentWithdraw(req.body);

  if (!isValid) {
    return res.status(401).json(errors);
  }

  if (req.body.amount < 0) {
    return res.status(401).json("Amount is invalid");
  }

  try {
    const user = await User.findOne({ user_id: req.body.receiver_user_id });
    if (!user) {
      return res.status(404).json("This user does not exist");
    }

    const agent = await User.findOne({ email: req.body.agentEmail });
    if (!agent) {
      return res.status(404).json("Agent not found" );
    }

    const Agentcurrency = Number(agent.currency);
    const transferMoney = Number(req.body.amount);

    if (Agentcurrency < transferMoney) {
      return res.status(422).json("Not Available Money" );
    }

    const isMatch = await bcrypt.compare(req.body.s_key, agent.tpin);
    if (!isMatch) {
      return res.status(400).json("Incorrect T-PIN");
    }

    // Update user balance
    const oldCurrency = Number(user.currency);
    const newCurrency = oldCurrency + Number(req.body.amount);
    await User.updateOne(
      { user_id: req.body.receiver_user_id },
      { currency: newCurrency }
    );

    // Update agent balance
    const AgentNewAmount = Agentcurrency - transferMoney;
    await User.updateOne(
      { email: req.body.agentEmail },
      { currency: AgentNewAmount }
    );

    // Create a new AgentWithdraw record
    const agentWithdraw = new AgentWithdraw({
      receiver_user_id: req.body.receiver_user_id,
      user_id: req.body.user_id,
      agentEmail: req.body.agentEmail,
      amount: req.body.amount,
      pay_amount: req.body.amount - (req.body.amount * 0.05),      
      payment: req.body.payment,
      acc_number: req.body.acc_number,
      status_type: 0,
      voucher: 1,
      transaction_id : Math.random().toString(36).substring(2, 15), 
    });

    await agentWithdraw.save();

    return res.json({ message: "Withdrawal successful" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});



//  paginatedUserBalanceReport
router.get("/pending_agent_withdraw",  async (req, res) => {

  const allUser = await AgentWithdraw.find({ user_id : req.query.user_id });
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
  res.json(results);
});


router.post("/withdraw_old", (req, res) => {
  const { errors, isValid } = validateAgentWithdraw(req.body);

  if (!isValid) {
    return res.status(401).json(errors);
  }

  User.findOne({ user_id: req.body.receiver_user_id }, (err, user) => {
    if (err) {
      return res.status(422).json("user not exist!");
    }
    if (!user) {
      return res.status(404).json({ email: "This user does not exist" });
    }

    const AgentEmail = req.body.agentEmail;

    User.findOne({ email: req.body.agentEmail }, (err, agent) => {
      const Agentcurrency = Number(agent.currency);
      const transferMoney = Number(req.body.amount);
      // console.log("Money: " + Agentcurrency + " Email: " + AgentEmail);

      const checkBalance = Agentcurrency < transferMoney;

      if (checkBalance) {
        return res.status(422).json({ checkBalance: "Not Available Money" });
      } else {
        
        const tpin = agent.tpin;
        //const s_key = req.body.s_key;
        const AgentEmail = req.body.agentEmail;

        bcrypt.compare(req.body.s_key, agent.tpin).then((isMatch) => {
          if (!!isMatch) {

            var date = new Date(Date.now());

            const oldCurrncy = Number(user.currency);
            const newCurrency = Number(req.body.amount);

            const currency = newCurrency + oldCurrncy;

            User.updateOne(
              { user_id: req.body.receiver_user_id },
              { currency: currency }
            )
              .then((user) => res.json(user))
              .catch((err) => console.log(err));

            const AgentCurrencyHas = Number(agent.currency);
            const NewTransferMoney = Number(req.body.amount);
            const AgentNewAmount = AgentCurrencyHas - NewTransferMoney;

            User.updateOne(
              { email: req.body.agentEmail },
              { currency: AgentNewAmount }
            )
              .then((user) => res.json(user))
              .catch((err) => console.log(err));

            //  UserBLTR Table Insert

            const agentWithdraw = new AgentWithdraw({
              receiver_user_id: req.body.receiver_user_id,
              user_id: req.body.user_id,
              agentEmail: req.body.agentEmail,
              amount: req.body.amount,
              pay_amount: req.body.amount,
              payment: req.body.payment,
              acc_number: req.body.acc_number,
              status_type: 0,
              voucher: 1,
              //s_key: req.body.s_key,
            });

            agentWithdraw
              .save()
              .then((agent) => res.json(agent))
              .catch((err) => console.log(err));
          } else {
            return res.status(400).json({ TPIN: "Incorrect T-PIN" });
          }
        });
      }
    });
  });
});

// from admin Balance Received

router.get("/BlFromAdmin/:user_id", (req, res) => {

  if (req.params.user_id === "undefined") {
    return res.status(422).json({ msg: "userId is undefined" });
  }

  // AgentBLTR.find({ user_id:  req.body.user_id }).then((user) => {
  AgentBLTR.find({ user_id: req.params.user_id }).then((user) => {
    // UserBLTR.find().then((user) => {
    if (!!user) {
      return res.json(user);
    } else {
      return res.status(404).json({ msg: "User not found" });
    }
  });

});

// paginate 

router.get("/paginatedBlFromAdmin/:user_id",  authenticateJWT, async (req, res) => {

  if (req.params.user_id === "undefined") {
    return res.status(422).json({ msg: "userId is undefined" });
  }

  const allUser = await AgentBLTR.find({ user_id: req.params.user_id });
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
  res.json(results);
});




const sendWelcomeEmail = (username, password, email) => {
  const client = elasticemail.createClient({
    username: 'info@maxxbat.com',
    apiKey: '3844F86FEEA1889DC63C6A52ECC86443214BC6D33F19AD443DA27189A464854CDCF0700DB6C08EDD41F589CFC75760CA'
  });

  const htmlContent = `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="https://www.w3.org/1999/xhtml">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="initial-scale=1.0" />
      <meta name="format-detection" content="telephone=no" />
      <title>maxxbat</title>
       <style type="text/css">
      .ReadMsgBody {
        width: 100%;
        background-color: #ffffff;
      }
      .ExternalClass {
        width: 100%;
        background-color: #ffffff;
      }
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      }
      html {
        width: 100%;
        margin: 0;
        padding: 0;
      }
      body {
        -webkit-text-size-adjust: none;
        -ms-text-size-adjust: none;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
      }
      table {
        border-spacing: 0;
        border-collapse: collapse;
      }
      img {
        display: block !important;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
        border: none;
        height: auto;
        line-height: 100%;
        vertical-align: bottom;
      }
      p {
        padding: 0;
        margin: 0;
      }
      br {
        line-height: 0 !important;
      }
      div,
      p,
      span,
      strong,
      b,
      em,
      i,
      a,
      li,
      td {
        -webkit-text-size-adjust: none;
      }
      .b-letter__body {
        background: #cccccc !important;
      }
      table td,
      table tr {
        border-collapse: collapse;
      }
      table {
        border-collapse: collapse;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .js-phone-number,
      .highlight-phone {
        color: #ffffff !important;
        text-decoration: none !important;
      }
      a,
      p {
        line-height: inherit !important;
        text-decoration: none !important;
      }
      @media only screen and (max-width: 600px) {
        body {
          width: auto !important;
        }
        table[class="container"] {
          width: 100% !important;
        }
        table[class="center"] {
          text-align: center !important;
          float: none !important;
        }
        td[class="content"] {
          padding: 0 10px !important;
        }
        td[class="center-content"] {
          padding: 0 10px !important;
          text-align: center !important;
          float: none !important;
        }
        td[class="padding-reset"] {
          padding: 0 !important;
        }
        table[class="inline-block"] {
          text-align: center !important;
          float: none !important;
          width: 100% !important;
        }
        table[class="inline-block-1"] {
          text-align: center !important;
          float: none !important;
          width: 280px !important;
        }
        table[class="inline-block-2"] {
          text-align: center !important;
          float: none !important;
          width: 180px !important;
        }
        td[class="inline-container"] {
          padding: 0 !important;
        }
        img[class="stretch"] {
          width: 100% !important;
        }
        table[class="remove"],
        tr[class="remove"],
        span[class="remove"] {
          display: none;
        }
      }
      </style>
    </head>
    <body style="width: 100% !important; background-color: #133D2E;" class="body-layout">
      <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" style="width: 100% !important; background-color: #133D2E;" class="body-layout">
        <tr>
          <td align="center" valign="top">
          
            <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center" valign="top">
                  <table width="600" align="center" class="container" border="0" cellspacing="0" cellpadding="0">
                    <tr class="remove">
                      <td height="18" style="height: 18px; line-height:18px;"></td>
                    </tr>
                    <tr>
                      <td align="center" valign="top">
                        <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td align="center" valign="top" style="line-height: 0 !important;">
                              <a style="text-decoration: none; display: inline-block;" href="https://maxxbat.com/">
                                <img src="https://livedemo00.template-help.com/newsletter_53030/images/logo.jpg" alt="logo" width="600" height="175" class="stretch" />
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center" valign="top">
                  <table width="600" align="center" class="container" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" valign="top">
                        <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td align="center" valign="top" style="line-height: 0 !important;">
                              <img src="https://livedemo00.template-help.com/newsletter_53030/images/img01.jpg" alt="img1" width="600" height="582" class="stretch" />
                            </td>
                          </tr>
                          <tr>
                            <td align="center" valign="top" style="line-height: 0 !important;">
                              <a style="text-decoration: none; display: inline-block;" href="https://maxxbat.com/">
                                <img src="https://maxxbat.com/images/emailbanner.png" alt="img2" width="200" height="60" class="stretch" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td align="center" valign="top" style="line-height: 0 !important;">
                              <img src="https://livedemo00.template-help.com/newsletter_53030/images/img03.jpg" alt="img3" width="600" height="107" class="stretch" />
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center" valign="top">
                  <table width="600" align="center" class="container" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" valign="top" background="images/bgimg01.jpg" height="514" style="background-color:#0e0202;background-image:url(images/bgimg01.jpg);background-repeat:no-repeat;background-position:50% 0;height:514">
                        <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td align="center" valign="top" style="padding: 0 40px;" class="padding-reset">
                           
                              <table width="160" align="left" class="inline-block" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td align="center" valign="top" class="inline-container">
                                    <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td height="6" style="height: 6px; line-height:6px;"></td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top">
                                          <img src="https://livedemo00.template-help.com/newsletter_53030/images/img04.png" alt="img4" width="160" height="138" />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="font-family: Times New Roman, serif; font-size: 18px; mso-line-height-rule: exactly; line-height: 20px; font-weight: 700; text-transform: uppercase;color: #fff1c0;"><a style="text-decoration: none; color: #fff1c0;" href="https://maxxbat.com/">blackjack </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td height="10" style="height: 10px; line-height:10px;"></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                           
                              <table width="200" align="left" class="inline-block" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td align="center" valign="top" style="padding: 0 20px;" class="inline-container">
                                    <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td height="6" style="height: 6px; line-height:6px;"></td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top">
                                          <img src="https://livedemo00.template-help.com/newsletter_53030/images/img05.png" alt="img5" width="160" height="138" />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="font-family: Times New Roman, serif; font-size: 18px; mso-line-height-rule: exactly; line-height: 20px; font-weight: 700; text-transform: uppercase;color: #fff1c0;"><a style="text-decoration: none; color: #fff1c0;" href="https://maxxbat.com/">roulette </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td height="10" style="height: 10px; line-height:10px;"></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                           
                              <table width="160" align="left" class="inline-block" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td align="center" valign="top" class="inline-container">
                                    <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td height="6" style="height: 6px; line-height:6px;"></td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top">
                                          <img src="https://livedemo00.template-help.com/newsletter_53030/images/img06.png" alt="img6" width="160" height="138" />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="font-family: Times New Roman, serif; font-size: 18px; mso-line-height-rule: exactly; line-height: 20px; font-weight: 700; text-transform: uppercase;color: #fff1c0;"><a style="text-decoration: none; color: #fff1c0;" href="https://maxxbat.com/">video slots </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td height="10" style="height: 10px; line-height:10px;"></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                             
                            </td>
                          </tr>
                          <tr>
                            <td height="25" style="height: 25px; line-height:25px;"></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top">
                              <img src="https://livedemo00.template-help.com/newsletter_53030/images/decoration.png" alt="decoration" width="180" height="26" />
                            </td>
                          </tr>
                          <tr>
                            <td height="11" style="height: 11px; line-height:11px;"></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top" style="font-family: Times New Roman, serif; font-size: 40px; mso-line-height-rule: exactly; line-height: 42px; font-weight: 400;color: #e6c597;" class="content">welcome </td>
                          </tr>
                          <tr>
                            <td height="23" style="height: 23px; line-height:23px;"></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top" style="padding: 0 80px;font-family: Times New Roman, serif; font-size: 16px; mso-line-height-rule: exactly; line-height: 22px; font-weight: 400;color: #eadfb8;" class="content">
                              <p>Welcome to maxxbat! We're thrilled to have you on board as a member of our online betting community.</p>
  
                              <p>Your account details are as follows:</p>
                              
                              <p> <strong> Username: ${username}</strong></p>
                              <p><strong> Password: ${password}</strong></p>
                              
                              <p>Please keep this information secure and do not share your password with anyone. If you have any concerns about the security of your account or if you forget your password, you can always reset it through our website.</p>
                              
                              <p>To get started, log in to your account using the provided username and password on our website: https://maxxbat.com.</p>
                              
                              
                              <p>Thank you for choosing maxxbat. Good luck and happy betting!</p>
                               </td>
                          </tr>
                          <tr>
                            <td height="35" style="height: 35px; line-height:35px;"></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top">
                              <a style="text-decoration: none; display: inline-block;" href="https://maxxbat.com/">
                                <img src="https://i.ibb.co/9yz8KsF/Maxbet.webp" alt="link"  style="max-height: 60px;" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td height="30" style="height: 30px; line-height:30px;"></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center" valign="top">
                  <table width="600" align="center" class="container" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" valign="top" background="images/bgimg02.jpg" height="255" style="background-color:#3e5a33;background-image:url(images/bgimg02.jpg);background-repeat:no-repeat;background-position:50% 0;height:255">
                        <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                          <tr class="remove">
                            <td height="28" style="height: 28px; line-height:28px;"></td>
                          </tr>
                          <tr>
                            <td height="40" style="height: 40px; line-height:40px;"></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top" style="padding: 0 80px;font-family: Times New Roman, serif; font-size: 48px; mso-line-height-rule: exactly; line-height: 40px; font-weight: 700; text-transform: uppercase;color: #fff3c5;" class="content">WHY PLAY </td>
                          </tr>
                          <tr>
                            <td align="center" valign="top" style="padding: 0 80px;font-family: Times New Roman, serif; font-size: 42px; mso-line-height-rule: exactly; line-height: 36px; font-weight: 700; text-transform: uppercase;color: #fff3c5;" class="content">WITH US? </td>
                          </tr>
                          <tr>
                            <td height="22" style="height: 22px; line-height:22px;"></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top" style="padding: 0 80px;font-family: Times New Roman, serif; font-size: 16px; mso-line-height-rule: exactly; line-height: 22px; font-weight: 700; text-transform: uppercase;color: #eadfb8;" class="content">Dive into a vast selection of games tailored to suit every taste and preference. From classic slots to cutting-edge live dealer experiences, we've got it all. </td>
                          </tr>
                          <tr>
                            <td height="16" style="height: 16px; line-height:16px;"></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center" valign="top">
                  <table width="600" align="center" class="container" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" valign="top" style="background: #481611;">
                        <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td height="34" style="height: 34px; line-height:34px;"></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top" style="font-family: Times New Roman, serif; font-size: 40px; mso-line-height-rule: exactly; line-height: 42px; font-weight: 400;color: #e6c597;" class="content">photo gallery </td>
                          </tr>
                          <tr>
                            <td height="22" style="height: 22px; line-height:22px;"></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top">
                              <img src="https://livedemo00.template-help.com/newsletter_53030/images/decoration.png" alt="decoration" width="180" height="26" />
                            </td>
                          </tr>
                          <tr>
                            <td height="30" style="height: 30px; line-height:30px;"></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top">
                            
                              <table width="299" align="left" class="inline-block-1" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td align="center" valign="top" class="inline-container">
                                    <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td height="2" style="height: 2px; line-height:2px;"></td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="line-height: 0 !important;">
                                          <a style="text-decoration: none; display: inline-block;" href="https://maxxbat.com/">
                                            <img src="https://livedemo00.template-help.com/newsletter_53030/images/gallery01.jpg" alt="gallery1" width="299" height="134" class="stretch" />
                                          </a>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                         
                              <table width="301" align="left" class="inline-block-1" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td align="center" valign="top" style="padding: 0 0 0 2px;" class="inline-container">
                                    <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td height="2" style="height: 2px; line-height:2px;"></td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="line-height: 0 !important;">
                                          <a style="text-decoration: none; display: inline-block;" href="https://maxxbat.com/">
                                            <img src="https://livedemo00.template-help.com/newsletter_53030/images/gallery02.jpg" alt="gallery2" width="299" height="134" class="stretch" />
                                          </a>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                             
                            </td>
                          </tr>
                          <tr>
                            <td align="center" valign="top">
                           
                              <table width="299" align="left" class="inline-block-1" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td align="center" valign="top" class="inline-container">
                                    <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td height="2" style="height: 2px; line-height:2px;"></td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="line-height: 0 !important;">
                                          <a style="text-decoration: none; display: inline-block;" href="https://maxxbat.com/">
                                            <img src="https://livedemo00.template-help.com/newsletter_53030/images/gallery03.jpg" alt="gallery3" width="299" height="134" class="stretch" />
                                          </a>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                             
                              <table width="301" align="left" class="inline-block-1" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td align="center" valign="top" style="padding: 0 0 0 2px;" class="inline-container">
                                    <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td height="2" style="height: 2px; line-height:2px;"></td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="line-height: 0 !important;">
                                          <a style="text-decoration: none; display: inline-block;" href="https://maxxbat.com/">
                                            <img src="https://livedemo00.template-help.com/newsletter_53030/images/gallery04.jpg" alt="gallery4" width="299" height="134" class="stretch" />
                                          </a>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            
                            </td>
                          </tr>
                          <tr>
                            <td align="center" valign="top">
                             
                              <table width="299" align="left" class="inline-block-1" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td align="center" valign="top" class="inline-container">
                                    <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td height="2" style="height: 2px; line-height:2px;"></td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="line-height: 0 !important;">
                                          <a style="text-decoration: none; display: inline-block;" href="https://maxxbat.com/">
                                            <img src="https://livedemo00.template-help.com/newsletter_53030/images/gallery05.jpg" alt="gallery5" width="299" height="134" class="stretch" />
                                          </a>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                           
                              <table width="301" align="left" class="inline-block-1" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td align="center" valign="top" style="padding: 0 0 0 2px;" class="inline-container">
                                    <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td height="2" style="height: 2px; line-height:2px;"></td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="line-height: 0 !important;">
                                          <a style="text-decoration: none; display: inline-block;" href="https://maxxbat.com/">
                                            <img src="https://livedemo00.template-help.com/newsletter_53030/images/gallery06.jpg" alt="gallery6" width="299" height="134" class="stretch" />
                                          </a>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                           
                            </td>
                          </tr>
                          <tr>
                            <td height="29" style="height: 29px; line-height:29px;"></td>
                          </tr>
                          <tr> 
                            <td align="center" valign="top">
                              <a style="text-decoration: none; display: inline-block;" href="https://maxxbat.com/">
                                <img src="https://i.ibb.co/9yz8KsF/Maxbet.webp" alt="link"  style="max-height: 60px;" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td height="28" style="height: 28px; line-height:28px;"></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center" valign="top">
                  <table width="600" align="center" class="container" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" valign="top" style="background: #680102;">
                        <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td align="center" valign="top">
                         
                              <table width="299" align="left" class="inline-block" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td align="center" valign="top" class="inline-container" background="images/bgimg04.png" height="363" style="background-color:#680202;background-image:url(images/bgimg04.png);background-repeat:no-repeat;background-position:50% 0;height:363">
                                    <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td height="56" style="height: 56px; line-height:56px;"></td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="font-family: Times New Roman, serif; font-size: 42px; mso-line-height-rule: exactly; line-height: 36px; font-weight: 700; text-transform: uppercase;color: #fff3c5;" class="content">recent winner </td>
                                      </tr>
                                      <tr>
                                        <td height="24" style="height: 24px; line-height:24px;"></td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="font-family: Times New Roman, serif; font-size: 42px; mso-line-height-rule: exactly; line-height: 36px; font-weight: 700; text-transform: uppercase;color: #ffcc01;" class="content">$799.500 </td>
                                      </tr>
                                      <tr>
                                        <td height="23" style="height: 23px; line-height:23px;"></td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="font-family: Times New Roman, serif; font-size: 42px; mso-line-height-rule: exactly; line-height: 36px; font-weight: 700; text-transform: uppercase;color: #ffe396;" class="content">biggest jackpot ever </td>
                                      </tr>
                                      <tr>
                                        <td height="23" style="height: 23px; line-height:23px;"></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                          
                              <table width="301" align="left" class="inline-block-1" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td align="center" valign="top" class="inline-container">
                                    <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td align="center" valign="top" style="line-height: 0 !important;">
                                          <img src="https://livedemo00.template-help.com/newsletter_53030/images/img07.jpg" alt="img7" width="301" height="363" class="stretch" />
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                             
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
           
            <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center" valign="top">
                  <table width="600" align="center" class="container" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" valign="top" style="background: #001d05;">
                        <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td height="32" style="height: 32px; line-height:32px;"></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top" style="font-family: Times New Roman, serif; font-size: 40px; mso-line-height-rule: exactly; line-height: 42px; font-weight: 400;color: #8f9f61;" class="content">address </td>
                          </tr>
                          <tr>
                            <td height="20" style="height: 20px; line-height:20px;"></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top" style="font-family: Times New Roman, serif; font-size: 20px; mso-line-height-rule: exactly; line-height: 30px; font-weight: 400;color: #e0dab7;" class="content">28 Jackson Blvd Ste 1020 </td>
                          </tr>
                          <tr>
                            <td align="center" valign="top" style="font-family: Times New Roman, serif; font-size: 20px; mso-line-height-rule: exactly; line-height: 30px; font-weight: 400;color: #e0dab7;" class="content">Chicago </td>
                          </tr>
                          <tr>
                            <td align="center" valign="top" style="font-family: Times New Roman, serif; font-size: 20px; mso-line-height-rule: exactly; line-height: 30px; font-weight: 400;color: #e0dab7;" class="content">IL 60604-2340 </td>
                          </tr>
                          <tr>
                            <td height="36" style="height: 36px; line-height:36px;"></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top">
                              <img src="https://livedemo00.template-help.com/newsletter_53030/images/icon-phone.png" alt="phone" width="36" height="36" />
                            </td>
                          </tr>
                          <tr>
                            <td height="16" style="height: 16px; line-height:16px;"></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top" style="font-family: Times New Roman, serif; font-size: 24px; mso-line-height-rule: exactly; line-height: 30px; font-weight: 700;color: #fffbb5;" class="content">1(234) 567-9842 </td>
                          </tr>
                          <tr>
                            <td height="51" style="height: 51px; line-height:51px;"></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top">
                              <table align="center" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td align="center" valign="top" style="background: #0c2610; padding: 0 24px;">
                                    <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td height="19" style="height: 19px; line-height:19px;"></td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="padding: 0 10px;">
                                          <a style="text-decoration: none; display: inline-block;" href="https://maxxbat.com/">
                                            <img src="https://livedemo00.template-help.com/newsletter_53030/images/socials1.png" alt="socials1" width="21" height="21" />
                                          </a>
                                        </td>
                                        <td align="center" valign="top" style="padding: 0 10px;">
                                          <a style="text-decoration: none; display: inline-block;" href="https://maxxbat.com/">
                                            <img src="https://livedemo00.template-help.com/newsletter_53030/images/socials2.png" alt="socials2" width="21" height="21" />
                                          </a>
                                        </td>
                                        <td align="center" valign="top" style="padding: 0 10px;">
                                          <a style="text-decoration: none; display: inline-block;" href="https://maxxbat.com/">
                                            <img src="https://livedemo00.template-help.com/newsletter_53030/images/socials3.png" alt="socials3" width="21" height="21" />
                                          </a>
                                        </td>
                                        <td align="center" valign="top" style="padding: 0 10px;">
                                          <a style="text-decoration: none; display: inline-block;" href="https://maxxbat.com/">
                                            <img src="https://livedemo00.template-help.com/newsletter_53030/images/socials4.png" alt="socials4" width="21" height="21" />
                                          </a>
                                        </td>
                                        <td align="center" valign="top" style="padding: 0 10px;">
                                          <a style="text-decoration: none; display: inline-block;" href="https://maxxbat.com/">
                                            <img src="https://livedemo00.template-help.com/newsletter_53030/images/socials5.png" alt="socials5" width="21" height="21" />
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td height="14" style="height: 14px; line-height:14px;"></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td height="43" style="height: 43px; line-height:43px;"></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top" style="padding: 0 40px;font-family: Times New Roman, serif; font-size: 16px; mso-line-height-rule: exactly; line-height: 22px; font-weight: 400;color: #dfd9b6;" class="content">You're receiving this email because you signed up for <a href="https://maxxbat.com/" style="color: #8f9f61; text-decoration: none;">MAXX BAT»</a> or attended one of our events. You can&nbsp;<a href="https://maxxbat.com/" style="color: #8f9f61; text-decoration: underline !important;">unsubscribe</a>&nbsp;from this email or change your email notifications. Online version is&nbsp;<a href="https://maxxbat.com/" style="color: #8f9f61; text-decoration: underline !important;">here</a>.</td>
                          </tr>
                          <tr>
                            <td height="35" style="height: 35px; line-height:35px;"></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center" valign="top">
                  <table width="600" align="center" class="container" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" valign="top" style="background: #132d01;">
                        <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td height="23" style="height: 23px; line-height:23px;"></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top" style="font-family: Times New Roman, serif; font-size: 13px; mso-line-height-rule: exactly; line-height: 16px; font-weight: 400; text-transform: uppercase;color: #8f9f61;" class="content"><a style="text-decoration: none; color: #8f9f61;" href="https://maxxbat.com/">MAXX BAT  Casino </a> © 2015 | <a style="text-decoration: none; color: #8f9f61;" href="https://maxxbat.com/">Privacy policy </a>
                            </td>
                          </tr>
                          <tr>
                            <td height="23" style="height: 23px; line-height:23px;"></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr class="remove">
                      <td height="65" style="height: 65px; line-height:65px;"></td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;

  const emailMsg = {
    from: 'info@maxxbat.com',
    to: email,
    subject: 'Welcome to maxxbat - Your Online Betting Account Details',
    body_html: htmlContent,
  };

  client.mailer.send(emailMsg, function (err, result) {
    if (err) {
      console.error('Error sending email:', err);
    } else {
      console.log('Email sent successfully:', result);
    }
  });
};





// User jsonWebToken Info
// router.get("/user_jwtinfo", (req, res) => {
//   const AgentEmail = req.body.agentEmail;

//   User.findOne({ email: req.body.agentEmail }, (err, user) => {
//     const Agentcurrency = Number(user.currency);
//     console.log(Agentcurrency);
//   });
// });

module.exports = router;
