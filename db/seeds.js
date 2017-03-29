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
var a = new Pin({
	title: "New York Bull",
	location: 'Broadway & Morris St, New York',
	imgUrl: 'http://vignette2.wikia.nocookie.net/swfanon/images/7/77/Pikachu.png/revision/latest?cb=20110603135558'
});

var b = new Pin({
	title: "QLIC",
	location: '4142 24th Street, Long Island City',
	imgUrl: 'http://vignette2.wikia.nocookie.net/swfanon/images/7/77/Pikachu.png/revision/latest?cb=20110603135558'
});

var c = new Pin({
	title: "Apple Store",
	location: '59th street & 5th ave, New York',
	imgUrl: 'http://vignette2.wikia.nocookie.net/swfanon/images/7/77/Pikachu.png/revision/latest?cb=20110603135558'
});
var d = new Pin({
	title: "New York Bull",
	location: 'Broadway & Morris St, New York',
	imgUrl: 'http://vignette2.wikia.nocookie.net/swfanon/images/7/77/Pikachu.png/revision/latest?cb=20110603135558'
});

var e = new Pin({
	title: "QLIC",
	location: '4142 24th Street, Long Island City',
	imgUrl: 'http://vignette2.wikia.nocookie.net/swfanon/images/7/77/Pikachu.png/revision/latest?cb=20110603135558'
});

var f = new Pin({
	title: "Apple Store",
	location: '59th street & 5th ave, New York',
	imgUrl: 'http://vignette2.wikia.nocookie.net/swfanon/images/7/77/Pikachu.png/revision/latest?cb=20110603135558'
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
a.save(function(err) {
  if (err) console.log(err);
  console.log('Track created!');
});

b.save(function(err) {
  if (err) console.log(err);
  console.log('Track created!');
});

c.save(function(err) {
  if (err) console.log(err);
  console.log('Track created!');
});
d.save(function(err) {
  if (err) console.log(err);
  console.log('Track created!');
});

e.save(function(err) {
  if (err) console.log(err);
  console.log('Track created!');
});

f.save(function(err) {
  if (err) console.log(err);
  console.log('Track created!');
});

mongoose.connection.close();