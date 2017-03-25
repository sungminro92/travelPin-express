var mongoose = require('mongoose')

var TrackSchema = new Schema({
  title:
  location:
  created_at:
  updated_at:
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
  emailAddress: String,
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

var TrackSchema = new Schema({
  title:
  location: String,,

})