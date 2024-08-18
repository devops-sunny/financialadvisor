const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image:{ type: String, required: false },
  description: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  subCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'ParentCategory' },
  details: { type: String },
  keywords: [String],
});

module.exports = mongoose.model('Product', productSchema);
