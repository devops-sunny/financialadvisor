const mongoose = require('mongoose');

const parentCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model('ParentCategory', parentCategorySchema);
