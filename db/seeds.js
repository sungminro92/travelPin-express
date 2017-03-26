var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myTrack')
var Track = require("./models/trackModel.js");

mongoose.promise = global.Promise;


var trackOne = new Track({
	title: "Sungmin's House",
	location: '4142 24th st, Long Island City, New York, 11101',
	imgUrl: '#'
});
