const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Need to add currency
const UserSchema = new Schema(
  {

    //handle, last_name, country, country_currency, language, image, email, mobile, user_id, password, tpin
    first_name: {
      type: String,
    },

    last_name: {
      type: String,
    },

    dob: {
      type: String,
    },

    address: {
      type: String,
    },

    zip: {
      type: String,
    },

    city: {
      type: String,
    },
    
    state: {
      type: String,
    },

    country: {
      type: String,
    },
    
    country_currency: {
      type: String,
    },
    
    language: {
      type: String,
    },

    image: {
      type: String,
    },
    
    handle: {
      type: String,
      required: true,
    },

    user_id: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: false,
    },
    //Datetime is not hooked into mongoose, makes data manipulation and database application diffcult
    //https://github.com/Automattic/mongoose/issues/1598
    password: {
      type: String,
      required: true,
    },

    tpin: {
      type: String,
      required: true,
    },

    currency: {
      type: Number,
      precision: 4,
      default: 0,
    },

    role_as: {
      type: Number,
      default: 3,
      ref: "1 = Admin, 2 = Country Agent, 2.1 = Master Agent, 3 = User, 4 = Agent",
    },

    mobile: {
      type: String,
      required: false,
    },

    personal_mobile: {
      type: String,
      required: false,
    },

    curr_sign: {
      type: String,
      required: false,
    },

    // affliate/agent: ref_percentage, deposit_percentage
    
    refferer: {
      type: String
    },

    ref_percentage: {
      type: String
    },

    deposit_percentage: {
      type: String
    },

    status: {
      type: String
    },

    account_status: {
      type: String,
      default: 1,
      ref: "1 = active, 2 = blocked ",
    },    

  },
  
  {
    timestamps: true,
  }
);

const User = mongoose.model("users", UserSchema);

module.exports = User;
