const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Need to add currency 
const CountrySchema = new Schema({  
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  currency: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const Countries = mongoose.model('Countries', CountrySchema);

module.exports = Countries;
