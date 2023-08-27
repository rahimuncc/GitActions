
const Category = require('../../models/category');
const SubCategory = require('../../models/subCategory');
const Logger = require('../../config/logger');

module.exports.navigatorSubCategories = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;

        const category = await Category.findOne({ _id: categoryId });
        if (!category) {
            Logger.warn('Warn GET Request in Navigator error: Category not found ');
            return res.status(404).json({ error: 'Category not found' });
        }

        const subcategories = await SubCategory.find({ category: categoryId });
        const subCategoriesInfo = subcategories.map(sub => ({
            name: sub.name,
            image: sub.image
        }));

        Logger.info('Get Request in Navigator');
        res.status(200).json({ subCategoriesInfo });
    } catch (error) {

        Logger.error(`Error Get Navigator Router ${err}`);
        res.status(500).json({ error: 'Internal server error' });
    }
};
