var express = require('express');
var router = express.Router();
var ProductModel = require('../models/product');

router.post('/', function(req, res){
  console.log(req.body);
  res.send('Création d\'un produit');
});

router.get('/', function(req, res){
  console.log(req.body);
  res.send('Lecture de tous les produits');
});

router.get('/:id', function(req, res){
  console.log(req.body);
  res.send('Lecture du produit ' + req.params.id);
});

router.put('/:id', function(req, res){
  console.log(req.body);
  res.send('Mise à jour d\'un produit');
});

router.delete('/:id', function(req, res){
  console.log(req.body);
  res.send('Suppression du produit ' + req.params.id);
});

module.exports = router;