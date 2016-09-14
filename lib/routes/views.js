var express = require('express');
var router = express.Router();


//Login
router.use('/login', function(req, res){
     res.render('login', {});
});

//Signin
router.use('/signin', function(req, res){
     res.render('signin', {});
});

module.exports = router;