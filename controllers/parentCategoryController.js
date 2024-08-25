const ParentCategory = require('../models/parentCategoryModel');

const generateUniqueId = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); 
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `PRC-${year}${month}${day}-${hours}${minutes}${seconds}`;
};

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

    const uniqueId = generateUniqueId();
    const ParentCategoryData = {
      ...req.body,
      Uniqueid: uniqueId
    };

    const newParentCategory = await ParentCategory.create(ParentCategoryData);
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
