const express = require("express");
const app = express();
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const UserBLTR = require("../../models/UserBLTR");
const keys = require("../../config/keys_development");
const jwt = require("jsonwebtoken");
const validateRegisterInput = require("../../validation/register");
const validateProfileManage = require("../../validation/register");
const validatePasswordManage = require("../../validation/register");
const validateRegisterWithPhone = require("../../validation/registerWithPhone");

const validateLoginInput = require("../../validation/login");
const mongoose = require("mongoose");
const cors = require("cors");
const quickSort = require("../../util/sort");
const BasicSetting = require("../../models/BasicSetting");
const SlideManage = require("../../models/SlideManage");
const Countries = require("../../models/Countries");
var macaddress = require('macaddress');
var elasticemail = require('elasticemail');



router.use(cors({
  origin: ["https://metabet247.com", "http://localhost:5000", "https://metabet247.onrender.com"]
}));

//index ordered by currency, add currency, show, login, sign up
 
// router.use(express.urlencoded({
//   extended: true
// }))

// router.use(bodyParser.json()); 


// app.use(bodyParser.urlendcoded({extended:true}));

let userMacAddress = '';

// Retrieve the MAC address and store it in the variable
macaddress.one(function(err, mac) {
  if (err) {
    console.error('Error retrieving MAC address:', err);
  } else {
    userMacAddress = mac;
    console.log("Mac address for this host: %s", userMacAddress);
  }
});


