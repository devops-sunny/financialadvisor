const FinancialAdvisor = require("../models/financialAdvisorModel");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

exports.getAllFinancialAdvisors = async (req, res) => {
  try {
    const advisors = await FinancialAdvisor.find().populate("userId");
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.LIST,
      advisors
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getFinancialAdvisorById = async (req, res) => {
  try {
    const advisor = await FinancialAdvisor.findById(req.params.id).populate(
      "userId"
    );
    if (!advisor)
      return res.status(404).json({ message: "Financial Advisor not found" });
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.LIST,
      advisor
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.createFinancialAdvisor = async (req, res) => {
  try {
    const { firstName, email } = req.body;
    const hashedPassword = await bcrypt.hash(email, 12);
    const newAdvisor = await FinancialAdvisor.create(req.body);
    const newUser = await User.create({
      name: firstName,
      email: email,
      password: hashedPassword,
      role: "FinancialAdviser",
      FinancialAdvisorid: newAdvisor._id,
    });
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.ADDED,
      newAdvisor
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateFinancialAdvisor = async (req, res) => {
  try {
    const updatedAdvisor = await FinancialAdvisor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.UPDATED,
      updatedAdvisor
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteFinancialAdvisor = async (req, res) => {
  try {
    await FinancialAdvisor.findByIdAndDelete(req.params.id);
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.DELETED,
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
