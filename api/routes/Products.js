const express = require('express');
const route = express.Router();
const productsController = require('../controller/Products');

route.get('/all', productsController.getAllProducts);

route.post('/new', productsController.createNewProduct);

module.exports = route;