const express = require('express');
const router = express.Router();
const {
  getAllParentCategories,
  getParentCategoryById,
  createParentCategory,
  updateParentCategory,
  deleteParentCategory,
} = require('../controllers/parentCategoryController');

router.get('/', getAllParentCategories);
router.get('/:id', getParentCategoryById);
router.post('/', createParentCategory);
router.put('/:id', updateParentCategory);
router.delete('/:id', deleteParentCategory);

module.exports = router;
