const express = require("express");
const router = express.Router();
const User = require('../../models/User')
const Game = require('../../models/Game')
const Comment = require('../../models/Comment')
const Countries = require('../../models/Countries')
const Slide = require('../../models/SlideManage')
const BasicSetting = require('../../models/BasicSetting')
const mongoose = require("mongoose");



router.get("/country_list", (req, res) => {  
    Countries.find().sort({ name: 1 }).then((data) => {
        return res.json(data);
    });
  });
  

router.get("/slide_list", (req, res) => {  
  Slide.find().sort({ _id: -1 }).then((data) => {
        return res.json(data);
    });
  });
  

router.get("/agent_list", (req, res) => {  
  const agent_type = 4;
  User.find({ role_as: agent_type }).sort({ _id: -1 }).then((data) => {
        return res.json(data);
    });
  });
  

router.get("/master_agent_list", (req, res) => {  

    const { user_id, role_as } = req.query;
    if(role_as == 4){
      const agent_type = 2.1;
      User.find({ role_as: agent_type }).sort({ _id: -1 }).then((data) => {
        return res.json(data);
      });
    }else if(role_as == 2.1){
      const agent_type = 2;
      User.find({ role_as: agent_type }).sort({ _id: -1 }).then((data) => {
        return res.json(data);
      });
    }else if(role_as == 2){
      const agent_type = 1;
      User.find({ role_as: agent_type }).sort({ _id: -1 }).then((data) => {
        return res.json(data);
      });
    }

  });
  

router.get("/basicinfo", (req, res) => {  
  const rowId  = '649159436693727d84be1fc0';  
  BasicSetting.findOne({ _id: rowId }).then((data) => {
      return res.json(data);
  });

});
  

router.post('/create', (req, res) => {
  let gameId = req.body.gameId

  Game.findById(gameId, (err, game) => {
    if (!!game){

      if (req.body.body.length < 1){
        return res.status(422).json({"msg": "Body cannot be empty"})
      } else if (req.body.handle.length < 1){
        return res.status(422).json({"msg": "Handle cannot be empty"})
      } 
      
      game.comments.push({body: req.body.body, user: req.body.userId, 
        handle: req.body.handle, 
        parent: req.body.parentComment})
      
      game.save()

      return res.json(game)
    } else {
      return res.status(404).json({"msg": "Game not found"})
    }
  } )
})

router.patch('/update', (req, res) => {
  let gameId = req.body.gameId

  Game.findById(gameId, (err, game) => {
    if (err){
      return res.status(422).json(err)
    } else {
      if (!!game){
        // return res.json(game.comments[0]._id)
       for (let i = 0; i < game.comments.length; i++){
         if (game.comments[i]._id.toString() === req.body.commentId){
          if(game.comments[i].user.toString() === req.body.userId){
            game.comments[i].body = req.body.body; 
            game.save()
            return res.json(game)
          } else {
            return res.status(422).json({"msg": "user may only edit their own comments"})
          }
         }
       }
       return res.status(404).json({"msg": "Comment not found"})
      } else {
        return res.status(404).json({"msg": "Game not found"})
      }
    }
  })
})

//req.body.userId
router.delete('/:gameId/delete/:commentId/:userId', (req, res) => {
  // debugger 
  Game.findById(req.params.gameId, (err, game) => {
    if (err){
      return res.status(422).json(err)
    } else {
      if (!!game){
        for (let i = 0; i < game.comments.length; i++) {
          if (game.comments[i]._id.toString() === req.params.commentId) {
           if (game.comments[i].user.toString() === req.params.userId) {
              game.comments.splice(i, 1)
              game.save()
              return res.json(game)
           } else {
              return res.status(422).json({"msg": "user may only delete their own comments"})
            }
          } 
        } 
        return res.status(404).json({"msg": "Comment was not found."})
      }
    }
  })
})


module.exports = router; 