const FaqModel = require('../models/FaqModel');

exports.createFAQ = async (req, res) => {
    try {
        const newFAQ = new FaqModel(req.body);
        await newFAQ.save();
        res.status(201).json(newFAQ);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getAllFAQs = async (req, res) => {
    try {
        const faqs = await FaqModel.find();
        res.status(200).json(faqs);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getFAQById = async (req, res) => {
    try {
        const faq = await FaqModel.findById(req.params.id);
        if (!faq) return res.status(404).json({ message: 'FAQ not found' });
        res.status(200).json(faq);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updateFAQ = async (req, res) => {
    try {
        const updatedFAQ = await FaqModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedFAQ);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteFAQ = async (req, res) => {
    try {
        await FaqModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'FAQ deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
