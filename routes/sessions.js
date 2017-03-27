var express = require('express');
var router = express.Router();
var User = require('../models/userModel.js');
var authHelpers = require('../helper/auth.js');

router.get('/login', function(req, res) {
	res.render('user/login.hbs')
})

router.post('/login', authHelpers.loginUser, function(req, res){
  res.redirect(`/user/${req.session.currentUser._id}`);
});

router.delete('/', function(req, res){
  req.session.destroy(function(){
    res.redirect('/user');
  });
});

module.exports = router;