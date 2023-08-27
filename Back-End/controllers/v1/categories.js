const Category = require('../../models/category');
const Logger = require('../../config/logger');


// Get Categories
module.exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    Logger.info('Get Request in categores');
    res.status(200).json(categories);

  } catch (err) {
    Logger.error(`Error Get Categories Router ${err}`);
    res.status(500).json({ error: 'An error occurred while fetching categories.' });
  }
};

//Post Categories
module.exports.postCategories = async (req, res) => {
  try {
    const { name } = req.body;

    // if name is null
    if (!name) {
      Logger.warn('Warn POST Request in categores error: Name is required');
      return res.status(400).json({ error: 'Name is required.' });
    }

    //  name already exists
    const existingCategory = await Category.findOne({ name: { $regex: name, $options: 'i' } });
    if (existingCategory) {
      Logger.warn('Warn POST Request in catgores error: Category with the same name already exists.');
      return res.status(409).json({ error: 'Category with the same name already exists.' });
    }

    const newCategory = new Category({ name });
    await newCategory.save();
    Logger.info('POST Request in catgores');
    res.status(201).json(newCategory);
  } catch (err) {
    Logger.error(`Error POST Categories Router ${err}`);
    res.status(500).json({ error: 'An error occurred while adding the category.' });
  }
};