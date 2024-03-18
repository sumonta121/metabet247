const express = require("express");
const router = express.Router();
const axios = require('axios');
const cryptoo = require('crypto')
const querystring = require('querystring')
const url = require('url');
const cors = require("cors");
const User = require("../../models/User");
const Gamelist = require("../../models/Gamelist");
const SloteGames = require("../../models/SlotegratorGames");
const ObjectID = require("mongodb").ObjectID;
const { v4: uuidv4 } = require('uuid');

//Demo api key
// const apiUrl      = 'https://staging.slotegrator.network/api/index.php/v1/games';
// const merchantId  = '453f1d3187534a3e63b87218c5628909';
// const merchantKey = '47a19045a1a09f3fd4b7bacdcda04de8be22ed3c';

//Live api key
const apiUrl      = 'https://gis.slotegrator.com/api/index.php/v1/games';
const merchantId  = 'b156e43c60c9094bfafb7541cd0f46e8';
const merchantKey = '2cc45a3d86e7679ff3607a0935d465cfc22b627e';



const time = Math.floor(Date.now() / 1000).toString();

const nonce = cryptoo
  .createHash('md5')
  .update(cryptoo.randomBytes(16))
  .digest('hex');

const headers = {
  'X-Merchant-Id': merchantId,
  'X-Timestamp': time,
  'X-Nonce': nonce,
};
// X-Sign generate
function calculateXSign(headers, params) {
  const mergedObject = { ...headers, ...params };
  const sortedKeys = Object.keys(mergedObject).sort();
  const sortedObject =
    sortedKeys.reduce((obj, key) => {
      obj[key] = mergedObject[key];
      return obj;
    }, {});
  const queryString = querystring.stringify(sortedObject);
  const hmac = cryptoo.createHmac('sha1', merchantKey);
  hmac.update(queryString);
  const sign = hmac.digest('hex');
  return { sign, queryString };
}

