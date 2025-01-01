// const User = require('../models/User');
const UseSMS=require("../models/userMsgModel")
const UserEnquiry=require("../models/userEnqueryModel")

// Get all users 
const getUsersMsg = async (req, res) => {
    try {
        const usersMsg = await UseSMS.find();
        res.status(200).json(usersMsg);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new user message
const createUserMsg = async (req, res) => {
    try {
        const { name, email, phoneNo, message } = req.body;
        const newUserMsg = new UseSMS({ name,phoneNo, email, message });
        await newUserMsg.save();
        res.status(201).json(newUserMsg);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Add a new user message
const createUserEnquiryMsg = async (req, res) => {
    try {
        const { name, course, phone, message } = req.body;
        const newUserEnquiry = new UserEnquiry({ name,course, phone, message });
        await newUserEnquiry.save();
        res.status(201).json(newUserEnquiry);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getUsersMsg, createUserMsg,createUserEnquiryMsg };
