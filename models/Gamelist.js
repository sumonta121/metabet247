const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Need to add currency
const GamelistSchema = new Schema(
  {

    uuid: {
      type: String,
    },

    name: {
      type: String,
    },

    image: {
      type: String,
    },

    type: {
      type: String,
    },

    provider: {
      type: String,
    },

    technology: {
      type: String,
    },
    
    has_lobby: {
      type: String,
    },

    is_mobile: {
      type: String,
    },
    
    has_freespins: {
      type: String,
    },
    
    has_tables: {
      type: String,
    },

    freespin_valid_until_full_day: {
      type: String,
    },    
  
    game_type: {
      type: Number,      
      ref: "1 = slots",
    },

    game_company: {
      type: Number,      
      ref: "1 = Slotgrator",
    },

    status: {
      type: String
    }
  },
  
  {
    timestamps: true,
  }
);

const Gamelist = mongoose.model("Gamelist", GamelistSchema);

module.exports = Gamelist;