// GET game list
router.get('/gamelist', async (req, res) => {
  const currentPage = req.query.page;
  const time = Math.floor(Date.now() / 1000).toString();
  const headers = {
    'X-Merchant-Id': merchantId,
    'X-Timestamp': time,
    'X-Nonce': nonce,
  };
  const requestParams = {
    page: currentPage,
  };

  const { sign } = calculateXSign(headers, requestParams)
  const requestOptions = {
    headers: {
      'X-Merchant-Id': merchantId,
      'X-Timestamp': time,
      'X-Nonce': nonce,
      'X-Sign': sign,
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  try {
    const apiUrlWithQuery = url.format({
      pathname: apiUrl, query: requestParams
    });
    const response = await axios.get(apiUrlWithQuery, requestOptions); 
  
    // New game insert metod
    const items = response.data.items;   
    const existingUUIDs = await Gamelist.find({}, 'uuid');
    const newItems = items.filter(item => !existingUUIDs.some(existing => existing.uuid === item.uuid));
    await Gamelist.insertMany(newItems);
    // New game insert metod

    console.log('data successfully fetched!');
    res.header("Access-Control-Allow-Origin", "*");
    res.json(response.data);
  } catch (error) {
    
    res.status(500).json({
      error:
        error.message
    });
  }
});

 
// Init game
router.post('/gameinit', async (req, res) => {
  const { currency, game_uuid, player_id, player_name, session_id } = req.query;
  const time = Math.floor(Date.now() / 1000).toString();
  const headers = {
    'X-Merchant-Id': merchantId,
    'X-Timestamp': time,
    'X-Nonce': nonce,
  };
  const requestParams = {
    currency: currency,
    game_uuid: game_uuid,
    player_id: player_id,
    player_name: player_name,
    language: 'en',
    session_id: session_id,
    return_url: 'https://metabet247.com/#/slot-game',
  };

  await SloteGames.collection.insertOne({ amount: 0,currency: currency,game_uuid: game_uuid,player_id: player_id,session_id: session_id,type: 'init',comments: 'success', createdAt: new Date(),updatedAt: new Date()});

  const { sign, queryString } = calculateXSign(headers, requestParams)

  const options = {
    method: 'POST',
    headers: {
      'X-Merchant-Id': merchantId,
      'X-Timestamp': time,
      'X-Nonce': nonce,
      'X-Sign': sign,
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: queryString
  };
  try {
    const apiUrlWithQuery = url.format({ pathname: `${apiUrl}/init` });
    const response = await axios(apiUrlWithQuery, options);
    console.log(response.data);
    return res.json(response.data);
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      return res.status(error.response.status).json({
        status: 'error',
        message: error.response.data.message,
      });
    } else {
      return res.status(400).json({
        status: 'error',
        message: error.message,
      });
    } 
  }
});



  // Integrator Endpoint for Game Aggregator communication
  router.post('/callback/datas', async(req, res) => {

    const { action } = req.body; 

    const headers = {
      'X-Merchant-Id': req.headers['x-merchant-id'], // Replace with the actual header name
      'X-Timestamp': req.headers['x-timestamp'],
      'X-Nonce': req.headers['x-nonce'],
    };
    const XSign = req.headers['x-sign'];
 
    const { amount, currency, game_uuid, player_id, transaction_id, session_id , type, freespin_id, quantity, round_id, finished} = req.body; 
  
    const requestParams = { ...req.body, ...headers };
    const { sign, queryString } = calculateXSign(headers, requestParams)
  
    
    
    // const headersss = {
    //   'sign-Id': sign, 
    //   'X-XSign': XSign,
    // };

   // return res.status(200).json(headersss);

    if (action !== 'rollback') {
      if (XSign !== sign) {
        return res.status(200).json({
          error_code: "INTERNAL_ERROR",
          error_description: "Invalid sign",
        });     
      } 
    }

    if (action === 'balance') {
        try{
          const { currency, player_id, session_id, action } = req.body;        
                  
          const user = await User.findById(player_id).select('name email currency');  
          if (!user) {
            return  res.status(200).json({
              error_code: "INTERNAL_ERROR",
              error_description: "This user does not exist in our system.",
            });
          }else{
            if(user.currency > 0){
                const balance_result = {
                  balance: user.currency.toFixed(4),
                  currency: "EUR",
                };          
                return   res.status(200).json(balance_result);
            }else{
              return  res.status(200).json({
                error_code: "INSUFFICIENT_FUNDS",
                error_description: "Not enough money to continue playing.",
              });
            }          
          }
        } catch (error) {
          return res.status(200).json({
            error_code: "INTERNAL_ERROR",
            error_description: "This user does not exist in our system.",
          });
        }
    } else if (action === 'win') {
      try {          
        const { amount, currency, game_uuid, player_id, transaction_id, session_id , type, freespin_id, quantity, round_id, finished} = req.body; 
       // const userObjectID = new ObjectID(player_id);
          
          const user = await User.findById(player_id).select('name email currency');  

          if (!user) {
            return   res.status(200).json({
              error_code: "INTERNAL_ERROR",
              error_description: "This user does not exist in our system.",
            });        
          }

          if (amount <= 0) {
            return  res.status(200).json({
              balance: user.currency.toFixed(4),
              transaction_id: transaction_id,
            });        
          }

          const checkDuplicate = await SloteGames.find({
            $and: [            
              { transaction_id: transaction_id },
              { game_uuid: game_uuid },
              { player_id: player_id },
              { type: type},
              { session_id: session_id }
            ]
          });

          if (checkDuplicate.length === 0) {} else{
            return  res.status(200).json({
              balance: user.currency.toFixed(4),
              transaction_id: transaction_id,
            });        
          }        

       
            const currentBalance = user.currency;  
            const updatedBalance = parseFloat(currentBalance) + parseFloat(amount);
            user.currency = updatedBalance.toFixed(4);
           
            await user.save();    
            
            await SloteGames.collection.insertOne({ amount: amount,currency: currency,game_uuid: game_uuid,player_id: player_id,transaction_id: transaction_id,session_id: session_id,type: type,freespin_id: freespin_id,quantity: quantity,round_id: round_id,finished: finished, comments: 'success', createdAt: new Date(),updatedAt: new Date()});

            const user_update = await User.findById(player_id).select('name email currency');  
            const response = {
              balance: user_update.currency.toFixed(4),
              transaction_id: uuidv4(),
            };
            return    res.status(200).json(response);         
                       
        } catch (error) {
          return   res.status(200).json({
            error_code: "INTERNAL_ERROR",
            error_description: "Something went wrong.",
          });    
        }
    } else if (action === 'bet') {
      try {                          
        const { amount, currency, game_uuid, player_id, transaction_id, session_id , type, freespin_id, quantity, round_id, finished,} = req.body; 
        //  const userObjectID = new ObjectID(player_id);
          
          const user = await User.findById(player_id).select('name email currency');     
  
          if (!user) {
            return   res.status(200).json({
              error_code: "INTERNAL_ERROR",
              error_description: "This user does not exist in our system.",
            });        
          }

          if (amount <= 0) {
            return  res.status(200).json({
              balance: user.currency.toFixed(4),
              transaction_id: transaction_id,
            });        
          }

          
          const checkDuplicate = await SloteGames.find({
            $and: [
              { transaction_id: transaction_id },
              { game_uuid: game_uuid },
              { player_id: player_id },
              { type: type},
              { session_id: session_id }
            ]
          });

          if (checkDuplicate.length === 0) {} else{
            return  res.status(200).json({
              balance: user.currency.toFixed(4),
              transaction_id: transaction_id,            
            });        
          }         
        
          const currentBalance = user.currency;          
          const updatedBalance = currentBalance - amount;
          if (updatedBalance >= 0) { 
              user.currency = updatedBalance.toFixed(4);           
              await user.save();
              await SloteGames.collection.insertOne({ amount: amount,currency: currency,game_uuid: game_uuid,player_id: player_id,transaction_id: transaction_id,session_id: session_id,type: type,freespin_id: freespin_id,quantity: quantity,round_id: round_id,comments: 'success', finished: finished,createdAt: new Date(),updatedAt: new Date()});

              const user_update = await User.findById(player_id).select('name email currency');  
              const response = {
                balance: user_update.currency.toFixed(4),
                transaction_id: uuidv4(),
              };
              return res.status(200).json(response);         
           
          } else {
            return res.status(200).json({
                error_code: "INSUFFICIENT_FUNDS",
                error_description: "Not enough money to continue playing.",
              });
          }
        } catch (error) {
          return  res.status(200).json({
            error_code: "INTERNAL_ERROR",
            error_description: "Something went wrong.",
          });
         
        }
    } else if (action === 'refund') {
       try {   
        const { amount, currency, game_uuid, player_id, bet_transaction_id, session_id , type, freespin_id, quantity, round_id, finished,} = req.body; 

        const user = await User.findById(player_id).select('name email currency');  

          if (!user) {
            return   res.status(200).json({
              error_code: "INTERNAL_ERROR",
              error_description: "This user does not exist in our system.",
            });        
          }
 
          if (amount <= 0) {
            return  res.status(200).json({
              balance: user.currency.toFixed(4),
              transaction_id: bet_transaction_id,
            });        
          }

          // const betTransactionCheck = await SloteGames.find({
          //   $and: [
          //     { transaction_id: bet_transaction_id },
          //     { game_uuid: game_uuid },
          //     { player_id: player_id },
          //     { type: 'bet' },
          //     { session_id: session_id }
          //   ]
          // });            
          
          const betTransactionCheck = await SloteGames.find({
            $and: [
              { transaction_id: bet_transaction_id },
              { game_uuid: game_uuid },
              { player_id: player_id },
              { type: 'bet' },
              { session_id: session_id }
            ]
          }).sort({ createdAt: -1 }).limit(1);

          
      
          if (betTransactionCheck.length === 0) {
            return  res.status(200).json({
              balance: user.currency.toFixed(4),
              transaction_id: bet_transaction_id,              
            });        
          }
        
          const checkDuplicate = await SloteGames.find({
            $and: [
              { transaction_id: bet_transaction_id },
              { type: type },
              { session_id: session_id }
            ]
          });  
          
        
          if (checkDuplicate.length === 0) {} else{
            return  res.status(200).json({
              balance: user.currency.toFixed(4),
              transaction_id: bet_transaction_id,              
            });        
          }
        
          const currentBalance = user.currency;         
          const updatedBalance = parseFloat(currentBalance) + parseFloat(amount);          
          user.currency = updatedBalance.toFixed(4);             
          await user.save();    
            
          await SloteGames.collection.insertOne({ amount: amount,currency: currency,game_uuid: game_uuid,player_id: player_id,transaction_id: bet_transaction_id,session_id: session_id,type: type,freespin_id: freespin_id,quantity: quantity,round_id: round_id,finished: finished,comments: 'success', createdAt: new Date(),updatedAt: new Date()});

          const user_update = await User.findById(player_id).select('name email currency');  
          const response = {
            balance: user_update.currency.toFixed(4),
            transaction_id: uuidv4(),
          };
          return   res.status(200).json(response);         
        
          
        } catch (error) {
          return  res.status(200).json({
            error_code: "INTERNAL_ERROR",
            error_description: "Something went wrong.",
          });    
        }    
    } else if (action === 'rollback') {
       try {   
        const { currency,game_uuid,player_id,transaction_id,rollback_transactions,session_id,type} = req.body; 
    
        const user = await User.findById(player_id).select('name email currency');  

          if (!user) {
            return   res.status(200).json({
              error_code: "INTERNAL_ERROR",
              error_description: "This user does not exist in our system.",
            });        
          }
             
          const checkDuplicate = await SloteGames.find({
            $and: [
              { transaction_id: transaction_id },
              { type: type },
              { session_id: session_id }
            ]
          });  
          
          const parsedRollbackTransactions = rollback_transactions.map((transaction) => transaction.transaction_id);
          if (checkDuplicate.length === 0) {} else{         
            return  res.status(200).json({
              balance: user.currency.toFixed(4),
              transaction_id: transaction_id,         
              rollback_transactions : parsedRollbackTransactions     
            });        
          }
        
          
         // const parsedRollbackTransactions = [];
          if (Array.isArray(rollback_transactions)) {
            for (const transaction of rollback_transactions) {
              const { action, amount, transaction_id, type } = transaction;
          
              try {
                if (type === 'bet' || type === 'win') {
                  const user = await User.findById(player_id);
                  if (!user) {
                    return   res.status(200).json({
                      error_code: "INTERNAL_ERROR",
                      error_description: "This user does not exist in our system.",
                    });      
                  }
          
                  const currentBalance = parseFloat(user.currency);
                  const updatedBalance = type === 'bet' ? currentBalance + parseFloat(amount) : currentBalance - parseFloat(amount);
                  const users_balance  = updatedBalance.toFixed(4);
                  await SloteGames.findOneAndUpdate({player_id: player_id, transaction_id: transaction_id, type: type}, {comments: action});

                  await User.findByIdAndUpdate(player_id, { currency: users_balance });

               //   parsedRollbackTransactions.push({ transaction_id });
                }
              } catch (error) {
                return  res.status(200).json({
                  error_code: "INTERNAL_ERROR",
                  error_description: "Something went wrong.",
                });    
              }
            }
          }
        
          await SloteGames.collection.insertOne({ currency: currency,game_uuid: game_uuid,player_id: player_id,transaction_id: transaction_id,session_id: session_id, comments: 'success', type: type,createdAt: new Date(),updatedAt: new Date()});


          const user_update = await User.findById(player_id).select('name email currency');  
          const response = {
            balance: user_update.currency.toFixed(4),
            transaction_id: uuidv4(),
            rollback_transactions : parsedRollbackTransactions     
          };
          return   res.status(200).json(response);         
        
          
        } catch (error) {
          return  res.status(200).json({
            error_code: "INTERNAL_ERROR",
            error_description: "Something went wrong.",
          });    
        }    
    } else {
      return  res.status(200).json({
        error_code: "INTERNAL_ERROR",
        error_description: "Invalid action parameter.",
      });     
    }    

  });



  

  

  // Init game
  router.post('/self-validate', async (req, res) => {

  //const apiUrl2 = 'https://gis.slotegrator.com/api/index.php/v1/self-validate';

  const time = Math.floor(Date.now() / 1000).toString();
  const headers = {
    'X-Merchant-Id': merchantId,
    'X-Timestamp': time,
    'X-Nonce': nonce,
  };

  const { amount, game_uuid, player_id, round_id, transaction_id, session_id,type,createdAt} = req.query;
  const requestParams  = {
    success: true,
    log: {
      amount: amount,
      currency: "EUR",
      game_uuid: game_uuid,
      player_id: player_id,
      transaction_id: transaction_id,
      session_id: session_id,
      type: type,
      freespin_id: null,
      quantity: null,
      round_id: round_id,
      finished: null,
      createdAt: createdAt,
      updatedAt: createdAt
    }
  };
 
 

  const { sign, queryString } = calculateXSign(headers, requestParams)

  const options = {
    method: 'POST',
    headers: {
      'X-Merchant-Id': merchantId,
      'X-Timestamp': time,
      'X-Nonce': nonce,
      'X-Sign': sign,
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: queryString
  };

  try {
    //const apiUrlWithQuery = url.format({ pathname: `${apiUrl}/self-validate` });
    const apiUrlWithQuery = url.format({ pathname: `https://staging.slotegrator.com/api/index.php/v1/self-validate`});
    const response = await axios(apiUrlWithQuery, options);

    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      error:
        error.message
    });
  }

    // res.status(200).json(response);
    
  });




const isToday = (someDate) => {
  const today = new Date()
  someDate = new Date(someDate)
  return (someDate.getDate() ==
    today.getDate() && someDate.getMonth() == today.getMonth()
    && someDate.getFullYear() == today.getFullYear());
}

module.exports = router;