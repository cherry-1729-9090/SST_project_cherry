const express = require("express");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");


const router = express.Router();

router.post("/register", async (req, res) => {

    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) return res.status(400).json({ message: "User already exists!" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({ message: "User registered successfully!" });
    }
    catch (error) {
        return res.status(400).json({ message: error });
    }
});

router.post("/login", async (req, res) => {
    const user = await User.findOne({email : req.body.email});
    if(! user){
        return res.status(400).json({message: "☠️ User not found!, please register"});
    }
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(! validPassword){
        return res.status(400).json({message: "☠️ Invalid password!"});
    }
    res.status(200).json({message: "🎉 Login successful!"});
});


module.exports = router;