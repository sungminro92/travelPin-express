var express = require('express');
var router = express.Router();
var User = require('../models/userModel.js');
var authHelpers = require('../helper/auth.js');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
	User.findById(req.params.id)
	.exec(function(err, user) {
	  if (err) console.log(err);
	  console.log(user);
	  res.render('user/index', {
	  	user: user,
	  	tracks: user.tracks
	  })
	});
});

router.post('/', authHelpers.createSecure, function(req, res){
	var user = new User({  // TO-DO: handle duplicate email/id
		email: req.body.email,
	  username: req.body.username,
	  password: res.hashedPassword,
	  travelCountry: res.body.travelCountry
	});

	user.save(function(err, user){
		if (err) console.log(err);
		//console.log(user);
		res.redirect('/users/' + user.id);
	});

});

module.exports = router;