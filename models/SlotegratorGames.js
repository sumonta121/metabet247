const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SlotegratorGamesSchema = new Schema(
  {
    player_id: {
      type: String,
      required: true
    },
    player_ip: {
      type: String,
      required: true
    },
    action: {
      type: String,
      required: true
    },
    amount: {
      type: String,
      default: null
    },
    currency: {
      type: String,
      default: null
    },
    game_uuid: {
      type: String,
      default: null
    },
    transaction_id: {
      type: String,
      default: null
    },
    session_id: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null
    },
    freespin_id: {
      type: String,
      default: null
    },
    quantity: {
      type: String,
      default: null
    },
    round_id: {
      type: String,
      default: null
    },
    finished: {
      type: String,
      default: null
    },
    comments: {
      type: String,
      default: null
    }
  },
  {
    timestamps: true // Add timestamps option to enable automatic insertion of createdAt and updatedAt fields
  }
);

const SlotegratorGames = mongoose.model('SlotegratorGames', SlotegratorGamesSchema);

module.exports = SlotegratorGames;
