const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  parentCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'ParentCategory' },
});

module.exports = mongoose.model('Category', categorySchema);
