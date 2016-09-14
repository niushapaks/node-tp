var express = require('express');
var router = express.Router();

var categories = require('./categories');
var products = require('./products');

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

router.use(jsonParser);

//CRUD Catégories
router.use('/categories', categories);

//CRUD Produits
router.use('/products', products);

module.exports = router;