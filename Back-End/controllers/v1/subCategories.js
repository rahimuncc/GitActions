const Category = require('../../models/category');
const SubCategory = require('../../models/subCategory');
const mongoose = require('mongoose');
const Logger = require('../../config/logger');

// Get Categories
module.exports.getSubCategories = async (req, res) => {
  try {
      const subcategories = await SubCategory.find();
      Logger.info('Get Request in SubCategores');
      res.status(200).json(subcategories);
  } catch (err) {
    Logger.error(`Error Get SubCategories Router ${err}`);
      res.status(500).json({ error: 'An error occurred while fetching categories.' });
  }
};

// Post Categories
module.exports.postSubCategories =  async (req, res) => {
    try {
      
        const { name, category , image } = req.body;

        if (!name || !category || !image) {
          
         Logger.warn('Warn POST Request in SubCategores error: Name and category are required.');
            return res.status(400).json({ error: 'Name and category are required.' });
          }

        // Check if the specified category exists
        const existingCategory = await Category.findById(category);
        if (!existingCategory) {
          Logger.warn('Warn POST Request in SubCategores error: Category are required.');    
          return res.status(404).json({ error: 'Category not found.' });
        }
    
        // Create and save the new subcategory
        const newSubCategory = await SubCategory.create({ name, category , image});
        await newSubCategory.save();
        
        // Update the subcategory ID in the associated category
        existingCategory.subCategoryId.push(newSubCategory._id);
        await existingCategory.save();
      
        Logger.info('POST Request in SubCatgores');
        res.status(201).json(newSubCategory);
    } catch (err) {
      Logger.error(`Error POST SubCategories Router ${err}`);
      res.status(500).json({ error: 'An error occurred while adding the subcategory.' });
    }
  };