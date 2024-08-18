const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController.js');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware.protect, appointmentController.getAllAppointments);
router.get('/:id', authMiddleware.protect, appointmentController.getAppointmentById);
router.post('/', authMiddleware.protect, appointmentController.createAppointment);
router.put('/:id', authMiddleware.protect, appointmentController.updateAppointment);
router.delete('/:id', authMiddleware.protect, appointmentController.deleteAppointment);

module.exports = router;
