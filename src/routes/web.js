const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.getHomePage);
router.post('/create-user', homeController.createUser);
router.get('/create', homeController.getCreatePage);
router.get('/update/:id', homeController.getUpdatePage);
router.post('/update-user', homeController.updateUser);
router.post('/delete-user/:id', homeController.deleteUser);

module.exports = router;