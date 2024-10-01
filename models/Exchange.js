const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Need to add currency
const ExchangeSchema = new Schema(
  {

      user_id: {
          type: String,
          required: true
      },
      sport_name: {
          type: String,
          required: true
      },
      sport_id: {
          type: Number,
          required: true
      },
      amount: {
          type: String,
          required: true
      },
      exposure: {
          type: String,
          required: true
      },
      match_name: {
          type: String,
          required: true
      },
      match_id: {
          type: String,
          required: true
      },
      round_name: {
          type: String,
          required: true
      },
      round_id: {
          type: String,
          required: true
      },
      size: {
          type: String,
          required: false
      },
      odds: {
          type: String,
          required: false
      },
      selection: {
          type: String,
          required: false
      },
      back_lay: {
          type: String,
          required: true
      },
      transation_id: {
          type: String,
          required: true
      },
      status: {
          type: String,
          enum: ['pending', 'paid', 'reject'], 
          required: true,
      },
      
  },
  
  {
    timestamps: true,
  }
);

const Exchange = mongoose.model("exchanges", ExchangeSchema);

module.exports = Exchange;
