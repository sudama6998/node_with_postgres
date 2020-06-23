const express = require('express');
const router = express.Router();
const productRoute = require('./Products');

router.use('/products', productRoute);

module.exports = router;