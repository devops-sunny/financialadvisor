const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  Uniqueid: { type: String, required: false, unique: true }, 
  parentCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'ParentCategory', default: null }, // Corrected ref
  status: {
    type: String,
    enum: ['Active', 'Draft', 'inactive'],
    default: 'Active',
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Category', categorySchema);
