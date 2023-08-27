const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  }
,
  subCategoryId: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'subCategory',
  }],
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
