const mongoose = require("mongoose");

const financialAdvisorSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false,
    },
    email:{
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    feePerConsultation: {
      type: Number,
      required: true,
    },
    timings: {
      type: [String],
      required: false,
    },
    status: {
      type: String,
      default: "pending",
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("FinancialAdvisor", financialAdvisorSchema);
