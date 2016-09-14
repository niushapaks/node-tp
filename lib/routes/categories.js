var express = require('express');
var router = express.Router();
var CategoryModel = require('../models/category');

router.post('/', function(req, res, next){
  console.log(req.body);
  CategoryModel.create(req.body, function(err, category){
    if(err){
      next(err);
    } else{
      res.json(category);
    }
  });
  
});

router.get('/', function(req, res, next){
  console.log(req.body);
  CategoryModel.find(function(err, categories){
    if(err){
      next(err);
    } else{
      res.json({
        count: categories.lenght,
        elements: categories
      });
    }
  })
});

router.get('/:id', function(req, res, next){
  console.log(req.body);
  CategoryModel.findById(req.params.id, function(err, category){
    if(err){
      next(err);
    } else{
      res.json(category);
    }
  });
});

router.put('/:id', function(req, res, next){
  CategoryModel.findByIdAndUpdate(req.params.id, req.body, function(err, category){
    if(err){
      next(err);
    } else{
      res.json(category);
    }
  });
});

router.delete('/:id', function(req, res, next){
  CategoryModel.findByIdAndRemove(req.params.id, function(err, category){
    if(err){
      next(err);
    } else{
      res.send(200);
    }
  });
});

module.exports = router;