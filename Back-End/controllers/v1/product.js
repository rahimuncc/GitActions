const Category = require('../../models/category');
const SubCategory = require('../../models/subCategory');
const Product = require('../../models/product');
const Logger = require('../../config/logger');


// Get Products
module.exports.getProduct = async (req, res) => {
  try {
    const product = await Product.find();
    Logger.info('Get Request in Product');
    res.status(200).json(product);
  } catch (err) {
    Logger.error(`Error Get Product Router ${err}`);
    res.status(500).json({ error: 'An error occurred while fetching categories.' });
  }
};

// Post Products
module.exports.postProducts = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      countInStock,
      images,
      category,
      subcategory,
    } = req.body;

    if (!name || !description || !price || !countInStock || !images || !category || !subcategory) {

      Logger.warn('Warn POST Request in Products error: Missing required fields');
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check if category 
    const existingcategory = await Category.findById(category);
    if (!existingcategory) {
      Logger.warn('Warn POST Request in Products error: Invalid category ID');
      return res.status(400).json({ error: 'Invalid category ID' });
    }

    // Check if sub category 
    const existingsubcategory = await SubCategory.findById(subcategory);
    if (!existingsubcategory) {

      Logger.warn('Warn POST Request in Products error: Invalid subCategory ID');
      return res.status(400).json({ error: 'Invalid subCategory ID' });
    }


    const newProduct = new Product({
      sku: generateUniqueSku(),
      name,
      description,
      price,
      countInStock,
      images,
      category,
      subcategory,
    });

    const savedProduct = await newProduct.save();

    //save product ID in Sub Category schema
    existingsubcategory.productsId.push(savedProduct._id);
    await existingsubcategory.save();

    Logger.info('POST Request in Products');
    res.status(201).json(savedProduct);
  } catch (error) {
    Logger.error(`Error POST Products Router ${err}`);
    res.status(500).json({ error: 'Internal server error' });
  }
};



function generateUniqueSku() {
  const uniqueString = Math.random().toString(36).substr(2, 8);
  return `/product/${uniqueString}`;
}