const express = require("express");
const router = express.Router();
const User = require('../../models/User')
const Game = require('../../models/Game');
const e = require("express");
const Bet = require("../../models/Bet");
const SlotGames = require("../../models/SlotegratorGames");
const Gamelist = require("../../models/Gamelist");
const mongoose = require("mongoose");
var macaddress = require('macaddress');

//index, delete, create
const limit = 32;

macaddress.one(function(err, mac) {
  console.log("Mac address for this host: %s", mac);
});


router.get('/providerlist', async (req, res) => {

  try {
      const uniqueProviders = await Gamelist.aggregate([
      {
        $group: {
          _id: '$provider',
        },
      },
      {
        $sort: {
          _id: 1, // 1 for ascending order, -1 for descending order
        },
      },
    ]);
    // Extract only the provider names from the aggregation result
      const providerNames = uniqueProviders.map((item) => item._id);
      res.status(200).json(providerNames);       
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went.' });
  }
});


router.get('/gametypelist', async (req, res) => {
  try {
    const uniqueTypes = await Gamelist.aggregate([
    {
        $group: {
          _id: '$type',
        },
      },
      {
        $sort: {
          _id: 1, // 1 for ascending order, -1 for descending order
        },
      },
    ]);
    // Extract only the provider names from the aggregation result
      const gameType = uniqueTypes.map((item) => item._id);
      res.status(200).json(gameType);       
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went.' });
  }
});


// game
router.get('/gamelist', async (req, res) => {
  const { page } = req.query;
  try {     

    const page = parseInt(req.query.page) || 1;
    const skip = (page - 1) * limit;  
 
   
      const data = await Gamelist.find().skip(skip).limit(limit);
      const totalResults = data.length;
      res.json({
        totalResults,
        currentPage: page,
        totalPages: Math.ceil(totalResults / limit),
        data,
      });

  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      res.status(error.response.status).json({
        status: 'error',
        message: error.response.data.message,
      });
    } else {
      res.status(400).json({
        status: 'error',
        message: error.message,
      });
    } 
  }
});


// game
router.get('/livecasinolist', async (req, res) => {
  const { page } = req.query;
  try {     

      const page = parseInt(req.query.page) || 1;
      const skip = (page - 1) * limit;   
    
      const data = await Gamelist.find({type : 'live dealer'}).skip(skip).limit(limit);
      const totalResults = data.length;
      res.json({
        totalResults,
        currentPage: page,
        totalPages: Math.ceil(totalResults / limit),
        data,
      });

  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      res.status(error.response.status).json({
        status: 'error',
        message: error.response.data.message,
      });
    } else {
      res.status(400).json({
        status: 'error',
        message: error.message,
      });
    } 
  }
});




// game search

router.get('/searchgame', async (req, res) => {
  const { search } = req.query;

  try {
     
    const limit = 50;  
    let data = [];
    // Search by name
    const nameSearchResults = await Gamelist.find({
      name: { $regex: new RegExp(search, 'i') },
    }).limit(limit);

    if (nameSearchResults.length > 0) {
      data = nameSearchResults;
    } else {
      // If no results found by name, search by type
      const typeSearchResults = await Gamelist.find({
        type: { $regex: new RegExp(search, 'i') },
      }).limit(limit);
      data = typeSearchResults;
    }
    const totalResults = data.length;
    res.json({
      totalResults,
      currentPage: 1,
      totalPages: Math.ceil(totalResults / limit),
      data,
    });

  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      res.status(error.response.status).json({
        status: 'error',
        message: error.response.data.message,
      });
    } else {
      res.status(400).json({
        status: 'error',
        message: error.message,
      });
    } 
  }
});




// game
router.get('/gamelistbyprovider', async (req, res) => {
  const { providerName, page } = req.query;

  try {
     
    const page = parseInt(req.query.page) || 1;
    const skip = (page - 1) * limit;  

   
    const data = await Gamelist.find({provider:providerName}).skip(skip).limit(limit);
    const totalResults = data.length;
    res.json({
      totalResults,
      currentPage: page,
      totalPages: Math.ceil(totalResults / limit),
      data,
    });


  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      res.status(error.response.status).json({
        status: 'error',
        message: error.response.data.message,
      });
    } else {
      res.status(400).json({
        status: 'error',
        message: error.message,
      });
    } 
  }
});


// game
router.get('/gamelistbytype', async (req, res) => {
  const { gameType, page } = req.query; 

  try {
    const page = parseInt(req.query.page) || 1;
    const skip = (page - 1) * limit;  

    
    const data = await Gamelist.find({type:gameType}).skip(skip).limit(limit);
    const totalResults = data.length;
    res.json({
      totalResults,
      currentPage: page,
      totalPages: Math.ceil(totalResults / limit),
      data,
    });
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      res.status(error.response.status).json({
        status: 'error',
        message: error.response.data.message,
      });
    } else {
      res.status(400).json({
        status: 'error',
        message: error.message,
      });
    } 
  }
});



router.get('/games/index/:gameId', (req, res) => {
  let gameId = req.params.gameId
  Bet.find({game: gameId}, (err, bets) => {
    return res.json(bets)
  })
})

router.delete('/:betId', (req, res) => {
  Bet.findByIdAndDelete(req.params.betId, (err, bet) => {
    if(bet === null){
      return res.status(404).json({"msg": "bet already deleted"})
    }
    if (!!err){
      return res.status(422).json({"msg": "Failed to delete bet"})
    } else {
      User.findById(bet.user, (err, user) => {
        if (!!err){
          return res.status(404).json({"msg": "Bet is pointing to a nonexistent user, Bet deleted"})
        }
        Game.findById(bet.game, (err, game) => {
          if(!!game){
            if(game.status === "Incomplete"){
              if (bet.status === "Incomplete"){

                user.currency += bet.amount

                //Updating ledger 
                user.history.push({x: new Date(Date.now()), y: user.currency})

                user.save()
                return res.json({user, bet})
              } else {
                return res.json({"msg": "Bet was already resolved. Bet deleted"})
              }
            } else {
              bet.save()
              return res.status(422).json({"msg": "Game is in progress or concluded. Bet not deleted."})
            }
          } else {
            return res.status(404).json({"msg": "Bet is refrencing a non-existent game. Bet deleted."})
          }
        })
      })
    }
  })
})


