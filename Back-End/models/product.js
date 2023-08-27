const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  sku: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    default: 0
  },
  countInStock: {
    type: Number,
    required: true,
    min: 0,
    max: 255
  },

  images: [{
    type: String,
    required: true
  }],

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SubCategory',
    required: true,
  },

});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
