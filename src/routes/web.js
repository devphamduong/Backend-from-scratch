const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.getHomePage);
router.post('/create-user', homeController.createUser);
router.get('/create', homeController.getCreatePage);
router.get('/update', homeController.getUpdatePage);

module.exports = router;