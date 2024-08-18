const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', authMiddleware.protect, productController.createProduct);
router.put('/:id', authMiddleware.protect, productController.updateProduct);
router.delete('/:id', authMiddleware.protect, productController.deleteProduct);

module.exports = router;
