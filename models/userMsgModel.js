// models/User.js
const mongoose = require('mongoose');

const userMsgSchema = new mongoose.Schema({
    name: String,
    phoneNo: { type: Number, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    message: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('UserSMS', userMsgSchema);

