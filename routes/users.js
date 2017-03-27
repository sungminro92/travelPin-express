var express = require('express');
var router = express.Router();
var User = require('../models/userModel.js');
var Track = require('../models/trackModel.js');
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
	  travelCountry: req.body.travelCountry
	});

	user.save(function(err, user){
		if (err) console.log(err);
		//console.log(user);
		res.redirect('/user/' + user.id);
	});

});

// CREATE A NEW TRACK on user/index.hbs.
// ROUTE TO VIEW new.hbs
router.get('/:id/new', function(req, res){
	User.findById(req.params.id)
	.exec(function(err, user){
		console.log(user.id)
		console.log(user.tracks)
		res.render('tracks/new.hbs', {
			user: user,
			tracks: user.tracks
		});
	});
});

// CREATE A NEW TRACK ROUTE
router.post('/:id', function(req, res){
	User.findById(req.params.id)
	.exec(function(err, user){
		user.tracks.push(new Track({
			title: req.body.title,
			location: req.body.location,
			imgUrl: req.body.imgUrl
		}));
		user.save(function(err){
			res.send(user);
		});
	});
});

// // DELETE A TRACK ROUTE
// router.delete('/:id', function(req, res){
// 	User.findById(req.params.id)
// 	.exec(function(err, user){
// 		user.tracks.
// 	})
// }

module.exports = router;