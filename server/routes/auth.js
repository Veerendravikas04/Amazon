const express=require('express');
const authRouter=express.Router();
const User=require('../models/user');
const bcryptjs = require('bcryptjs');




authRouter.post("/api/signup", async (req, res) => {
    console.log("Received Data:", req.body); // Debugging log

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }
   
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

       const hashedpassword= await bcryptjs.hash(password,8);

        let user = new User({
            name,
            email,
            password:hashedpassword,
        });

        await user.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({ message: "Error creating user", error: error.message });
    }
});


module.exports=authRouter;