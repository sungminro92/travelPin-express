var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myTrack')
var Track = require("./models/trackModel.js");

mongoose.promise = global.Promise;
var mongoose = require('mongoose');
mongoose.disconnect();
mongoose.connect('mongodb://localhost/myTrack');
var Track = require("../models/trackModel.js");

// Use native promises
mongoose.Promise = global.Promise;

// First we clear the database of existing users and items.
Track.remove({}, function(err){
  console.log(err);
});

// create new track
var trackOne = new Track({
	title: "Pikachu1",
	location: 'Kanto',
	imgUrl: 'http://media.comicbook.com/2016/07/sadpikachu-189263.png'
});

var trackTwo = new Track({
	title: "Pikachu2",
	location: 'Johto',
	imgUrl: 'http://media.comicbook.com/2016/07/sadpikachu-189263.png'
});

var trackThree = new Track({
	title: "Pikachu3",
	location: 'Hoenn',
	imgUrl: 'http://media.comicbook.com/2016/07/sadpikachu-189263.png'
});

// save the users
trackOne.save(function(err) {
  if (err) console.log(err);
  console.log('Track created!');
});

trackTwo.save(function(err) {
  if (err) console.log(err);
  console.log('Track created!');
});

trackThree.save(function(err) {
  if (err) console.log(err);
  console.log('Track created!');
});

mongoose.connection.close();