const express = require('express');
const routerAPI = express.Router();
const apiController = require('../controllers/apiController');

routerAPI.get('/users', apiController.getUsers);
routerAPI.post('/users', apiController.createUser);
routerAPI.put('/users', apiController.updateUser);
routerAPI.delete('/users', apiController.deleteUser);

routerAPI.post('/file', apiController.uploadSingleFile);
routerAPI.post('/files', apiController.uploadMultipleFiles);

module.exports = routerAPI;