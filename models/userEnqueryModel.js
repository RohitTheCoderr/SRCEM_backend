// models/User.js
const mongoose = require('mongoose');

const userEnquirySchema = new mongoose.Schema({
    name: String,
    phone: { type: Number, unique: true, required: true },
    course: { type: String, required: true },
    message: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('userEnquiryData', userEnquirySchema);

