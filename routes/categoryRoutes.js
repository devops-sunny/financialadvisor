const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);
router.post('/', authMiddleware.protect, categoryController.createCategory);
router.put('/:id', authMiddleware.protect, categoryController.updateCategory);
router.delete('/:id', authMiddleware.protect, categoryController.deleteCategory);
router.get('/ByParent/:id', authMiddleware.protect,categoryController.getCategoriesByParent);


module.exports = router;
