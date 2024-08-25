const { generateUniqueId } = require("../middlewares/generateUniqueId");
const ParentCategory = require("../models/parentCategoryModel");

exports.getAllParentCategories = async (req, res) => {
  try {
    const parentCategories = await ParentCategory.find();
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.LIST,
      parentCategories
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getParentCategoryById = async (req, res) => {
  try {
    const parentCategory = await ParentCategory.findById(req.params.id);
    if (!parentCategory)
      return res.status(404).json({ message: "ParentCategory not found" });
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.LIST,
      parentCategory
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.createParentCategory = async (req, res) => {
  try {
    const uniqueId = generateUniqueId("PRC");
    const ParentCategoryData = {
      ...req.body,
      Uniqueid: uniqueId,
    };

    const newParentCategory = await ParentCategory.create(ParentCategoryData);

    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.ADDED,
      newParentCategory
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateParentCategory = async (req, res) => {
  try {
    const updatedParentCategory = await ParentCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedParentCategory)
      return res.status(404).json({ message: "ParentCategory not found" });
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.UPDATED,
      updatedParentCategory
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteParentCategory = async (req, res) => {
  try {
    const deletedParentCategory = await ParentCategory.findByIdAndDelete(
      req.params.id
    );
    if (!deletedParentCategory)
      return res.status(404).json({ message: "ParentCategory not found" });
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.DELETED,
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
