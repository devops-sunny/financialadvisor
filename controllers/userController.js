const bcrypt = require('bcryptjs'); 
const User = require("../models/userModel");
const FinancialAdvisor = require("../models/financialAdvisorModel");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.LIST,
      users
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.LIST,
      user
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {

    const updates = { ...req.body };

    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 12);
    }

    
    const updatedUser = await User.findByIdAndUpdate(req.params.id, updates, {
      new: true,
    });

    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.UPDATED,
      updatedUser
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {

    const Users = await User.findById(req.params.id);
    
    const FinancialAdvisors = await FinancialAdvisor.findOne({ _id : Users.FinancialAdvisorid });

    
    if (FinancialAdvisors) {
      await FinancialAdvisor.findByIdAndDelete(FinancialAdvisors._id);
    } 

    await User.findByIdAndDelete(req.params.id);


    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.DELETED,
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
