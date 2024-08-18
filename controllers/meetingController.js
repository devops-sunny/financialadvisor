const Meeting = require('../models/meetingModel');

exports.getAllMeetings = async (req, res) => {
  try {
    const meetings = await Meeting.find().populate('appointmentId userId financialAdvisorId productId');
    res.status(200).json(meetings);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getMeetingById = async (req, res) => {
  try {
    const meeting = await Meeting.findById(req.params.id).populate('appointmentId userId financialAdvisorId productId');
    if (!meeting) return res.status(404).json({ message: 'Meeting not found' });
    res.status(200).json(meeting);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.createMeeting = async (req, res) => {
  try {
    const newMeeting = await Meeting.create(req.body);
    res.status(201).json(newMeeting);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateMeeting = async (req, res) => {
  try {
    const updatedMeeting = await Meeting.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedMeeting);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteMeeting = async (req, res) => {
  try {
    await Meeting.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Meeting deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
