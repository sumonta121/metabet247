const mongoose = require("mongoose")
const Schema = mongoose.Schema;
var ObjectId = require('mongodb').ObjectID;

const DepositSchema = new Schema({

  user_id: {
    type: String,
    required: true
},
agent_id: {
    type: String,
    required: true
},
selected_method: {
    type: String,
    required: true
},
wallet_type: {
    type: String,
    required: true
},
send_amount: {
    type: String,
    required: true
},
agent_wallet: {
    type: String,
    required: true
},
send_amount_in_bdt: {
    type: String,
    required: true
},
sender_number: {
    type: String,
    required: true
},
trxid: {
    type: String,
    required: true
},
status: {
    type: String,
    enum: ['pending', 'paid'], 
    required: true,
},


},
{
  timestamps: true
})
const Deposit = mongoose.model("Deposit", DepositSchema)

module.exports = Deposit;