var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myTrack')
var Pin = require("../models/pinModel.js");

mongoose.promise = global.Promise;
var mongoose = require('mongoose');


// USE NATIVE MONGOOSE
mongoose.Promise = global.Promise;

// CLEARING EXISTING USERS and PINS
User.remove({}), function(err){
	console.log(err);
}
Pin.remove({}, function(err){
  console.log(err);
});

var Sungmin = new User({
  username: Sungmin,
  email: sungminro92@gmail.com,
  travelCountry: New York,
});

var Ryan = new User({
  username: Ryan,
  email: Ryan@gmail.com,
  travelCountry: Los Angelos,
});

var Jesse = new User({
	username: Jesse,
	email: Jesse@gmail.com,
	travelCountry: Atlanta,
});


// CREATE NEW PIN
var pinOne = new Pin({
	title: "New York Bull",
	location: 'Broadway & Morris St, New York',
	imgUrl: 'http://i.imgur.com/aCEcJys.jpg?1',
	liked: True,
	notes: 'I thought it was funny the most touched area.'

var pinTwo = new Pin({
	title: "QLIC",
	location: '4142 24th Street, Long Island City',
	liked: true,
	imgUrl: 'http://i.imgur.com/nMvvsAy.jpg'
	notes: "Sungmin's Foods were good!"
});

var pinThree = new Pin({
	title: "Apple Store",
	location: '59th street & 5th ave, New York',
	imgUrl: 'http://i.imgur.com/9xVf8jo.jpg'
	liked: false,
	notes: "I didn't like here because there were too many people. But I learned there are student discounts. almost 50% off"
});
var pinFour = new Pin({
	title: "New York Bull",
	location: 'Broadway & Morris St, New York',
	imgUrl: 'http://i.imgur.com/WHSd2Mm.jpg',
	liked: true,
	notes: "I thought the most touched area was funny"
});

var pinFive = new Pin({
	title: "QLIC",
	location: '4142 24th Street, Long Island City',
	imgUrl: 'http://i.imgur.com/NR0pAkS.jpg'
});

var pinSix = new Pin({
	title: "Apple Store",
	location: '59th street & 5th ave, New York',
	imgUrl: 'http://i.imgur.com/oJxMK3R.jpg'
});
var pinSeven = new Pin({
	title: "New York Bull",
	location: 'Broadway & Morris St, New York',
	imgUrl: 'http://i.imgur.com/pzeybZr.jpg'
});

var pinEight = new Pin({
	title: "QLIC",
	location: '4142 24th Street, Long Island City',
	imgUrl: 'http://i.imgur.com/cUq2Gvp.jpg'
});

var pinNine = new Pin({
	title: "Apple Store",
	location: '59th street & 5th ave, New York',
	imgUrl: 'http://i.imgur.com/wdX7A4n.jpg'
});




// SAVE TO USERS

var users= [Sungmin, Ryan, Jesse];
var pins= [pinOne, pinTwo, pinThree, pinFour, pinFive, pinSix, pinSeven, pinEight, pinNine];

pins.forEach(function(pins, i){
	pins.save(function(err) {
		if(err) {console.log(err); }
		console.log(pins);
	});
});

users.forEach(function(user, i){ 
	user.pins.push(pins[i]);
	user.save(function(err) {
		if(err) {console.log(err); }
	});
});

// pinOne.save(function(err) {
//   if (err) console.log(err);
//   console.log('Track created!');
// });

// pinTwo.save(function(err) {
//   if (err) console.log(err);
//   console.log('Track created!');
// });

// pinThree.save(function(err) {
//   if (err) console.log(err);
//   console.log('Track created!');
// });

// pinFour.save(function(err) {
//   if (err) console.log(err);
//   console.log('Track created!');
// });

// pinFive.save(function(err) {
//   if (err) console.log(err);
//   console.log('Track created!');
// });

// pinSix.save(function(err) {
//   if (err) console.log(err);
//   console.log('Track created!');
// });
// pinSeven.save(function(err) {
//   if (err) console.log(err);
//   console.log('Track created!');
// });

// pinEight.save(function(err) {
//   if (err) console.log(err);
//   console.log('Track created!');
// });

// pinNine.save(function(err) {
//   if (err) console.log(err);
//   console.log('Track created!');
// });

mongoose.connection.close();