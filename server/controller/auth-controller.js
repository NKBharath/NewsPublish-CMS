const express = require('express');
const UsersModel = require('../models/users.model');
const bcrypt = require('bcryptjs');
const registeruser = async (req, res) => {
    const {username, email, password} = req.body;
    try{
        const user = await UsersModel.findOne({email});
        if(user){
            return res.status(109).json({
                message: "User already exists",
                success: false
            })
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new UsersModel({
            username,
            email,
            password: hashedPassword,
        })
        await newUser.save();
        return res.status(200).json({
            message: "User registered successfully",
            success: true,
        })
    } catch(error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false,
        })
    }
}

const loginuser = async(req,res)=>{
    const {email, password} = req.body;
    try{
        const user = await UsersModel.findOne({email});
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found",
            })
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if(!passwordMatch){
            return res.status(400).json({
                success: false,
                message: "Invalid credentials",
            })
        }
        return res.status(200).json({
            success: true,
            message: "Login successful",
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
            }
        })
    } catch(error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false,
        })
    }
}

module.exports = {registeruser, loginuser};