const Meeting = require("../models/meetingModel");

exports.getAllMeetings = async (req, res) => {
  try {
    const meetings = await Meeting.find().populate(
      "appointmentId userId financialAdvisorId productId"
    );

    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.LIST,
      meetings
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getMeetingById = async (req, res) => {
  try {
    const meeting = await Meeting.findById(req.params.id).populate(
      "appointmentId userId financialAdvisorId productId"
    );
    if (!meeting) return res.status(404).json({ message: "Meeting not found" });

    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.LIST,
      meeting
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.createMeeting = async (req, res) => {
  try {
    const newMeeting = await Meeting.create(req.body);

    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.ADDED,
      newMeeting
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateMeeting = async (req, res) => {
  try {
    const updatedMeeting = await Meeting.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.UPDATED,
      updatedMeeting
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteMeeting = async (req, res) => {
  try {
    await Meeting.findByIdAndDelete(req.params.id);
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.DELETED
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
