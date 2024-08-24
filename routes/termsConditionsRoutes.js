const express = require('express');
const router = express.Router();
const termsConditionsController = require('../controllers/termsConditionsController.js');

router.post('/', termsConditionsController.createTermsConditions);
router.get('/', termsConditionsController.getAllTermsConditions);
router.get('/:id', termsConditionsController.getTermsConditionsById);
router.put('/:id', termsConditionsController.updateTermsConditions);
router.delete('/:id', termsConditionsController.deleteTermsConditions);

module.exports = router;
