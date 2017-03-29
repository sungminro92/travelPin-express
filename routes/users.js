var express = require('express');
var router = express.Router({mergeParams: true});
var Users = require('../models/userModel.js');
var Pin = require('../models/pinModel.js');
var authHelpers = require('../helper/auth.js');

/* GET users listing. */
// ROUTE FOR USER PROFILE PAGE
router.get('/:id', function(req, res) {
	Users.findById(req.params.id)
	.exec(function(err, user) {
	  	if (err) console.log(err);
	  	console.log(user);
	  	res.render('user/index', {
	  	user: user,
	  	pins: user.pins
	  	});
	});
});

// GET ROUTE FOR OTHER USERS' PIN INDEX PAGE
router.get('/pins', function(req, res) {
	Users.find({})
	.exec(function(err, user) {
		if (err) console.log(err);
		res.render('user/show.hbs', {
			users: user,
			pins: user.pins
		})
	})
})


// EDIT USER ROUTE + RENDER TO EDIT PAGE
router.get('/:id/edit', function(req, res) {
 	 Users.findById(req.params.id)
  	.exec(function(err, user) {
    	if (err) console.log(err);
    	res.render('user/edit.hbs', {
      		user: user
   		 });
  	});
});

// USER UPDATE ROUTE + RENDER BACK TO INDEX PAGE
router.put('/:id', function(req, res){
  Users.findByIdAndUpdate(req.params.id, {
    username: req.body.username,
    email: req.body.email,
    travelCountry: req.body.travelCountry
  }, { new: true }) // new info
  .exec(function(err, user){
    if (err) { console.log(err); }
    console.log(user);
    res.render('user/index.hbs', {
      user: user
    });
  });
});

// REGISTRATION
router.post('/', authHelpers.createSecure, function(req, res){
	Pin.find({},function (err, pins) {
 		var user = new User({  // TO-DO: handle duplicate email/id
			email: req.body.email,
		  username: req.body.username,
		  password: res.hashedPassword,
		  travelCountry: req.body.travelCountry,
		  pins: pins
		});
		user.save(function(err, user){
		if (err) console.log(err);
		res.redirect('/user/' + user.id);
		});
	});
});

module.exports = router;