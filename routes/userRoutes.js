const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware.protect, userController.getAllUsers);
router.get('/:id', authMiddleware.protect, userController.getUserById);
router.put('/:id', authMiddleware.protect, userController.updateUser);
router.delete('/:id', authMiddleware.protect, userController.deleteUser);

module.exports = router;
