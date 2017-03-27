var mongoose = require('mongoose');
var Schema = mongoose.Schema; // define mongoose Schema

var TrackSchema = new Schema({
  title: String,
  location: String,
  created_at: Date,
  updated_at: Date,
  imgUrl: String,
  Liked: Boolean
});

TrackSchema.pre('save', function(next) {
  now = new Date()
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});

var UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
  travelCountry: String,
  created_at: Date, 
  updated_at: Date,
  tracks: [TrackSchema]
});

UserSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

var UserModel = mongoose.model("User", UserSchema);
var TrackModel = mongoose.model("track", TrackSchema);

module.exports = {
  User: UserModel,
  Track: TrackModel,
}