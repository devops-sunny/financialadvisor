const mongoose = require('mongoose'); 
const Appointment = require("../models/appointmentModel");
const Meeting = require("../models/meetingModel");

exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().populate([
      {
        path: 'userId',
        select: '_id name'
      },
      {
        path: 'productId',
        select: '_id name Uniqueid'
      },
      {
        path: 'financialAdvisorId',
        select: '_id firstName'
      }
    ])
    
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.LIST,
      appointments
    );
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


    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.LIST,
      appointment
    );
   } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.createAppointment = async (req, res) => {
  try {
    const { userId, productId, financialAdvisorId, date, startTime, endTime } =
      req.body;
    const newAppointment = await Appointment.create(req.body);

    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.ADDED,
      newAppointment
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.updateAppointment = async (req, res) => {
  try {
    const { financialAdvisorId, status , date, startTime, endTime } = req.body;

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
        status: status ||  existingAppointment.status
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
    
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.UPDATED,
      updatedAppointment
    );
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.deleteAppointment = async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);  
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.DELETED,
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

