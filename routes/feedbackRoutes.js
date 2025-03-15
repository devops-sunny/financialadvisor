const express = require('express');
const { createFeedback, getFeedbacks } = require('../controllers/feedbackController');

const router = express.Router();

router.post('/', createFeedback);
router.get('/', getFeedbacks);

module.exports = router;
