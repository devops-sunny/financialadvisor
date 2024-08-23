const express = require('express');
const TermsConditionsModel = require('../models/TermsConditionsModel');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const newTermsConditions = new TermsConditionsModel(req.body);
        await newTermsConditions.save();
        res.status(201).json(newTermsConditions);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const termsConditions = await TermsConditions.find();
        res.status(200).json(termsConditions);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const termsConditions = await TermsConditions.findById(req.params.id);
        if (!termsConditions) return res.status(404).json({ message: 'Terms & Conditions not found' });
        res.status(200).json(termsConditions);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedTermsConditions = await TermsConditions.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedTermsConditions);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await TermsConditions.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Terms & Conditions deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
