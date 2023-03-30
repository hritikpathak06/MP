const express = require('express');
const cookieParser = require('cookie-parser')
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
require('../db/conn')
const userSchema = require('../model/userSchema');
const authenticate = require('../middleware/authenticate')


router.use(cookieParser())

// router.get('/', (req, res) => {
//     res.send("Hello world from router")
// });


router.post('/register', async (req, res) => {

    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Plzz fill the field properly!" })
    }
    try {
        const response = await userSchema.findOne({ email: email });
        if (response) {
            return res.status(422).json({ error: "User Already Exist!" })
        } else if (password != cpassword) {
            return res.status(422).json({ error: "Password Mismatched!" })
        }

        const user = new userSchema({ name, email, phone, work, password, cpassword });
        // *************************************
        //  Middleware of hashing
        // **************************************
        const userRegistered = await user.save();
        if (userRegistered) {
            res.status(201).json({ message: "user registerd successfully!" })
        }
    } catch (error) {
        console.log(error)
        res.status(422).json({ messgae: "Failed to register" })
    }
});



router.post("/login", async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Plzz fill theb data" })
        }
        const userLogin = await userSchema.findOne({ email: email });

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)
            token = await userLogin.generateAuthToken();
            // console.log(token)

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            if (!isMatch) {
                res.status(400).json({ message: "Invalid Credentials Password" })
            } else {
                res.json({ message: "user sign in successfull!" })
            }
        } else {
            res.status(400).json({ message: "Invalid Credentiaals" })
        }
    } catch (error) {
        console.log(error)
    }
});

router.get('/about', authenticate, (req, res) => {
    console.log("Hello My About page");
    res.send(req.rootUser)
});

// get data from contact page

router.get('/getdata', authenticate, (req,res) => {
    res.send(req.rootUser);
})

router.post('/contact', authenticate ,async(req, res) => {
  try {
    const{name,email,phone,message} = req.body;

    // if(!name || !email || !phone || !message){
    //     return res.json({error:"Plzz fill the contact form"})
    //     console.log("Error in contact form")
    // }

    const userContact = await userSchema.findOne({_id:req.userID})
    if(userContact){
        const userMessage = await userContact.addMessage(name,email,phone,message);
        await userContact.save()
        res.status(201).json({message:"message sent succeess"})
    }

  } catch (error) {
    console.log(error)
  }
});


router.get('/logout', (req,res) => {
    console.log("Hello my logout page")
    res.clearCookie('jwtoken', {path:'/'});
    res.status(200).send("user logout")
})
// *******************************************************************************************************************
// using promises
// userSchema.findOne({email:email})
// .then((userExist) => {
//     if(userExist){
//         return res.status(422).json({error:"User Already Exist!"})
//     }

//     const user = new userSchema({name , email, phone, work, password, cpassowrd});

//     user.save().then(() => {
//         res.status(201).json({message:"user registerd successfully!"})
//     }).catch((err) => res.status(500).json({error:"Failed Registered!"}))
// })
// .catch((err) => console.log(err));
// ************************************************************************************************************************

module.exports = router;