const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Need to add currency 
const UserSchema = new Schema({

  handle: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }, 
  mobile: {
    type: String,
    required: true
  },
  //Datetime is not hooked into mongoose, makes data manipulation and database application diffcult 
  //https://github.com/Automattic/mongoose/issues/1598
  password: {
    type: String,
    required: true
  },
  tpin: {
    type: String,
    required: false
  },
  currency: {
    type: Number,
    required: true 
  },
  role_as: {
    type: Number,
    default: 3,
  },
  history: []
}, {
  timestamps: true
})

const User = mongoose.model('users', UserSchema);

module.exports = User;
