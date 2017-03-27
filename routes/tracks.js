var express = require('express');
var router = express.Router({mergeParams: true});
var User = require('../models/userModel.js');
var Track = require('../models/trackModel.js');
var authHelpers = require('../helper/auth.js');

// GET ROUTE FOR VIEWING DETAILS OF EACH TRACK
router.get('/tracks/:id', function showTrackDetail(req, res) {
 	 User.findById(req.params.userId)
  	.exec(function(err, user) {
    	if (err) console.log(err);
    	const trackDetail = user.tracks.id(req.params.id);
    	res.render('tracks/show.hbs', {
      		user: user,
      		track: trackDetail
   		 });
  	});
});

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