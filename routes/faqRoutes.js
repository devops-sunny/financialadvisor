const express = require('express');
const router = express.Router();
const {
    createFAQ,
    getAllFAQs,
    getFAQById,
    updateFAQ,
    deleteFAQ,
} = require('../controllers/faqController');

router.post('/', createFAQ);
router.get('/', getAllFAQs);
router.get('/:id', getFAQById);
router.put('/:id', updateFAQ);
router.delete('/:id', deleteFAQ);

module.exports = router;
