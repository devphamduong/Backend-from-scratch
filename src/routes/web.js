const express = require('express');
const router = express.Router();
import homeController from '../controllers/homeController';

router.get('/', homeController.getHomePage);

router.get('/duongpc', (req, res) => {
    res.render('sample.ejs');
});

module.exports = router;