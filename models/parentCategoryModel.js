const mongoose = require('mongoose');

const parentCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  Uniqueid: { type: String, required: false, unique: true }, 
  status: {type: String,
    enum: ['Active', 'Draft', 'inactive'],
    default: 'Active',
  },
},{
  timestamps: true,
});

module.exports = mongoose.model('ParentCategory', parentCategorySchema);
