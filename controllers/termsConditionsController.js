const TermsConditionsModel = require('../models/TermsConditionsModel');

exports.createTermsConditions = async (req, res) => {
    try {
        const newTermsConditions = new TermsConditionsModel(req.body);
        await newTermsConditions.save();
        res.status(201).json(newTermsConditions);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getAllTermsConditions = async (req, res) => {
    try {
        const termsConditions = await TermsConditionsModel.find();
        res.status(200).json(termsConditions);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getTermsConditionsById = async (req, res) => {
    try {
        const termsConditions = await TermsConditionsModel.findById(req.params.id);
        if (!termsConditions) return res.status(404).json({ message: 'Terms & Conditions not found' });
        res.status(200).json(termsConditions);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updateTermsConditions = async (req, res) => {
    try {
        const updatedTermsConditions = await TermsConditionsModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedTermsConditions);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteTermsConditions = async (req, res) => {
    try {
        await TermsConditionsModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Terms & Conditions deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
