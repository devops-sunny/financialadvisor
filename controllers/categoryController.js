const { generateUniqueId } = require('../middlewares/generateUniqueId');
const Category = require('../models/categoryModel');


exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find().populate('parentCategory');

    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.LIST,
      categories
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });

    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.LIST,
      category
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.createCategory = async (req, res) => {
  try {

    const uniqueId = generateUniqueId('CR');
    const categoryData = {
      ...req.body,
      Uniqueid: uniqueId
    };

    const newCategory = await Category.create(categoryData);

    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.ADDED,
      newCategory
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.UPDATED,
      updatedCategory
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);

    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.DELETED,
    );    

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.getCategoriesByParent = async (req, res) => {
  try {
    const categories = await Category.find({parentCategory:req.params.id });
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.LIST,
      categories
    );    
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};