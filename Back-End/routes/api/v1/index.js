const express = require('express');
const router = express.Router();
const categoriesController = require("../../../controllers/v1/categories");
const subCategoriesController = require("../../../controllers/v1/subCategories");
const product = require("../../../controllers/v1/product");
const search = require("../../../controllers/v1/search");
const navigatorSubCategories = require("../../../controllers/v1/navigator");


//Navigator SubCatogories
router.get('/navigator/:categoryId', navigatorSubCategories.navigatorSubCategories );


//search router
router.post('/search', search.postSearch);

// product Router
router.post('/product', product.postProducts);
router.get('/product', product.getProduct);


// Sub Categories Router
router.post('/subcategories', subCategoriesController.postSubCategories);
router.get('/subcategories', subCategoriesController.getSubCategories);


//  Categories Router
router.post('/categories', categoriesController.postCategories);
router.get('/categories', categoriesController.getCategories);


module.exports = router;