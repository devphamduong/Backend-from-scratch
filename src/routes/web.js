const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.getHomePage);
router.get('/create-user', homeController.createUser);

module.exports = router;