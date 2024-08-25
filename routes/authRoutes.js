const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const sanitize = require('../config/sanitizer');


router.post('/signup',sanitize(),  authController.signup);
router.post('/login',sanitize(), authController.login);
router.post('/generate-token', authController.generateTokenForUser);
router.post('/update-password', authController.updatePassword);

module.exports = router;
