const Category = require('../../models/category');
const SubCategory = require('../../models/subCategory');
const Product = require('../../models/product');
const Logger = require('../../config/logger');


module.exports.postSearch = async (req, res) => {
  const searchTerm = req.body.search;

  try {
    const products = await Product.find({ name: { $regex: searchTerm, $options: 'i' } });
    const categories = await Category.find({ name: { $regex: searchTerm, $options: 'i' } });
    const subCategories = await SubCategory.find({ name: { $regex: searchTerm, $options: 'i' } });

    const searchResults = { products, categories, subCategories };

    Logger.info('POST Request in Search Router');
    res.status(200).json(searchResults);
  } catch (err) {

    Logger.error(`Error POST Search Router ${err}`);
    res.status(500).send('An error occurred during search.');
  }
};