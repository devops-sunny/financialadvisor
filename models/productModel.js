const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  images: [{ type: String, required: false }],
  Uniqueid: { type: String, required: false, unique: true }, 
  description: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  details: { type: String },
  keywords: [String],
  status: {type: String,
    enum: ['Active', 'Draft', 'inactive'],
    default: 'Active',
  },
},{
  timestamps: true,
});

module.exports = mongoose.model('Product', productSchema);
