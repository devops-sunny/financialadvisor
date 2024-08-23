const express = require('express');
const FaqModel = require('../models/FaqModel');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const newFAQ = new FaqModel(req.body);
        await newFAQ.save();
        res.status(201).json(newFAQ);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const faqs = await FAQ.find();
        res.status(200).json(faqs);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const faq = await FAQ.findById(req.params.id);
        if (!faq) return res.status(404).json({ message: 'FAQ not found' });
        res.status(200).json(faq);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedFAQ = await FAQ.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedFAQ);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await FAQ.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'FAQ deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
