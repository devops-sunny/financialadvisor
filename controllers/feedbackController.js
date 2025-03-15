const Feedback = require('../models/feedbackModel');

// Create new feedback
const createFeedback = async (req, res) => {
  try {
    const { fullname, email, phone, description } = req.body;

    console.log(req.body)

    const newFeedback = new Feedback({ fullname, email, phone, description });
    await newFeedback.save();

    res.status(201).json({ message: 'Feedback submitted successfully!', newFeedback });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting feedback', error });
  }
};

// Get all feedbacks
const getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching feedbacks', error });
  }
};

module.exports = { createFeedback, getFeedbacks };
