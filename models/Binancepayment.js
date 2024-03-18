const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Need to add currency 
const BinancepaymentSchema = new Schema({  
  user_id: {
    type: String,
    required: true
  },  
  uuid: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  status: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
})

const Binancepayment = mongoose.model('Binancepayment', BinancepaymentSchema);

module.exports = Binancepayment;
