const mongoose = require("mongoose")
const Schema = mongoose.Schema;
var ObjectId = require('mongodb').ObjectID;

const WithdrawSchema = new Schema({

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
    
    withdraw_amount: {
        type: String,
        required: true
    },
    chargedAmount: {
        type: String,
        required: true
    },
    withdraw_amount_in_bdt: {
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
        enum: ['Pending', 'Paid', 'Reject'], 
        required: true,
    },
    
    
    },
{
  timestamps: true
})
const Withdraw = mongoose.model("Withdraw", WithdrawSchema)

module.exports = Withdraw;