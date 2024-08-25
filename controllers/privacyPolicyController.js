const PrivacyPolicyModel = require("../models/PrivacyPolicyModel");

exports.createPrivacyPolicy = async (req, res) => {
  try {
    const newPrivacyPolicy = new PrivacyPolicyModel(req.body);
    await newPrivacyPolicy.save();
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.ADDED,
      newPrivacyPolicy
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllPrivacyPolicies = async (req, res) => {
  try {
    const privacyPolicies = await PrivacyPolicyModel.find();
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.LIST,
      privacyPolicies
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getPrivacyPolicyById = async (req, res) => {
  try {
    const privacyPolicy = await PrivacyPolicyModel.findById(req.params.id);
    if (!privacyPolicy)
      return res.status(404).json({ message: "Privacy Policy not found" });
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.LIST,     
      privacyPolicy
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updatePrivacyPolicy = async (req, res) => {
  try {
    const updatedPrivacyPolicy = await PrivacyPolicyModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.UPDATED,
      updatedPrivacyPolicy
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deletePrivacyPolicy = async (req, res) => {
  try {
    await PrivacyPolicyModel.findByIdAndDelete(req.params.id);
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.DELETED,
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
