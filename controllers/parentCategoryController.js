const ParentCategory = require('../models/parentCategoryModel');

exports.getAllParentCategories = async (req, res) => {
  try {
    const parentCategories = await ParentCategory.find();
    res.status(200).json(parentCategories);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getParentCategoryById = async (req, res) => {
  try {
    const parentCategory = await ParentCategory.findById(req.params.id);
    if (!parentCategory) return res.status(404).json({ message: 'ParentCategory not found' });
    res.status(200).json(parentCategory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.createParentCategory = async (req, res) => {
  try {
    const newParentCategory = await ParentCategory.create(req.body);
    res.status(201).json(newParentCategory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateParentCategory = async (req, res) => {
  try {
    const updatedParentCategory = await ParentCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedParentCategory) return res.status(404).json({ message: 'ParentCategory not found' });
    res.status(200).json(updatedParentCategory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteParentCategory = async (req, res) => {
  try {
    const deletedParentCategory = await ParentCategory.findByIdAndDelete(req.params.id);
    if (!deletedParentCategory) return res.status(404).json({ message: 'ParentCategory not found' });
    res.status(200).json({ message: 'ParentCategory deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
