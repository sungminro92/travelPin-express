var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'travelPin'
  });
});

// SIGN UP PAGE
router.get('/signup', function(req, res){
  res.render('user/signup.hbs');
});

// SIGN IN PAGE
router.get('/signin', function(req, res){
  res.render('user/signin.hbs');
});


module.exports = router;

