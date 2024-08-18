const express = require('express');
const router = express.Router();
const financialAdvisorController = require('../controllers/financialAdvisorController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware.protect, financialAdvisorController.getAllFinancialAdvisors);
router.get('/:id', authMiddleware.protect, financialAdvisorController.getFinancialAdvisorById);
router.post('/', authMiddleware.protect, financialAdvisorController.createFinancialAdvisor);
router.put('/:id', authMiddleware.protect, financialAdvisorController.updateFinancialAdvisor);
router.delete('/:id', authMiddleware.protect, financialAdvisorController.deleteFinancialAdvisor);

module.exports = router;
