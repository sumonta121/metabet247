const axios = require('axios')
const mongoose = require('mongoose')
const Bet = require('../models/Bet')
const Game = require('../models/Game')
const resolveBets = require('./resolveBets')
const lockBets = require('./lockBets')

const getGameResults = () => {
  //GMT? 
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();


  
}

module.exports = getGameResults