router.post('/create', (req, res) => {
  if (typeof req.body.userId === 'undefined' ){
    return res.status(404).json({"msg":"userId is undefined"})
  }
  User.findById(req.body.userId, (err, user) => {

    if (req.body.amount <= 1){
      return res.status(422).json({"msg": "User must bet at least 1 unit of currency"})
    }

    if (user.currency - req.body.amount >= 0){
      let bet = {}
      bet.user = user;

      

      Game.findById(req.body.game, (err, game) => {
        if (game.status === 'Final' || game.status === 'In Progress'){
          return res.status(422).json({"msg": `game ${game.status}`})
        }

        bet.game = req.body.game; 
        bet.status = 'Incomplete'
        bet.amount = parseInt(req.body.amount);

        //set bet.date equal to today 
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
      
      
        
        bet.date = yyyy + '-' + mm + '-' + dd;
      

        // set status 
        if (req.body.selection === "true"){
          selection = true;
        } else {
          selection = false; 
        }

        //caculate payout
        if (selection){
          bet.selection = game.home_team
          if (game.home_odds > 0){
            bet.payout = (game.home_odds/100) * bet.amount + bet.amount
          } else {
            bet.payout = (100/game.home_odds) * bet.amount * -1 + bet.amount
          }
        } else {
          bet.selection = game.away_team 
          if (game.away_odds > 0){
            bet.payout = (game.away_odds/100) * bet.amount + bet.amount
          } else {
            bet.payout = (100/game.away_odds) * bet.amount * -1 + bet.amount
          }
        }
        bet.payout = Math.floor(bet.payout)

        // deduct amount
        user.currency -= bet.amount

        //update ledger 
        user.history.push({x: new Date(Date.now()), y: user.currency})
        
        user.save()

        //respond with the the made bet and the updated user 
        let newBet = new Bet(bet)
        newBet.save()
        return res.json({bet: newBet, user: user,  "msg": "Bet was succesfully saved!"})
        
      })
    } else {
   
    return res.status(422).json({"msg": "Not enough funds." })
    }
  })
})

 

// Route to fetch user information
router.post('/bettingHistory', async (req, res) => {

  try {
    const player_id = req.body['player_id'];
    const page = req.body['page'];
    const report = await SlotGames.find({player_id:player_id}).sort({ _id: -1 });

    res.json(report);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went.' });
  }
});

router.get("/casinoList", async (req, res) => {
  const { page = 1, limit = 10, search = "", status } = req.query; // Changed limit to 50
  const regex = new RegExp(search, "i"); // Case-insensitive search

  const searchQuery = {
    $or: [
      { uuid: regex },
      { name: regex },
      { type: regex },
      { provider: regex },
    ],
  };



  if (status) {
    searchQuery.status = status;
  }

  // Fetch data based on search query and pagination
  const allUser = await Gamelist.find(searchQuery).sort({ _id: -1 });

  const startIndex = (page - 1) * limit;
  const lastIndex = page * limit;

  const results = {};
  results.totalUser = allUser.length;
  results.pageCount = Math.ceil(allUser.length / limit);

  if (lastIndex < allUser.length) {
    results.next = {
      page: page + 1,
    };
  }
  if (startIndex > 0) {
    results.prev = {
      page: page - 1,
    };
  }

  results.result = allUser.slice(startIndex, lastIndex);
  return res.json(results);
});


//  casinoGameInfo

// Get Casino Game Info by ID
router.get('/casinoGameInfo/:id', async (req, res) => {
  try {
      const game = await Gamelist.findById(req.params.id);
      if (!game) return res.status(404).json({ message: "Game not found" });
      res.json(game);
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
  }
});

// Update Casino Game by ID
router.put('/casinoGameUpdate/:id', async (req, res) => {
  try {
      const { name, provider } = req.body;

      const updatedGame = await Gamelist.findByIdAndUpdate(
          req.params.id,
          { name },
          { new: true }
      );

      if (!updatedGame) return res.status(404).json({ message: "Game not found" });

      res.json({ message: "Game updated successfully", game: updatedGame });
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
  }
});



router.put('/block/:rowId', async (req, res) => {
  try {
    const { action, rowId } = req.params;
    const game = await Gamelist.findOne({ _id: rowId });
    console.log(game);
    if (!game) {
      return res.status(404).json({ message: 'Game not found' });
    }


    if(game.status == 1){
      const update = { status: 2 }; 
      const updatedUser = await Gamelist.findByIdAndUpdate(rowId, update, { new: true }); 
      if (!updatedUser) {
        return res.status(404).json({ message: 'Game not found' });
      }
      return res.status(200).json({ message: 'Game Inactive successfully' });
    } else if(game.status == 2){
      const update = { status: 1 }; 
      const updatedUser = await Gamelist.findByIdAndUpdate(rowId, update, { new: true }); 
      if (!updatedUser) {
        return res.status(404).json({ message: 'Game not found' });
      }
       return res.status(200).json({ message: 'User Active successfully' });
    }
 
    return res.status(200).json({ message: `Game ${updatedStatus === 1 ? 'activated' : 'deactivated'} successfully` });
  } catch (error) {
    console.error('Error blocking/unblocking game:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});




module.exports = router; 