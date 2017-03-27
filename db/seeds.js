var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myTrack')
var Track = require("./models/trackModel.js");

mongoose.promise = global.Promise;

// var a = new User({
// 	username: a,
// 	email: a@gmail.com,
// 	password: a,
// 	travelCountry: New York,
// })

// var trackOne = new Track({
// 	title: "Sungmin's House",
// 	location: '4142 24th st, Long Island City, New York, 11101',
// 	imgUrl: '#'
// });


// var UserSchema = new Schema({
//   username: String,
//   email: String,
//   password: String,
//   travelCountry: String,
//   created_at: Date, 
//   updated_at: Date,
//   tracks: [TrackSchema]
// });
// var TrackSchema = new Schema({
//   title: String,
//   location: String,
//   created_at: Date,
//   updated_at: Date,
//   imgUrl: String
// });