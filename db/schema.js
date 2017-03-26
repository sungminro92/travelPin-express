var mongoose = require('mongoose')

var TrackSchema = new Schema({
  title: String,
  location: String,
  created_at: Date,
  updated_at: Date,
  imgUrl: String,
})

TrachShcema.pre('save', function(next) {
  now = new Date()
  this.updated_at = now;
  if (!this.created_at) {
    this created_at = now;
  }
  next();
});

var UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  travelCountry: String,
  created_at: Date, 
  updated_at: Date
  tracks: [tracksSchema]
});

ProjectIdeaSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
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