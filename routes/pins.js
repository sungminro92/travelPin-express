var express = require('express');
var router = express.Router({mergeParams: true});
var Users = require('../models/userModel.js');
var Pin = require('../models/pinModel.js');
var authHelpers = require('../helper/auth.js');

// GET ROUTE FOR USER'S PIN INDEX (USER ALBUM) PAGE
router.get('/:id/pins', function(req, res) {
  Users.findById(req.params.id)
  .exec(function(err, user) {
    if (err) console.log(err);
    res.render('pins/index', {
      user: user,
      pins: user.pins
    });
  });
});

// GET ROUTE FOR VIEWING DETAILS OF EACH PIN
router.get('user/:userId/pins/:id', function showPinDetail(req, res) {
 	 Users.findById(req.params.userId)
  	.exec(function(err, user) {
    	if (err) console.log(err);
    	const pinDetail = user.pins.id(req.params.id);
    	console.log(user)
    	res.render('pins/show.hbs', {
      		user: user,
      		pin: pinDetail
   		 });
  	});
});

router.get('user/:userId/pins/:id/edit', function editProjectIdea(req, res) {
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

// // EDIT TRACK & RENDER TO edit.hbs
// router.get('user/:userId/pinss/:id/edit', function editTrack(req, res) {
//   User.findById(req.params.userId)
//     .exec(function (err, user){
//       if (err) { console.log(err); }
//       const pinsDetail = user.pinss.id(req.params.id);
//       res.render('pinss/edit.hbs', {
//         user: user,
//         pins: trackDetail
//       });
//     });
// });

// // UPDATE
// router.put('/:id', function updateProjectIdea(req, res){
//   User.findById(req.params.userId)
//     .exec(function (err, user){
//       if (err) { console.log(err); }
//       const projectIdea = user.projectIdeas.id(req.params.id);

//       projectIdea.description = req.body.description
//       projectIdea.in_progress = req.body.in_progress
//       user.save();

//       res.render('project_ideas/show', {
//         projectIdea: projectIdea,
//         user: user
//       });
//     });
// });



// // USER UPDATE ROUTE
// router.put('/:id', function(req, res){
//   User.findByIdAndUpdate(req.params.id, {
//     username: req.body.username,
//     email: req.body.email,
//     travelCountry: req.body.travelCountry
//   }, { new: true }) // new info
//   .exec(function(err, user){
//     if (err) { console.log(err); }
//     console.log(user);
//     res.render('user/index.hbs', {
//       user: user
//     });
//   });
// });


module.exports = router;