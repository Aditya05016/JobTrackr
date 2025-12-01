const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user")


//register route

router.post("/register", async(req,res) => {
    try{
        const {name,email,password} = req.body;

         const existedUser = await User.findOne({email});
         if(existedUser){
            return res.status(400).json({message:"User already existed"});
         }

         //hash a password

         const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const newUser = new User({
            name,
            email, 
            password:hashedPassword,
        })

        await newUser.save();
        return res.status(201).json({message:"User registered sucesffully", newUser});

    }catch(error){
        console.log("Somethig went wrong", error);
        return re.status(500).json({message:"Internal server error"});
    }
})


// login route 

router.post("/login", async(req,res) => {
    try{
        const {email, password} = req.body;
        const existedUser = await User.findOne({email});

        if(!existedUser){
            return res.status(400).json({message:"User not found pleeae register"});
        }

        //compare password
        const hashedPassword =  bcrypt.compareSync(password, existedUser.password); 
        if(!hashedPassword){
            return res.status(400).json({message:"Invalid credentials"});
        }

        const token = jwt.sign(
            {userId: existedUser._id,email:existedUser.email},
            process.env.JWT_SECRET,
            {expiresIn:"1h"}
        )
         return res.status(200).json({message:"Login successful", token});
    }

catch(error){
        console.log("Something went wrong", error);
        return res.status(500).json({message:"Internal server error"});
    }
})



router.post("/logout", async(req,res) => {
    try{
        return res.status(200).json({message:"Sucessfully logout"})
    }catch(error){
        console.error("Something went wrong", error)
        return res.status(500).json({message:"Something went wrong"})
    }
})

module.exports = router;
