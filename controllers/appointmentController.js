const Appointment = require("../models/appointmentModel");
const User = require("../models/userModel");
const FinancialAdvisor = require("../models/financialAdvisorModel");
const { sendNotification } = require("../utils/notificationUtils");
const Meeting = require("../models/meetingModel");

exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().populate(
      "userId productId financialAdvisorId"
    );
    res.status(200).json(appointments);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id).populate(
      "userId productId financialAdvisorId"
    );
    if (!appointment)
      return res.status(404).json({ message: "Appointment not found" });
    res.status(200).json(appointment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.createAppointment = async (req, res) => {
  try {
    const { userId, productId, financialAdvisorId, date, startTime, endTime } =
      req.body;
    const newAppointment = await Appointment.create(req.body);

    res.status(201).json(newAppointment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.updateAppointment = async (req, res) => {
  try {
    const { financialAdvisorId, date, startTime, endTime } = req.body;

    // Ensure startTime is before endTime
    if (startTime >= endTime) {
      return res.status(400).json({
        error: "Start time must be before end time.",
      });
    }

    // Fetch the current appointment
    const existingAppointment = await Appointment.findById(req.params.id);
    if (!existingAppointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    // Check if the financial advisor has conflicting appointments on the same date
    const appointmentsOnDate = await Appointment.find({
      financialAdvisorId: financialAdvisorId || existingAppointment.financialAdvisorId,
      date: date || existingAppointment.date,
      _id: { $ne: req.params.id } // Exclude current appointment
    });

    // Check for time conflicts
    const timeConflict = appointmentsOnDate.some(appointment => {
      return (
        (startTime < appointment.endTime && endTime > appointment.startTime) || // Overlap check
        (startTime <= appointment.startTime && endTime >= appointment.endTime) // Encapsulation check
      );
    });

    if (timeConflict) {
      return res.status(400).json({
        error: "The requested time slot overlaps with an existing booking. Please choose another time.",
      });
    }

    // Update the appointment
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      {
        financialAdvisorId: financialAdvisorId || existingAppointment.financialAdvisorId,
        date: date || existingAppointment.date,
        startTime: startTime || existingAppointment.startTime,
        endTime: endTime || existingAppointment.endTime,
      },
      { new: true }
    );

    // Update the related meeting
    const updatedMeeting = await Meeting.findOneAndUpdate(
      { appointmentId: req.params.id },
      {
        financialAdvisorId: financialAdvisorId || existingAppointment.financialAdvisorId,
        date: date || existingAppointment.date,
        startTime: startTime || existingAppointment.startTime,
        endTime: endTime || existingAppointment.endTime,
      },
      { new: true }
    );

    res.status(200).json(updatedAppointment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.deleteAppointment = async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Appointment deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
