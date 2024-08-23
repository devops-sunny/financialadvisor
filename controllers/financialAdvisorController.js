const FinancialAdvisor = require('../models/financialAdvisorModel');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.getAllFinancialAdvisors = async (req, res) => {
  try {
    const advisors = await FinancialAdvisor.find().populate('userId');
    res.status(200).json(advisors);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getFinancialAdvisorById = async (req, res) => {
  try {
    const advisor = await FinancialAdvisor.findById(req.params.id).populate('userId');
     if (!advisor) return res.status(404).json({ message: 'Financial Advisor not found' });
    res.status(200).json(advisor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.createFinancialAdvisor = async (req, res) => {
  try {
    const { name, email } = req.body;

    const hashedPassword = await bcrypt.hash(email, 12);
    const newUser = await User.create({ name, email, password: hashedPassword });
    
    const newAdvisor = await FinancialAdvisor.create(req.body);
    res.status(201).json(newAdvisor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.updateFinancialAdvisor = async (req, res) => {
  try {
    const updatedAdvisor = await FinancialAdvisor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedAdvisor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteFinancialAdvisor = async (req, res) => {
  try {
    await FinancialAdvisor.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Financial Advisor deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
