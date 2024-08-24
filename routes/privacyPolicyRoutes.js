const express = require('express');
const router = express.Router();
const privacyPolicyController = require('../controllers/privacyPolicyController.js');

router.post('/', privacyPolicyController.createPrivacyPolicy);
router.get('/', privacyPolicyController.getAllPrivacyPolicies);
router.get('/:id', privacyPolicyController.getPrivacyPolicyById);
router.put('/:id', privacyPolicyController.updatePrivacyPolicy);
router.delete('/:id', privacyPolicyController.deletePrivacyPolicy);

module.exports = router;
