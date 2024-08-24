const PrivacyPolicyModel = require('../models/PrivacyPolicyModel');

exports.createPrivacyPolicy = async (req, res) => {
    try {
        const newPrivacyPolicy = new PrivacyPolicyModel(req.body);
        await newPrivacyPolicy.save();
        res.status(201).json(newPrivacyPolicy);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getAllPrivacyPolicies = async (req, res) => {
    try {
        const privacyPolicies = await PrivacyPolicyModel.find();
        res.status(200).json(privacyPolicies);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getPrivacyPolicyById = async (req, res) => {
    try {
        const privacyPolicy = await PrivacyPolicyModel.findById(req.params.id);
        if (!privacyPolicy) return res.status(404).json({ message: 'Privacy Policy not found' });
        res.status(200).json(privacyPolicy);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updatePrivacyPolicy = async (req, res) => {
    try {
        const updatedPrivacyPolicy = await PrivacyPolicyModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedPrivacyPolicy);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deletePrivacyPolicy = async (req, res) => {
    try {
        await PrivacyPolicyModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Privacy Policy deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
