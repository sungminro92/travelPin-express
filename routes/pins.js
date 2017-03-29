var express = require('express');
var router = express.Router({mergeParams: true});
var Users = require('../models/userModel.js');
var Pin = require('../models/pinModel.js');
var authHelpers = require('../helper/auth.js');

// GET ROUTE FOR USER'S PIN INDEX (USER ALBUM) PAGE
router.get('/', function(req, res) {
  Users.findById(req.params.userId)
  .exec(function(err, user) {
    if (err) console.log(err);
    console.log(user.pins)
    res.render('pins/index', {  
      user: user,
      pins: user.pins
    });
  });
});

// GET ROUTE & RENDER TO edit.hbs PAGE
router.get('/:id/edit', function editPinDetail(req, res) {
  Users.findById(req.params.userId)
    .exec(function (err, user){
      if (err) { console.log(err); }
      const pinDetail = user.pins.id(req.params.id);

      res.render('pins/edit.hbs', {
        user: user,
        pins: pinsDetail
      });
    });
});


// PUT ROUTE FOR UPDATE & RENDER BACK TO index.hbs PAGE!
// USER UPDATE ROUTE
router.put('/:id', function updatePinDetail(req, res){
  User.findById(req.params.userId)
    .exec(function (err, user){
      if (err) { console.log(err); }
      const pin = user.pins.id(req.params.id);
      // EACH VALUES ARE EDITED
      pin.title = req.body.title
      pin.location = req.body.location
      pin.imgUrl = req.body.imgUrl
      liked = req.body.liked
      title: req.body.title

      user.save();

      res.render('pins/show', {
        user: user,
        pins: user.pins
      });
    });
});


// GET ROUTE & RENDER TO new.hbs PAGE!
router.get('/new', function(req, res) {
  Users.findById(req.params.userId)
  .exec(function(err, user) {
    if(err) console.log(err);
    res.render('pins/new.hbs', {
      user: user
    });
  });
});

// POST ROUTE TO CREATE NEW PIN!
router.post('/', function createNewPin(req, res) {
  Users.findById(req.params.userId)
    .exec(function (err, user) {
      if (err) {console.log(err);
      }
      const newPin = {
        title: req.body.title,
        location: req.body.location,
        imgUrl: req.body.imgUrl,
        liked: req.body.liked
      }
      user.pins.push(newPin)
      user.save(function (err) {
        if(err) console.log(err);
        console.log('New Pin Created!')
      });
    });
  });


// GET ROUTE FOR VIEWING DETAILS OF EACH PIN
router.get('/:id', function showPinDetail(req, res) {
 	 Users.findById(req.params.userId)
  	.exec(function(err, user) {
    	if (err) console.log(err);
    	const pinDetail = user.pins.id(req.params.id);
      console.log(pin.id)
    	res.render('pins/show.hbs', {
      		user: user,
      		pin: pinDetail
   		 });
  	});
});


// UPDATE



// USER UPDATE ROUTE
router.put('/:id', function(req, res){
  User.findByIdAndUpdate(req.params.id, {
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


module.exports = router;