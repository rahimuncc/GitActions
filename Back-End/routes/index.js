const express = require('express');
const router = express.Router();
const newLocal = '../controllers/home_controller';
const homeController = require(newLocal);

// Router folder
router.use('/home',homeController.home);
router.use('/api', require('./api'));

module.exports = router;