const express = require("express");
const app = express();
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const UserBLTR = require("../../models/UserBLTR");
const keys = require("../../config/keys_development");
const jwt = require("jsonwebtoken");
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const mongoose = require("mongoose");
const cors = require("cors");
const quickSort = require("../../util/sort");

router.use(cors({
  origin: ["https://xyz-games-frontend.netlify.app", "https://betbay.io", "http://localhost:3000","https://xyz-frontend.onrender.com"]
}));
//index ordered by currency, add currency, show, login, sign up
 
// router.use(express.urlencoded({
//   extended: true
// }))

// router.use(bodyParser.json()); 


// app.use(bodyParser.urlendcoded({extended:true}));


router.get("/leaderboard/:userCount", (req, res) => {
  User.find().then((users) => {
    let orderedUsers = quickSort(users, 0, users.length - 1);
    if (users.length - req.params.userCount < 0) {
      return res.status(400).json({
        msg: `More users were requested than exist, request ${
          (users.length - req.params.userCount) * -1
        } less users`,
      });
    } else {
      //potential TODO lighten payload
      return res.json(
        orderedUsers.slice(orderedUsers.length - req.params.userCount).reverse()
      );
    }
  });
});

// router.post('/add', (req, res) => {
//   User.findById(req.body.userId, (err, user) => {
//     if (user === null){
//       return res.status(404).json({"msg": "user not found"})
//     }
//     console.log(user)
//     user.currency += parseInt(req.body.amount)

//     user.save()
//     return res.json(user.currency)
//   })
// })

router.get("/show/:userId", (req, res) => {
  if (req.params.userId === "undefined") {
    return res.status(422).json({ msg: "userId is undefined" });
  }
  User.findById(req.params.userId).then((user) => {
    if (!!user) {
      return res.json(user);
    } else {
      return res.status(404).json({ msg: "User not found" });
    }
  });
});

router.get("/getdata", (req, res) => {
  if (req.params.userId === "undefined") {
    return res.status(422).json({ msg: "userId is undefined" });
  }
  User.find().then((user) => {
    if (!!user) {
      return res.json(user);
    } else {
      return res.status(404).json({ msg: "User not found" });
    }
  });
});



// Route to fetch user information
router.get('/singleUserBalance/:email', async (req, res) => {
  try {
    const email = req.params.email;
    const user = await User.findOne({ email: email }); // Use an object with the email property as the filter
    // console.log(user);
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Route to fetch user information
router.get('/getUserBalanceData/:email', async (req, res) => {
  try {
    const email = req.params.email;
    const user = await UserBLTR.find({ email: email }); // Use an object with the email property as the filter
    // console.log(user);
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});



router.get("/getUserBalanceDataAll",async(req,res)=>{
  try {
      const userdata = await UserBLTR.find();
      res.status(201).json(userdata)
      console.log(userdata);
  } catch (error) {
      res.status(422).json(error);
  }
})
 

// router.get('/handshake', (req, res) => {
//   User.findById(req.body.userId).then(user => {
//     if (user) {
//       if (parseInt(req.body.amount) !== user.currency){
//         return res.status(401).json({"msg": "User currency data is inconsistent"})
//       }
//       return res.json(user.currency)
//     } else {
//       return res.status(404).json({"msg": "User not found"})
//     }
//   })
// })

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  // Check to make sure nobody has already registered with a duplicate email
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      // Throw a 400 error if the email address already exists
      console.log('user already exist')
      return res
        .status(400)
        .json({ email: "A user has already registered with this address" });
    } else {
      // Otherwise create a new user
      var date = new Date(Date.now());
      
      // var myHeaders = new Headers();
      // myHeaders.append("apikey", "FvEGYySfvtcXZV3Fs2lqYIiftdlZVOtq");

      // var requestOptions = {
      //   method: 'GET',
      //   redirect: 'follow',
      //   headers: myHeaders
      // };

      // const userMobile = req.body.email ;
      // fetch("https://api.apilayer.com/number_verification/validate?number="+userMobile, requestOptions)
      //   .then(response => response.text())
      //   .then(result => console.log(result))
      //   .catch(error => console.log('error', error));


      const newUser = new User({
        handle: req.body.handle,
        email: req.body.email,
        user_id: 'u100000',
        password: req.body.password,
        tpin: req.body.password,
        role_as: req.body.role_as,
        mobile: req.body.mobile,
        currency: 1000,
        history: [{ x: date, y: 1000 }],
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.tpin = hash;
          newUser
            .save()
            .then((user) => {
              console.log('user created')
              res.json(user)
            })
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  const {email, password} = req.body
  console.log('req.body:', req.body.email)
User.findOne({ email: email }).then((data)=>
{
  
}).catch((err)=>console.log(err))

  if (!isValid) {
   // return res.status(400).json(errors);
  }

  User.findOne({ email: email }).then((user) => {
    console.log(user)   
     if (!user) {
      console.log('user not found')
      return res.status(404).json({ email: "This user does not exist" });
    }

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!!isMatch) {
        const payload = {
          //is this mongo's object id?
          id: user.id,
          handle: user.handle,
          email: user.email,
          role_as: user.role_as,
          currency: user.currency,
        };
 
        jwt.sign(
          payload,
          process.env.JWT_SECRET,
          {
            expiresIn: 3600,
          }, (err, token) => {                  
            res.json({
              sucess: true,
              token: "Bearer" + token,
            });
          }
        );
        console.log('login success')
      } else {
        return res.status(400).json({ password: "Incorrect password" });
      }
    });
  });
});

module.exports = router;
