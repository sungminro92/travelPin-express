var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myTrack')
var Pin = require("../models/pinModel.js");

mongoose.promise = global.Promise;
var mongoose = require('mongoose');


// USE NATIVE MONGOOSE
mongoose.Promise = global.Promise;

// FIRST CLEARR THE DATABASE OF EXISTING USER AND ITEMS
Pin.remove({}, function(err){
  console.log(err);
});

// CREATE NEW PIN
var pinOne = new Pin({
	title: "New York Bull",
	location: 'Broadway & Morris St, New York',
	imgUrl: 'http://i.imgur.com/aCEcJys.jpg?1'
});

var pinTwo = new Pin({
	title: "QLIC",
	location: '4142 24th Street, Long Island City',
	imgUrl: 'http://i.imgur.com/nMvvsAy.jpg'
});

var pinThree = new Pin({
	title: "Apple Store",
	location: '59th street & 5th ave, New York',
	imgUrl: 'http://i.imgur.com/9xVf8jo.jpg'
});

// save the users
pinOne.save(function(err) {
  if (err) console.log(err);q
  console.log('Track created!');
});

pinTwo.save(function(err) {
  if (err) console.log(err);
  console.log('Track created!');
});

pinThree.save(function(err) {
  if (err) console.log(err);
  console.log('Track created!');
});

mongoose.connection.close();