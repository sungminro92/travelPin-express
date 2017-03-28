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
	title: "Pikachu1",
	location: 'Kanto',
	imgUrl: 'http://media.comicbook.com/2016/07/sadpikachu-189263.png'
});

var pinTwo = new Pin({
	title: "Pikachu2",
	location: 'Johto',
	imgUrl: 'http://media.comicbook.com/2016/07/sadpikachu-189263.png'
});

var pinThree = new Pin({
	title: "Pikachu3",
	location: 'Hoenn',
	imgUrl: 'http://media.comicbook.com/2016/07/sadpikachu-189263.png'
});

// save the users
pinOne.save(function(err) {
  if (err) console.log(err);
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