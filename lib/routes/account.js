var express = require('express');
var router = express.Router();
var AccountModel = require('../models/account');
var bodyParser = require('body-parser');
var urlencoded = bodyParser.urlencoded({ extended: false });
var jwt = require('jsonwebtoken');

router.use(urlencoded);

router.post('/signin', function(req, res, next){  
  var accountDTO = {
    username: req.body.username,
    password: req.body.password
  };
  AccountModel.create(accountDTO, function(err, account){
    if(err){
      next(err);
    } else{
      res.redirect('/login');
    }
  });
});

router.post('/login', function(req, res, next){  
  var accountDTO = {
    username: req.body.username,
    password: req.body.password
  };
  
  //@TODO : vérifier matching

  //@TODO: renvoyer token JWT
  jwt.sign(accountDTO, 'shhhhhhh', {}, function(err, token) {
    res.cookie('account', token, {httpOnly: true, path: '/'}).redirect('/');
  });

  //Pour décoder un token : jwt.verify (à voir où l'utiliser')

});

router.get('/', function(req, res){
  res.send({
    _id: '12345',
    username: 'abcde'
  });
})

module.exports = router;