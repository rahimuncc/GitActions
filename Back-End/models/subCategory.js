const mongoose = require('mongoose');

const subCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },

  productsId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
  
});

const SubCategory = mongoose.model('SubCategory', subCategorySchema);

module.exports = SubCategory;