const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};


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
router.get('/singleUserBalance/:user_id', async (req, res) => {
  try {
    const user_id = req.params.user_id;
    const user = await User.findOne({ user_id: user_id }); // Use an object with the email property as the filter
    // console.log(user);
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Route to fetch user information
router.get('/getUserBalanceData/:user_id', async (req, res) => {
  try {
    const user_id = req.params.user_id;
    const user = await UserBLTR.find({ user_id: user_id }); // Use an object with the email property as the filter
    // console.log(user);
   return res.json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
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




router.post("/register", async (req, res) => {
  if(req.body.email){
    const { errors, isValid } = validateRegisterInput(req.body);
     if (!isValid) {
        return res.status(400).json(errors);
     }
  }
  
  if(req.body.mobile){
    const { errors, isValid } = validateRegisterWithPhone(req.body);

      if (!isValid) {
        return res.status(400).json(errors);
      }
  }


  try {
    const last_user = await User.findOne({ role_as: 3 }).sort({ _id: -1 });

    if(req.body.email){
      const existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
        return res
          .status(400)
          .json({ email: "A user has already registered with this Email address" });
      }
    }

    if(req.body.mobile){
      const existingUser = await User.findOne({ mobile: req.body.mobile });
      if (existingUser) {
        return res
          .status(400)
          .json({ mobile: "A user has already registered with this Mobile No" });
      }
    }
    
    let new_user_id;
    if (last_user) {
      const lastId = last_user.user_id;
      const newStr = lastId.replace(/^./, "");

      const newRandomNumber = () => {
        const min = 100; // Minimum 3-digit number
        const max = 999; // Maximum 3-digit number
        const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        return randomNumber;
      };
      const latestId = Number(newStr);
      const Randomuser_id = Number(newRandomNumber());
      const IdAdd = latestId + Randomuser_id;
      new_user_id = "U" + IdAdd;
    } else {
      const newStr = 1;
      const newRandomNumber = () => {
        const min = 100; // Minimum 3-digit number
        const max = 999; // Maximum 3-digit number
        const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        return randomNumber;
      };

      const latestId = Number(newStr);
      const Randomuser_id = Number(newRandomNumber());
      const IdAdd = latestId + Randomuser_id;
      new_user_id = "U" + IdAdd;
    }

    const newUser = new User({
      handle: new_user_id,
      email: req.body.email,
      user_id: new_user_id,
      password: req.body.password,
      tpin: req.body.password,
      role_as: req.body.role_as,
      mobile: req.body.mobile,
      country: req.body.country,
      curr_sign: req.body.currency,
      first_name: req.body.f_name,
      last_name: req.body.l_name,
      currency: 0,
    });
    const user = await newUser.save();
    const { email, password } = req.body;
    await sendWelcomeEmail(new_user_id, req.body.password, req.body.email);
     const payload = {
        //is this mongo's object id?
        id: user.id,
        handle: user.handle,
        email: user.email,
        role_as: user.role_as,
        currency: user.currency,         
        userId: user._id,
        usAutoId: user.usAutoId,
        user_id: user.user_id,
        mobile: user.mobile,
        status: user.status,
        macAddress: userMacAddress,
      
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 604800 }, 
        (err, token) => {
          if (err) {
            return res.status(500).json({ error: 'Token creation failed.' });
          }
         // return res.status(200).json('success');
          return res.json({
            success: true,
            message: 'User registered and logged in successfully.',
            jwtToken: 'Bearer' + token,
            token: 'Bearer ' + token,
          });
          //return res.json({ success: true, token: 'Bearer ' + token });
        }
      );
  

    // bcrypt.genSalt(10, (err, salt) => {
    //   bcrypt.hash(newUser.password, salt, async (err, hash) => {
    //     if (err) throw err;
    //     newUser.password = hash;
    //     newUser.tpin = hash;

    //     try {
    //       const user = await newUser.save();

    //       return res.status(200).json('success');
    //     } catch (error) {
    //       console.error("Error saving user:", error);
    //       return res.status(500).json({ error: "Internal Server Error" });
    //     }
    //   });
    // });
  } catch (error) {
  
    return res.status(500).json({ error:  error.message });
  }
});


router.post("/register_okay", async (req, res) => {
  if(req.body.email){
    const { errors, isValid } = validateRegisterInput(req.body);
     if (!isValid) {
        return res.status(400).json(errors);
     }
  }
  
  if(req.body.mobile){
    const { errors, isValid } = validateRegisterWithPhone(req.body);

      if (!isValid) {
        return res.status(400).json(errors);
      }
  }


  try {
    const last_user = await User.findOne({ role_as: 3 }).sort({ _id: -1 });

    if(req.body.email){
      const existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
        return res
          .status(400)
          .json({ email: "A user has already registered with this Email address" });
      }
    }

    if(req.body.mobile){
      const existingUser = await User.findOne({ mobile: req.body.mobile });
      if (existingUser) {
        return res
          .status(400)
          .json({ mobile: "A user has already registered with this Mobile No" });
      }
    }
    
    let new_user_id;
    if (last_user) {
      const lastId = last_user.user_id;
      const newStr = lastId.replace(/^./, "");

      const newRandomNumber = () => {
        const min = 100; // Minimum 3-digit number
        const max = 999; // Maximum 3-digit number
        const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        return randomNumber;
      };
      const latestId = Number(newStr);
      const Randomuser_id = Number(newRandomNumber());
      const IdAdd = latestId + Randomuser_id;
      new_user_id = "U" + IdAdd;
    } else {
      const newStr = 1;
      const newRandomNumber = () => {
        const min = 100; // Minimum 3-digit number
        const max = 999; // Maximum 3-digit number
        const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        return randomNumber;
      };

      const latestId = Number(newStr);
      const Randomuser_id = Number(newRandomNumber());
      const IdAdd = latestId + Randomuser_id;
      new_user_id = "U" + IdAdd;
    }

    const newUser = new User({
      handle: new_user_id,
      email: req.body.email,
      user_id: new_user_id,
      password: req.body.password,
      tpin: req.body.password,
      role_as: req.body.role_as,
      mobile: req.body.mobile,
      country: req.body.country,
      curr_sign: req.body.currency,
      first_name: req.body.f_name,
      last_name: req.body.l_name,
      currency: 0,
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, async (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.tpin = hash;

        try {
          const user = await newUser.save();

          return res.status(200).json('success');
        } catch (error) {
          console.error("Error saving user:", error);
          return res.status(500).json({ error: "Internal Server Error" });
        }
      });
    });
  } catch (error) {
    console.error("Error finding last user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});


router.post("/onclickregister", async (req, res) => {
 
  try {
    const last_user = await User.findOne({ role_as: 3 }).sort({ _id: -1 });

    let new_user_id;
    if (last_user) {
      const lastId = last_user.user_id;
      const newStr = lastId.replace(/^./, "");

      const newRandomNumber = () => {
        const min = 100; // Minimum 3-digit number
        const max = 999; // Maximum 3-digit number
        const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        return randomNumber;
      };
      const latestId = Number(newStr);
      const Randomuser_id = Number(newRandomNumber());
      const IdAdd = latestId + Randomuser_id;
      new_user_id = "U" + IdAdd;
    } else {
      const newStr = 1;
      const newRandomNumber = () => {
        const min = 100; // Minimum 3-digit number
        const max = 999; // Maximum 3-digit number
        const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        return randomNumber;
      };

      const latestId = Number(newStr);
      const Randomuser_id = Number(newRandomNumber());
      const IdAdd = latestId + Randomuser_id;
      new_user_id = "U" + IdAdd;
    }

    const gen_pass = () => {
      const min = 100000; // Minimum 3-digit number
      const max = 999999; // Maximum 3-digit number
      const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
      return randomNumber;
    };
    const generated_password = Number(gen_pass());

    const newUser = new User({
      handle: new_user_id,      
      user_id: new_user_id,
      password: generated_password,
      tpin: generated_password,
      country: req.body.country,
      curr_sign: req.body.currency,
      role_as: 3,     
      currency: 0,
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, async (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.tpin = hash;

        try {
          const user = await newUser.save();
        
                
          const payload = {
            //is this mongo's object id?
            id: user.id,
            handle: user.handle,
            email: user.email,
            role_as: user.role_as,
            currency: 0,         
            userId: user._id,
            usAutoId: user.usAutoId,
            user_id: user.user_id,
            mobile: user.mobile,
            status: user.status,
            macAddress: userMacAddress,
          
          };

          jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: 604800 }, 
            (err, token) => {
              if (err) {
                return res.status(500).json({ error: 'Token creation failed.' });
              }

              const responseData = {
                message: 'Successfully created your account',
                userid: new_user_id,     
                password: generated_password,
                success: true,             
                jwtToken: 'Bearer' + token,
                token: 'Bearer ' + token,
              };
            
              return res.status(200).json(responseData);              
            
            }
          );

      
        } catch (error) {
          return res.status(500).json({ error: error.message });
        }
      });
    });
  } catch (error) {
    console.error("Error finding last user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});



router.post("/register_back", async(req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const last_user = await User.findOne({ role_as: 3}).sort({ _id: -1 });

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

      


    let new_user_id; 
    if (last_user) {
        const lastId = last_user.user_id;
        const newStr = lastId.replace(/^./, "");

        const newRandomNumber = () => {
          const min = 100; // Minimum 3-digit number
          const max = 999; // Maximum 3-digit number
          const randomNumber = Math.floor(
            Math.random() * (max - min + 1) + min
          );
          return randomNumber;
        };
        const latestId = Number(newStr);
        const Randomuser_id = Number(newRandomNumber());
        const IdAdd = latestId + Randomuser_id;
         new_user_id = "U" + IdAdd;
                       
      } else{
    
        const newStr = 1;
        const newRandomNumber = () => {
          const min = 100; // Minimum 3-digit number
          const max = 999; // Maximum 3-digit number
          const randomNumber = Math.floor(
            Math.random() * (max - min + 1) + min
          );
          return randomNumber;
        };
  
        const latestId = Number(newStr);
        const Randomuser_id = Number(newRandomNumber());
        const IdAdd = latestId + Randomuser_id;
         new_user_id = "U" + IdAdd;       
      }

      const newUser = new User({
        handle: req.body.handle,
        email: req.body.email,
        user_id: new_user_id,
        password: req.body.password,
        tpin: req.body.password,
        role_as: req.body.role_as,
        mobile: req.body.mobile,
        currency: 0,       
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.tpin = hash;
          newUser
            .save()
            .then((user) => {       
               
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
                        expiresIn: 604800,
                      }, (err, token) => {                  
                       return res.json({
                          sucess: true,
                          token: "Bearer" + token,
                        });
                      }
                    );             
               
              //console.log('user created')
              //res.json(user)
            })
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  const {email, password} = req.body;
  
User.findOne({ email: email }).then((data)=>
{
  
}).catch((err)=>console.log(err))

  if (!isValid) {
   // return res.status(400).json(errors);
  }

    User.findOne({
      $or: [
        { user_id: email },
        { email: email } 
      ]
    }).then((user) => { 
     if (!user) {
      console.log('user not found')
      return res.status(404).json({ email: "This user does not exist" });
    }
    const userIPAddress = req.ip;
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!!isMatch) {
        const payload = {
          //is this mongo's object id?
          id: user.id,
          handle: user.handle,
          email: user.email,
          role_as: user.role_as,
          currency: user.currency,         
          userId: user._id,
          usAutoId: user.usAutoId,
          user_id: user.user_id,
          mobile: user.mobile,
          status: user.status,
          macAddress: userMacAddress,
          ipAddress: userIPAddress,
        };
 
        jwt.sign(
          payload,
          process.env.JWT_SECRET,
          {
            expiresIn: 604800,
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



router.post("/logout", (req, res) => {
 // localStorage.setItem("jwtToken", "");
  localStorage.removeItem('jwtToken')
  setAuthToken(false)
});

// profile manage
router.post("/ProfileManage/:user_id", async (req, res) => {
  try {
    if (req.params.user_id === "undefined") {
      return res.status(422).json({ msg: "userId is undefined" });
    }

    const user = await User.findOne({ user_id: req.body.user_id });

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    user.first_name       = req.body.first_name;
    user.last_name        = req.body.last_name;
    user.country          = req.body.country;
    user.country_currency = req.body.country_currency;
    user.mobile           = req.body.mobile;
    user.personal_mobile  = req.body.personal_mobile;

    await user.save();

    res.json({ msg: "Profile updated successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});



// Update user data route

  router.post('/profile_update', async(req, res) => {
    try {
      const updatedUser = req.body;
   
   //   return res.status(200).json(updatedUser);
      // aAssuming `user_id` is a unique identifier for each user
      const user = await User.findById(updatedUser._id);
  
      if (!user) {
        return res.status(404).json(user);
      }  
      // Update the user data in the database
      await User.findByIdAndUpdate(updatedUser._id, updatedUser);
  
      // You may want to fetch and return the updated user data from the database
      const updatedUserFromDB = await User.findById(updatedUser._id);
  
      return res.status(200).json('Your profile updated successfully..');
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: 'Internal server error' });
    }
});


// PasswordManage
router.post("/PasswordManage/:user_id", async (req, res) => {
  try {
   
    if (req.params.user_id === "undefined") {
      return res.status(422).json({ msg: "userId is undefined" });
    }

    const agent = await User.findOne({ user_id: req.body.user_id });

    if (!agent) {
      return res.status(404).json({ msg: "User not found" });
    }

    const date = new Date(Date.now());

    const newUser = new User({
      password: req.body.password,
      history: [{ x: date, y: 1000 }],
    });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newUser.password, salt);

    await User.updateOne(
      { user_id: req.body.user_id },
      { password: hash }
    );

    return res.json({ msg: "Password updated successfully.." });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});



// TpinManage manage
router.post("/TpinManage/:user_id", async (req, res) => {
  try {
    if (req.params.user_id === "undefined") {
      return res.status(422).json({ msg: "userId is undefined" });
    }

    const user = await User.findOne({ user_id: req.body.user_id });

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    // Generate salt and hash the new T-pin
    const salt = await bcrypt.genSalt(10);
    const hashedTpin = await bcrypt.hash(req.body.tpin, salt);

    // Update the user's T-pin
    await User.updateOne({ user_id: req.body.user_id }, { tpin: hashedTpin });

    return  res.json({ msg: "T-pin updated successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});

// basic setting & image

const multer = require("multer");
//const { v4: uuidv4 } = require("uuid");
let path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //cb(null, "images");
    cb(null, "frontend/public/images");
  },
  filename: function (req, file, cb) {
    //cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });

// create  Basic Setting
router.route("/BasicSetting").post(upload.single("site_logo"), (req, res) => {
  const site_title = req.body.site_title;
  const site_logo = req.file.filename;
  // const site_favicon = req.file.filename;
  // const admin_login_cover = req.file.filename;
  const site_email = req.body.site_email;
  const support_email = req.body.support_email;
  const support_number = req.body.support_number;
  const site_currency = req.body.site_currency;
  const site_timezone = req.body.site_timezone;
  const status = "BasicSetting";

  const newUserData = {
    site_title,
    site_logo,
    // site_favicon,
    // admin_login_cover,
    site_email,
    support_email,
    support_number,
    site_currency,
    site_timezone,
    status,
  };

  const newUser = new BasicSetting(newUserData);

  newUser
    .save()
    .then(() => res.json("Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//  List Basic Setting List
router.get("/BasicSettingList", (req, res) => {
  if (req.params.userId === "undefined") {
    return res.status(422).json({ msg: "userId is undefined" });
  }
  BasicSetting.find({ status: "BasicSetting" }).then((user) => {
    if (!!user) {
      return res.json(user);
    } else {
      return res.status(404).json({ msg: "User not found" });
    }
  });
});

// Edit basic setting Edit
router.get("/editbasic/:id").get(function (req, res) {
  const rowId = req.params.id;
  BasicSetting.findOne({ _id: rowId }).then((user) => res.json(user));
});


// update basic Setting
router.route("/BasicSettingUpdate/:id").post(upload.single("site_logo"), (req, res) => {
    const site_title = req.body.site_title;
    const site_logo = req.file.filename;
    // const site_favicon = req.file.filename;
    // const admin_login_cover = req.file.filename;
    const site_email = req.body.site_email;
    const support_email = req.body.support_email;
    const support_number = req.body.support_number;
    const site_currency = req.body.site_currency;
    const site_timezone = req.body.site_timezone;
    const status = "BasicSetting";

    const rowId = req.params.id;
    BasicSetting.updateOne(
      { _id: rowId },
      {
        status: status,
        site_title: site_title,
        site_logo: site_logo,
        site_email: site_email,
        support_email: support_email,
        support_number: support_number,
        site_currency: site_currency,
        site_timezone: site_timezone,
      }
    )
      .then((user) => res.json(user))
      .catch((err) => console.log(err));
  });

// others: create  Favicon
router
  .route("/FaviconSetting")
  .post(upload.single("site_favicon"), (req, res) => {
    const status = "FaviconSetting";
    const site_favicon = req.file.filename;
    // const admin_login_cover = req.file.filename;

    const newUserData = {
      status,
      site_favicon,
      // admin_login_cover,
    };

    const newUser = new BasicSetting(newUserData);

    newUser
      .save()
      .then(() => res.json("Added"))
      .catch((err) => res.status(400).json("Error: " + err));
  });

//  List FaviconSetting
router.get("/FaviconSettingList", (req, res) => {
  if (req.params.userId === "undefined") {
    return res.status(422).json({ msg: "userId is undefined" });
  }
  BasicSetting.find({ status: "FaviconSetting" }).then((user) => {
    if (!!user) {
      return res.json(user);
    } else {
      return res.status(404).json({ msg: "User not found" });
    }
  });
});

// Edit FaviconSetting
router.get("/editFavicon/:id").get(function (req, res) {
  const rowId = req.params.id;
  BasicSetting.findOne({ _id: rowId }).then((user) => res.json(user));
});

// update FaviconSetting
router
  .route("/FaviconSettingUpdate/:id")
  .post(upload.single("site_favicon"), (req, res) => {
    const site_favicon = req.file.filename;
    // const admin_login_cover = req.file.filename;
    const status = "FaviconSetting";

    const rowId = req.params.id;
    BasicSetting.updateOne(
      { _id: rowId },
      {
        status: status,
        site_favicon: site_favicon,
      }
    )
      .then((user) => res.json(user))
      .catch((err) => console.log(err));
  });

// SendMoneyLimit
router.post("/SendMoneyLimit", (req, res) => {
  var date = new Date(Date.now());
  const SendMoneyLimitData = new BasicSetting({
    status: "SendMoneyLimit",
    sendmoney_min_limit: req.body.sendmoney_min_limit,
    sendmoney_max_limit: req.body.sendmoney_max_limit,
    send_money_charge: req.body.send_money_charge,
    wallet_exchange_charge: req.body.wallet_exchange_charge,
    user_bonus: req.body.user_bonus,
    signup_bonus: req.body.signup_bonus,
    history: [{ x: date }],
  });

  SendMoneyLimitData.save()
    .then((PromoData) => res.json(PromoData))
    .catch((err) => console.log(err));
});

//  SendMoneyLimit List
router.get("/SendMoneyLimitList", (req, res) => {
  if (req.params.userId === "undefined") {
    return res.status(422).json({ msg: "userId is undefined" });
  }
  BasicSetting.find({ status: "SendMoneyLimit" }).then((user) => {
    if (!!user) {
      return res.json(user);
    } else {
      return res.status(404).json({ msg: "User not found" });
    }
  });
});

// send money update
router.post("/SendMoneyLimitUpdate/:id", (req, res) => {
  const rowId = req.params.id;
  // console.log(rowId);

  const status = "SendMoneyLimit";
  const sendmoney_min_limit = req.body.sendmoney_min_limit;
  const sendmoney_max_limit = req.body.sendmoney_max_limit;
  const send_money_charge = req.body.send_money_charge;
  const wallet_exchange_charge = req.body.wallet_exchange_charge;
  const user_bonus = req.body.user_bonus;
  const signup_bonus = req.body.signup_bonus;

  BasicSetting.updateOne(
    { _id: rowId },
    {
      status: status,
      sendmoney_min_limit: sendmoney_min_limit,
      sendmoney_max_limit: sendmoney_max_limit,
      send_money_charge: send_money_charge,
      wallet_exchange_charge: wallet_exchange_charge,
      user_bonus: user_bonus,
      signup_bonus: signup_bonus,
    }
  )
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});

// slide image
router.route("/SlideManages").post(upload.single("slideImage"), (req, res) => {
  const text = req.body.text;
  const slideImage = req.file.filename;

  const newUserData = {
    text,
    slideImage,
  };

  const newUser = new SlideManage(newUserData);

  newUser
    .save()
    .then(() => res.json("Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// NoticeManage
router.route("/NoticeManage").post(upload.single("notice_img"), (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const notice_img = req.file.filename;

  const status = "NoticeManage";
  // status: "NoticeManage",

  const newUserData = {
    title,
    description,
    notice_img,
    status,
  };

  const newUser = new BasicSetting(newUserData);

  newUser
    .save()
    .then(() => res.json("Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Admin  promo code create
router.post("/PromoCode", (req, res) => {
  var date = new Date(Date.now());
  const newRandomNumber = () => {
    const min = 1000; // Minimum 4-digit number
    const max = 9999; // Maximum 4-digit number
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
  };
  const Randomuser_id = Number(newRandomNumber());
  // promo_code,currency,  campaign, amount, expire_date, limit

  //  BasicSetting Table Insert

  const promoCodeData = new BasicSetting({
    status: "PromoCode",
    promo_code_type: "AdminPromoCode",
    promo_code: Randomuser_id,
    currency: "USD",

    campaign: req.body.campaign,
    amount: req.body.amount,
    expire_date: req.body.expire_date,
    limit: req.body.limit,
    history: [{ x: date }],
  });

  promoCodeData
    .save()
    .then((PromoData) => res.json(PromoData))
    .catch((err) => console.log(err));
});

// Admin PromoCodeList
router.get("/PromoCodeList", (req, res) => {
  if (req.params.userId === "undefined") {
    return res.status(422).json({ msg: "userId is undefined" });
  }
  BasicSetting.find({
    status: "PromoCode",
    promo_code_type: "AdminPromoCode",
  }).then((user) => {
    // UserBLTR.find().then((user) => {
    if (!!user) {
      return res.json(user);
    } else {
      return res.status(404).json({ msg: "User not found" });
    }
  });
});

// paginate PromoCodeList
router.get("/paginatedPromoCodeList", async (req, res) => {
  const allUser = await BasicSetting.find({ status: "PromoCode",
  promo_code_type: "AdminPromoCode", });
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

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
  res.json(results);
});

// admin Last PromoCodeList
router.get("/AdminPromoCodeLast", (req, res) => {

  if (req.params.userId === "undefined") {
    return res.status(422).json({ msg: "userId is undefined" });
  }
    BasicSetting.find({status: "PromoCode", promo_code_type: "AdminPromoCode"}).sort({ _id: -1 }).limit(1).then((user) => {
      if (!!user) {
        return res.json(user);
      } else {
        return res.status(404).json({ msg: "User not found" });
      }
    });
});

// Affiliate   promo code  Create
router.post("/AffiliatePromoCode", (req, res) => {
  var date = new Date(Date.now());
  const newRandomNumber = () => {
    const min = 1000; // Minimum 4-digit number
    const max = 9999; // Maximum 4-digit number
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
  };
  const Randomuser_id = Number(newRandomNumber());
  // promo_code,currency,  campaign, amount, expire_date, limit

  //  BasicSetting Table Insert

  const promoCodeData = new BasicSetting({
    status: "PromoCode",
    promo_code_type: "AffiliatePromoCode",
    promo_code: Randomuser_id,
    currency: "USD",

    campaign: req.body.campaign,
    amount: req.body.amount,
    expire_date: req.body.expire_date,
    limit: req.body.limit,
    history: [{ x: date }],
  });

  promoCodeData
    .save()
    .then((PromoData) => res.json(PromoData))
    .catch((err) => console.log(err));
});

// Affiliate PromoCodeList
router.get("/AffiliatePromoCodeList", (req, res) => {
  if (req.params.userId === "undefined") {
    return res.status(422).json({ msg: "userId is undefined" });
  }
  BasicSetting.find({
    status: "PromoCode",
    promo_code_type: "AffiliatePromoCode",
  }).then((user) => {
    // UserBLTR.find().then((user) => {
    if (!!user) {
      return res.json(user);
    } else {
      return res.status(404).json({ msg: "User not found" });
    }
  });
});

// Last Affiliate PromoCodeList

router.get("/AffiliatePromoCodeLast", (req, res) => {

  if (req.params.userId === "undefined") {
    return res.status(422).json({ msg: "userId is undefined" });
  }
    BasicSetting.find({status: "PromoCode", promo_code_type: "AffiliatePromoCode"}).sort({ _id: -1 }).limit(1).then((user) => {
      if (!!user) {
        return res.json(user);
      } else {
        return res.status(404).json({ msg: "User not found" });
      }
    });
});

// Affiliate Link  create 
router.post("/AffiliateLink", (req, res) => {

  var date = new Date(Date.now());

  const website = req.body.website;
  const user_id = req.body.user_id;
  const affLink = website + "/#/signup?ref=" + user_id;
  const status = "AffiliateLink";

  // console.log("Links: " + affLink );
 
  BasicSetting.collection.insertOne({aff_link: affLink, status: status} ).then((user) => res.json(user))
  .catch((err) => console.log(err));

  // const affLinkData = new BasicSetting({
  //   status: "AffiliateLink",
  //   aff_link: affLink,
  //   history: [{ x: date }],
  // });

  // affLinkData
  //   .save()
  //   .then((PromoData) => res.json(PromoData))
  //   .catch((err) => console.log(err));

});

// Affiliate Links List
router.get("/AffiliateLinkList", (req, res) => {
  if (req.params.userId === "undefined") {
    return res.status(422).json({ msg: "userId is undefined" });
  }
  BasicSetting.find({
    status: "AffiliateLink",
  }).then((user) => {
    // UserBLTR.find().then((user) => {
    if (!!user) {
      return res.json(user);
    } else {
      return res.status(404).json({ msg: "User not found" });
    }
  });
});

// Last Affiliate PromoCodeList

router.get("/AffiliateLinkLast", (req, res) => {

  if (req.params.userId === "undefined") {
    return res.status(422).json({ msg: "userId is undefined" });
  }
    BasicSetting.find({status: "AffiliateLink"}).sort({ _id: -1 }).limit(1).then((user) => {
      if (!!user) {
        return res.json(user);
      } else {
        return res.status(404).json({ msg: "Not found" });
      }
    });
});


router.get("/shows/:userId", (req, res) => {
  if (req.params.userId === "undefined") {
    return res.status(422).json({ msg: "userId is undefined" });
  }

  User.find({ user_id: req.params.userId }).then((user) => {
    if (!!user) {
      return res.json(user);
    } else {
      return res.status(404).json({ msg: "User not found" });
    }
  });
});


// Update password
router.post('/profile_password_update', async (req, res) => {
  try {

    const id = req.body.id;
    const oldPassword = req.body.old_passowrd;
    const newPassword = req.body.new_password;
    const confirm_password = req.body.confirm_password;


    const user = await User.findById(req.body.id); // Assuming you have user authentication middleware
    
    // Verify old password
    const isPasswordMatch = await bcrypt.compare(oldPassword, user.password);
  

    if (!isPasswordMatch) {
      return res.status(500).json('Old password is incorrect' );
    }

    if (newPassword !== confirm_password ) {
      return res.status(500).json('New password and Confirm Password did not Match' );
    }

    // Hash and update the new password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
    user.password = hashedPassword;
    await user.save();

    return res.status(200).json('Password updated successfully');
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
});

// Update password
router.post('/profile_tpassword_update', async (req, res) => {
  try {

    const id = req.body.id;
    const oldPassword = req.body.old_tpassowrd;
    const newPassword = req.body.new_tpassword;
    const confirm_password = req.body.confirm_tpassword;


    const user = await User.findById(req.body.id); // Assuming you have user authentication middleware
    
    // Verify old password
    const isPasswordMatch = await bcrypt.compare(oldPassword, user.tpin);
  

    if (!isPasswordMatch) {
      return res.status(500).json('Old password is incorrect' );
    }

    if (newPassword !== confirm_password ) {
      return res.status(500).json('New Transaction  password and Confirm Transaction  Password did not Matche' );
    }

    // Hash and update the new password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
    user.tpin = hashedPassword;
    await user.save();

    return res.status(200).json('Transaction Password updated successfully');
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
});

const sendWelcomeEmail = (username, password, email) => {
  const client = elasticemail.createClient({
    username: 'info@metabet247.com',
    apiKey: '3844F86FEEA1889DC63C6A52ECC86443214BC6D33F19AD443DA27189A464854CDCF0700DB6C08EDD41F589CFC75760CA'
  });

  const htmlContent = `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="https://www.w3.org/1999/xhtml">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="initial-scale=1.0" />
      <meta name="format-detection" content="telephone=no" />
      <title>METABET247</title>
       <style type="text/css">
      .ReadMsgBody {
        width: 100%;
        background-color: #ffffff;
      }
      .ExternalClass {
        width: 100%;
        background-color: #ffffff;
      }
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      }
      html {
        width: 100%;
        margin: 0;
        padding: 0;
      }
      body {
        -webkit-text-size-adjust: none;
        -ms-text-size-adjust: none;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
      }
      table {
        border-spacing: 0;
        border-collapse: collapse;
      }
      img {
        display: block !important;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
        border: none;
        height: auto;
        line-height: 100%;
        vertical-align: bottom;
      }
      p {
        padding: 0;
        margin: 0;
      }
      br {
        line-height: 0 !important;
      }
      div,
      p,
      span,
      strong,
      b,
      em,
      i,
      a,
      li,
      td {
        -webkit-text-size-adjust: none;
      }
      .b-letter__body {
        background: #cccccc !important;
      }
      table td,
      table tr {
        border-collapse: collapse;
      }
      table {
        border-collapse: collapse;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .js-phone-number,
      .highlight-phone {
        color: #ffffff !important;
        text-decoration: none !important;
      }
      a,
      p {
        line-height: inherit !important;
        text-decoration: none !important;
      }
      @media only screen and (max-width: 600px) {
        body {
          width: auto !important;
        }
        table[class="container"] {
          width: 100% !important;
        }
        table[class="center"] {
          text-align: center !important;
          float: none !important;
        }
        td[class="content"] {
          padding: 0 10px !important;
        }
        td[class="center-content"] {
          padding: 0 10px !important;
          text-align: center !important;
          float: none !important;
        }
        td[class="padding-reset"] {
          padding: 0 !important;
        }
        table[class="inline-block"] {
          text-align: center !important;
          float: none !important;
          width: 100% !important;
        }
        table[class="inline-block-1"] {
          text-align: center !important;
          float: none !important;
          width: 280px !important;
        }
        table[class="inline-block-2"] {
          text-align: center !important;
          float: none !important;
          width: 180px !important;
        }
        td[class="inline-container"] {
          padding: 0 !important;
        }
        img[class="stretch"] {
          width: 100% !important;
        }
        table[class="remove"],
        tr[class="remove"],
        span[class="remove"] {
          display: none;
        }
      }
      </style>
    </head>
    <body style="width: 100% !important; background-color: #133D2E;" class="body-layout">
      <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" style="width: 100% !important; background-color: #133D2E;" class="body-layout">
        <tr>
          <td align="center" valign="top">
          
            <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center" valign="top">
                  <table width="600" align="center" class="container" border="0" cellspacing="0" cellpadding="0">
                    <tr class="remove">
                      <td height="18" style="height: 18px; line-height:18px;"></td>
                    </tr>
                    <tr>
                      <td align="center" valign="top">
                        <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td align="center" valign="top" style="line-height: 0 !important;">
                              <a style="text-decoration: none; display: inline-block;" href="https://metabet247.com/">
                                <img src="https://livedemo00.template-help.com/newsletter_53030/images/logo.jpg" alt="logo" width="600" height="175" class="stretch" />
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center" valign="top">
                  <table width="600" align="center" class="container" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" valign="top">
                        <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td align="center" valign="top" style="line-height: 0 !important;">
                              <img src="https://livedemo00.template-help.com/newsletter_53030/images/img01.jpg" alt="img1" width="600" height="582" class="stretch" />
                            </td>
                          </tr>
                          <tr>
                            <td align="center" valign="top" style="line-height: 0 !important;">
                              <a style="text-decoration: none; display: inline-block;" href="https://metabet247.com/">
                                <img src="https://metabet247.com/images/emailbanner.png" alt="img2" width="200" height="60" class="stretch" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td align="center" valign="top" style="line-height: 0 !important;">
                              <img src="https://livedemo00.template-help.com/newsletter_53030/images/img03.jpg" alt="img3" width="600" height="107" class="stretch" />
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center" valign="top">
                  <table width="600" align="center" class="container" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" valign="top" background="images/bgimg01.jpg" height="514" style="background-color:#0e0202;background-image:url(images/bgimg01.jpg);background-repeat:no-repeat;background-position:50% 0;height:514">
                        <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td align="center" valign="top" style="padding: 0 40px;" class="padding-reset">
                           
                              <table width="160" align="left" class="inline-block" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td align="center" valign="top" class="inline-container">
                                    <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td height="6" style="height: 6px; line-height:6px;"></td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top">
                                          <img src="https://livedemo00.template-help.com/newsletter_53030/images/img04.png" alt="img4" width="160" height="138" />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="font-family: Times New Roman, serif; font-size: 18px; mso-line-height-rule: exactly; line-height: 20px; font-weight: 700; text-transform: uppercase;color: #fff1c0;"><a style="text-decoration: none; color: #fff1c0;" href="https://metabet247.com/">blackjack </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td height="10" style="height: 10px; line-height:10px;"></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                           
                              <table width="200" align="left" class="inline-block" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td align="center" valign="top" style="padding: 0 20px;" class="inline-container">
                                    <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td height="6" style="height: 6px; line-height:6px;"></td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top">
                                          <img src="https://livedemo00.template-help.com/newsletter_53030/images/img05.png" alt="img5" width="160" height="138" />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="font-family: Times New Roman, serif; font-size: 18px; mso-line-height-rule: exactly; line-height: 20px; font-weight: 700; text-transform: uppercase;color: #fff1c0;"><a style="text-decoration: none; color: #fff1c0;" href="https://metabet247.com/">roulette </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td height="10" style="height: 10px; line-height:10px;"></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                           
                              <table width="160" align="left" class="inline-block" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td align="center" valign="top" class="inline-container">
                                    <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td height="6" style="height: 6px; line-height:6px;"></td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top">
                                          <img src="https://livedemo00.template-help.com/newsletter_53030/images/img06.png" alt="img6" width="160" height="138" />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="font-family: Times New Roman, serif; font-size: 18px; mso-line-height-rule: exactly; line-height: 20px; font-weight: 700; text-transform: uppercase;color: #fff1c0;"><a style="text-decoration: none; color: #fff1c0;" href="https://metabet247.com/">video slots </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td height="10" style="height: 10px; line-height:10px;"></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                             
                            </td>
                          </tr>
                          <tr>
                            <td height="25" style="height: 25px; line-height:25px;"></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top">
                              <img src="https://livedemo00.template-help.com/newsletter_53030/images/decoration.png" alt="decoration" width="180" height="26" />
                            </td>
                          </tr>
                          <tr>
                            <td height="11" style="height: 11px; line-height:11px;"></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top" style="font-family: Times New Roman, serif; font-size: 40px; mso-line-height-rule: exactly; line-height: 42px; font-weight: 400;color: #e6c597;" class="content">welcome </td>
                          </tr>
                          <tr>
                            <td height="23" style="height: 23px; line-height:23px;"></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top" style="padding: 0 80px;font-family: Times New Roman, serif; font-size: 16px; mso-line-height-rule: exactly; line-height: 22px; font-weight: 400;color: #eadfb8;" class="content">
                              <p>Welcome to MetaBet247! We're thrilled to have you on board as a member of our online betting community.</p>
  
                              <p>Your account details are as follows:</p>
                              
                              <p> <strong> Username: ${username}</strong></p>
                              <p><strong> Password: ${password}</strong></p>
                              
                              <p>Please keep this information secure and do not share your password with anyone. If you have any concerns about the security of your account or if you forget your password, you can always reset it through our website.</p>
                              
                              <p>To get started, log in to your account using the provided username and password on our website: https://metabet247.com.</p>
                              
                              
                              <p>Thank you for choosing MetaBet247. Good luck and happy betting!</p>
                               </td>
                          </tr>
                          <tr>
                            <td height="35" style="height: 35px; line-height:35px;"></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top">
                              <a style="text-decoration: none; display: inline-block;" href="https://metabet247.com/">
                                <img src="https://metabet247.com/images/1699873787636.png" alt="link"  style="max-height: 60px;" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td height="30" style="height: 30px; line-height:30px;"></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center" valign="top">
                  <table width="600" align="center" class="container" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" valign="top" background="images/bgimg02.jpg" height="255" style="background-color:#3e5a33;background-image:url(images/bgimg02.jpg);background-repeat:no-repeat;background-position:50% 0;height:255">
                        <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                          <tr class="remove">
                            <td height="28" style="height: 28px; line-height:28px;"></td>
                          </tr>
                          <tr>
                            <td height="40" style="height: 40px; line-height:40px;"></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top" style="padding: 0 80px;font-family: Times New Roman, serif; font-size: 48px; mso-line-height-rule: exactly; line-height: 40px; font-weight: 700; text-transform: uppercase;color: #fff3c5;" class="content">WHY PLAY </td>
                          </tr>
                          <tr>
                            <td align="center" valign="top" style="padding: 0 80px;font-family: Times New Roman, serif; font-size: 42px; mso-line-height-rule: exactly; line-height: 36px; font-weight: 700; text-transform: uppercase;color: #fff3c5;" class="content">WITH US? </td>
                          </tr>
                          <tr>
                            <td height="22" style="height: 22px; line-height:22px;"></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top" style="padding: 0 80px;font-family: Times New Roman, serif; font-size: 16px; mso-line-height-rule: exactly; line-height: 22px; font-weight: 700; text-transform: uppercase;color: #eadfb8;" class="content">Dive into a vast selection of games tailored to suit every taste and preference. From classic slots to cutting-edge live dealer experiences, we've got it all. </td>
                          </tr>
                          <tr>
                            <td height="16" style="height: 16px; line-height:16px;"></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center" valign="top">
                  <table width="600" align="center" class="container" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" valign="top" style="background: #481611;">
                        <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td height="34" style="height: 34px; line-height:34px;"></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top" style="font-family: Times New Roman, serif; font-size: 40px; mso-line-height-rule: exactly; line-height: 42px; font-weight: 400;color: #e6c597;" class="content">photo gallery </td>
                          </tr>
                          <tr>
                            <td height="22" style="height: 22px; line-height:22px;"></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top">
                              <img src="https://livedemo00.template-help.com/newsletter_53030/images/decoration.png" alt="decoration" width="180" height="26" />
                            </td>
                          </tr>
                          <tr>
                            <td height="30" style="height: 30px; line-height:30px;"></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top">
                            
                              <table width="299" align="left" class="inline-block-1" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td align="center" valign="top" class="inline-container">
                                    <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td height="2" style="height: 2px; line-height:2px;"></td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="line-height: 0 !important;">
                                          <a style="text-decoration: none; display: inline-block;" href="https://metabet247.com/">
                                            <img src="https://livedemo00.template-help.com/newsletter_53030/images/gallery01.jpg" alt="gallery1" width="299" height="134" class="stretch" />
                                          </a>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                         
                              <table width="301" align="left" class="inline-block-1" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td align="center" valign="top" style="padding: 0 0 0 2px;" class="inline-container">
                                    <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td height="2" style="height: 2px; line-height:2px;"></td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="line-height: 0 !important;">
                                          <a style="text-decoration: none; display: inline-block;" href="https://metabet247.com/">
                                            <img src="https://livedemo00.template-help.com/newsletter_53030/images/gallery02.jpg" alt="gallery2" width="299" height="134" class="stretch" />
                                          </a>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                             
                            </td>
                          </tr>
                          <tr>
                            <td align="center" valign="top">
                           
                              <table width="299" align="left" class="inline-block-1" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td align="center" valign="top" class="inline-container">
                                    <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td height="2" style="height: 2px; line-height:2px;"></td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="line-height: 0 !important;">
                                          <a style="text-decoration: none; display: inline-block;" href="https://metabet247.com/">
                                            <img src="https://livedemo00.template-help.com/newsletter_53030/images/gallery03.jpg" alt="gallery3" width="299" height="134" class="stretch" />
                                          </a>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                             
                              <table width="301" align="left" class="inline-block-1" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td align="center" valign="top" style="padding: 0 0 0 2px;" class="inline-container">
                                    <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td height="2" style="height: 2px; line-height:2px;"></td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="line-height: 0 !important;">
                                          <a style="text-decoration: none; display: inline-block;" href="https://metabet247.com/">
                                            <img src="https://livedemo00.template-help.com/newsletter_53030/images/gallery04.jpg" alt="gallery4" width="299" height="134" class="stretch" />
                                          </a>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            
                            </td>
                          </tr>
                          <tr>
                            <td align="center" valign="top">
                             
                              <table width="299" align="left" class="inline-block-1" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td align="center" valign="top" class="inline-container">
                                    <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td height="2" style="height: 2px; line-height:2px;"></td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="line-height: 0 !important;">
                                          <a style="text-decoration: none; display: inline-block;" href="https://metabet247.com/">
                                            <img src="https://livedemo00.template-help.com/newsletter_53030/images/gallery05.jpg" alt="gallery5" width="299" height="134" class="stretch" />
                                          </a>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                           
                              <table width="301" align="left" class="inline-block-1" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td align="center" valign="top" style="padding: 0 0 0 2px;" class="inline-container">
                                    <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td height="2" style="height: 2px; line-height:2px;"></td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="line-height: 0 !important;">
                                          <a style="text-decoration: none; display: inline-block;" href="https://metabet247.com/">
                                            <img src="https://livedemo00.template-help.com/newsletter_53030/images/gallery06.jpg" alt="gallery6" width="299" height="134" class="stretch" />
                                          </a>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                           
                            </td>
                          </tr>
                          <tr>
                            <td height="29" style="height: 29px; line-height:29px;"></td>
                          </tr>
                          <tr> 
                            <td align="center" valign="top">
                              <a style="text-decoration: none; display: inline-block;" href="https://metabet247.com/">
                                <img src="https://metabet247.com/images/1699873787636.png" alt="link"  style="max-height: 60px;" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td height="28" style="height: 28px; line-height:28px;"></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center" valign="top">
                  <table width="600" align="center" class="container" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" valign="top" style="background: #680102;">
                        <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td align="center" valign="top">
                         
                              <table width="299" align="left" class="inline-block" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td align="center" valign="top" class="inline-container" background="images/bgimg04.png" height="363" style="background-color:#680202;background-image:url(images/bgimg04.png);background-repeat:no-repeat;background-position:50% 0;height:363">
                                    <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td height="56" style="height: 56px; line-height:56px;"></td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="font-family: Times New Roman, serif; font-size: 42px; mso-line-height-rule: exactly; line-height: 36px; font-weight: 700; text-transform: uppercase;color: #fff3c5;" class="content">recent winner </td>
                                      </tr>
                                      <tr>
                                        <td height="24" style="height: 24px; line-height:24px;"></td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="font-family: Times New Roman, serif; font-size: 42px; mso-line-height-rule: exactly; line-height: 36px; font-weight: 700; text-transform: uppercase;color: #ffcc01;" class="content">$799.500 </td>
                                      </tr>
                                      <tr>
                                        <td height="23" style="height: 23px; line-height:23px;"></td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="font-family: Times New Roman, serif; font-size: 42px; mso-line-height-rule: exactly; line-height: 36px; font-weight: 700; text-transform: uppercase;color: #ffe396;" class="content">biggest jackpot ever </td>
                                      </tr>
                                      <tr>
                                        <td height="23" style="height: 23px; line-height:23px;"></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                          
                              <table width="301" align="left" class="inline-block-1" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td align="center" valign="top" class="inline-container">
                                    <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td align="center" valign="top" style="line-height: 0 !important;">
                                          <img src="https://livedemo00.template-help.com/newsletter_53030/images/img07.jpg" alt="img7" width="301" height="363" class="stretch" />
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                             
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
           
            <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center" valign="top">
                  <table width="600" align="center" class="container" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" valign="top" style="background: #001d05;">
                        <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td height="32" style="height: 32px; line-height:32px;"></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top" style="font-family: Times New Roman, serif; font-size: 40px; mso-line-height-rule: exactly; line-height: 42px; font-weight: 400;color: #8f9f61;" class="content">address </td>
                          </tr>
                          <tr>
                            <td height="20" style="height: 20px; line-height:20px;"></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top" style="font-family: Times New Roman, serif; font-size: 20px; mso-line-height-rule: exactly; line-height: 30px; font-weight: 400;color: #e0dab7;" class="content">28 Jackson Blvd Ste 1020 </td>
                          </tr>
                          <tr>
                            <td align="center" valign="top" style="font-family: Times New Roman, serif; font-size: 20px; mso-line-height-rule: exactly; line-height: 30px; font-weight: 400;color: #e0dab7;" class="content">Chicago </td>
                          </tr>
                          <tr>
                            <td align="center" valign="top" style="font-family: Times New Roman, serif; font-size: 20px; mso-line-height-rule: exactly; line-height: 30px; font-weight: 400;color: #e0dab7;" class="content">IL 60604-2340 </td>
                          </tr>
                          <tr>
                            <td height="36" style="height: 36px; line-height:36px;"></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top">
                              <img src="https://livedemo00.template-help.com/newsletter_53030/images/icon-phone.png" alt="phone" width="36" height="36" />
                            </td>
                          </tr>
                          <tr>
                            <td height="16" style="height: 16px; line-height:16px;"></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top" style="font-family: Times New Roman, serif; font-size: 24px; mso-line-height-rule: exactly; line-height: 30px; font-weight: 700;color: #fffbb5;" class="content">1(234) 567-9842 </td>
                          </tr>
                          <tr>
                            <td height="51" style="height: 51px; line-height:51px;"></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top">
                              <table align="center" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td align="center" valign="top" style="background: #0c2610; padding: 0 24px;">
                                    <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td height="19" style="height: 19px; line-height:19px;"></td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="padding: 0 10px;">
                                          <a style="text-decoration: none; display: inline-block;" href="https://metabet247.com/">
                                            <img src="https://livedemo00.template-help.com/newsletter_53030/images/socials1.png" alt="socials1" width="21" height="21" />
                                          </a>
                                        </td>
                                        <td align="center" valign="top" style="padding: 0 10px;">
                                          <a style="text-decoration: none; display: inline-block;" href="https://metabet247.com/">
                                            <img src="https://livedemo00.template-help.com/newsletter_53030/images/socials2.png" alt="socials2" width="21" height="21" />
                                          </a>
                                        </td>
                                        <td align="center" valign="top" style="padding: 0 10px;">
                                          <a style="text-decoration: none; display: inline-block;" href="https://metabet247.com/">
                                            <img src="https://livedemo00.template-help.com/newsletter_53030/images/socials3.png" alt="socials3" width="21" height="21" />
                                          </a>
                                        </td>
                                        <td align="center" valign="top" style="padding: 0 10px;">
                                          <a style="text-decoration: none; display: inline-block;" href="https://metabet247.com/">
                                            <img src="https://livedemo00.template-help.com/newsletter_53030/images/socials4.png" alt="socials4" width="21" height="21" />
                                          </a>
                                        </td>
                                        <td align="center" valign="top" style="padding: 0 10px;">
                                          <a style="text-decoration: none; display: inline-block;" href="https://metabet247.com/">
                                            <img src="https://livedemo00.template-help.com/newsletter_53030/images/socials5.png" alt="socials5" width="21" height="21" />
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td height="14" style="height: 14px; line-height:14px;"></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td height="43" style="height: 43px; line-height:43px;"></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top" style="padding: 0 40px;font-family: Times New Roman, serif; font-size: 16px; mso-line-height-rule: exactly; line-height: 22px; font-weight: 400;color: #dfd9b6;" class="content">You're receiving this email because you signed up for <a href="https://metabet247.com/" style="color: #8f9f61; text-decoration: none;">META BET 247»</a> or attended one of our events. You can&nbsp;<a href="https://metabet247.com/" style="color: #8f9f61; text-decoration: underline !important;">unsubscribe</a>&nbsp;from this email or change your email notifications. Online version is&nbsp;<a href="https://metabet247.com/" style="color: #8f9f61; text-decoration: underline !important;">here</a>.</td>
                          </tr>
                          <tr>
                            <td height="35" style="height: 35px; line-height:35px;"></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center" valign="top">
                  <table width="600" align="center" class="container" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" valign="top" style="background: #132d01;">
                        <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td height="23" style="height: 23px; line-height:23px;"></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top" style="font-family: Times New Roman, serif; font-size: 13px; mso-line-height-rule: exactly; line-height: 16px; font-weight: 400; text-transform: uppercase;color: #8f9f61;" class="content"><a style="text-decoration: none; color: #8f9f61;" href="https://metabet247.com/">Meta BET  Casino </a> © 2015 | <a style="text-decoration: none; color: #8f9f61;" href="https://metabet247.com/">Privacy policy </a>
                            </td>
                          </tr>
                          <tr>
                            <td height="23" style="height: 23px; line-height:23px;"></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr class="remove">
                      <td height="65" style="height: 65px; line-height:65px;"></td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;

  const emailMsg = {
    from: 'info@metabet247.com',
    to: email,
    subject: 'Welcome to MetaBet247 - Your Online Betting Account Details',
    body_html: htmlContent,
  };

  client.mailer.send(emailMsg, function (err, result) {
    if (err) {
      console.error('Error sending email:', err);
    } else {
      console.log('Email sent successfully:', result);
    }
  });
};


// Example route to send an email
router.post('/send-email', async (req, res) => {

  var client = elasticemail.createClient({
    username: 'info@metabet247.com',
    apiKey: '3844F86FEEA1889DC63C6A52ECC86443214BC6D33F19AD443DA27189A464854CDCF0700DB6C08EDD41F589CFC75760CA'
  });

   
  var msg = {
    from: 'info@metabet247.com',
    from_name: 'Meta Bet 247',
    to: 'sumonta121@gmail.com',
    subject: ' Welcome to MetaBet247 - Your Online Betting Account Details',
    body_text: 'Hello User Welcome to Meta Bet 247',
    isBodyHtml: true,
    body: `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Welcome to MetaBet247</title>
      </head>
      <body>
        <h1>Welcome to MetaBet247</h1>
        <p>Thank you for joining MetaBet247, your online betting destination.</p>
        <p>Here are your account details:</p>
        <ul>
          <li>Username: test</li>
          <li>Password: 123456</li>
        </ul>
        <p>Please click the following link to activate your account:</p>
        <a href="https://metabet247.com/#/">Activate Account</a>
      </body>
      </html>
    `
  };
   
  client.mailer.send(msg, function(err, result) {
    if (err) {
      return console.error(err);
    }
    console.log(result);
    res.status(200).json({ success: true, message: result });
    
  });

});





module.exports = router;
