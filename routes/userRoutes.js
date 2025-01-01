const express = require('express');
const {getUsersMsg, createUserMsg,createUserEnquiryMsg} =require ("../controllers/userController")

const router = express.Router();

router.get('/', getUsersMsg);
router.post('/', createUserMsg);
router.post('/enquiry', createUserEnquiryMsg);

module.exports = router;
