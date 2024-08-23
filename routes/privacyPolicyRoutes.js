const express = require('express');
const PrivacyPolicyModel = require('../models/PrivacyPolicyModel');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const newPrivacyPolicy = new PrivacyPolicyModel(req.body);
        await newPrivacyPolicy.save();
        res.status(201).json(newPrivacyPolicy);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const privacyPolicies = await PrivacyPolicy.find();
        res.status(200).json(privacyPolicies);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const privacyPolicy = await PrivacyPolicy.findById(req.params.id);
        if (!privacyPolicy) return res.status(404).json({ message: 'Privacy Policy not found' });
        res.status(200).json(privacyPolicy);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedPrivacyPolicy = await PrivacyPolicy.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedPrivacyPolicy);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await PrivacyPolicy.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Privacy Policy deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
