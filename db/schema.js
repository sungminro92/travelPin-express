var mongoose = require('mongoose');
var Schema = mongoose.Schema; // define mongoose Schema

var PinSchema = new Schema({
  title: String,
  location: String,
  created_at: Date,
  updated_at: Date,
  imgUrl: String,
  Liked: Boolean,
  notes: String
});

PinSchema.pre('save', function(next) {
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
  pins: [PinSchema]
});

UserSchema.pre('save', function(next){
  var now = new Date();
  this.updated_at = now;
  //this.pins = [];
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

var UserModel = mongoose.model("User", UserSchema);
var PinModel = mongoose.model("Pin", PinSchema);

module.exports = {
  User: UserModel,
  Pin: PinModel,
}