const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    financialAdvisorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"FinancialAdvisor",
      default: null
    },
    date: {
      type: String,
      required: false,
    },
    startTime: {
        type: String, 
        required: false,
      },
      endTime: {
        type: String, 
        required: false,
      },
    status: {
      type: String,
      enum: ['pending', 'completed', 'cancelled'],
      default: 'pending',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Appointment", appointmentSchema);
