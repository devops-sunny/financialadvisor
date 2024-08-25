const FaqModel = require("../models/FaqModel");

exports.createFAQ = async (req, res) => {
  try {
    const newFAQ = new FaqModel(req.body);
    await newFAQ.save();
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.LOGIN_SUCCESS,
      newFAQ
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllFAQs = async (req, res) => {
  try {
    const faqs = await FaqModel.find();
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.LOGIN_SUCCESS,
      faqs
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getFAQById = async (req, res) => {
  try {
    const faq = await FaqModel.findById(req.params.id);
    if (!faq) return res.status(404).json({ message: "FAQ not found" });
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.LOGIN_SUCCESS,
      faq
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateFAQ = async (req, res) => {
  try {
    const updatedFAQ = await FaqModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.LOGIN_SUCCESS,
      updatedFAQ
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteFAQ = async (req, res) => {
  try {
    await FaqModel.findByIdAndDelete(req.params.id);
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.LOGIN_SUCCESS
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
