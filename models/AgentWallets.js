const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Need to add currency 
const AgentWalletsSchema = new Schema({

  user_id: {
    type: String,
      required: true
  },

  wallet_method: {
      type: String,
      required: true,
      ref: "bkash, nagad, rocket"
  },
  wallet_type: {
      type: String,
      required: true,
      ref: "personal, agent"
  },
  agent_wallet: {
      type: String,
      required: true
  },
  status: {
      type: String,
      enum: ['active', 'inactive'], 
      required: true,
  },

}, {
  timestamps: true
})

const AgentWallets = mongoose.model('AgentWallets', AgentWalletsSchema);
module.exports = AgentWallets;
