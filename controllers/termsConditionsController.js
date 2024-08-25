const TermsConditionsModel = require("../models/TermsConditionsModel");

exports.createTermsConditions = async (req, res) => {
  try {
    const newTermsConditions = new TermsConditionsModel(req.body);
    await newTermsConditions.save();
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.ADDED,
      newTermsConditions
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllTermsConditions = async (req, res) => {
  try {
    const termsConditions = await TermsConditionsModel.find();
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.LIST,
      termsConditions
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTermsConditionsById = async (req, res) => {
  try {
    const termsConditions = await TermsConditionsModel.findById(req.params.id);
    if (!termsConditions)
      return res.status(404).json({ message: "Terms & Conditions not found" });
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.LIST,
      termsConditions
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateTermsConditions = async (req, res) => {
  try {
    const updatedTermsConditions = await TermsConditionsModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.UPDATED,
      updatedTermsConditions
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteTermsConditions = async (req, res) => {
  try {
    await TermsConditionsModel.findByIdAndDelete(req.params.id);
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.DELETED,
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
