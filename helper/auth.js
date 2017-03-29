var User = require('../models/userModel.js'); //requiring user model
var Pin = require('../models/pinModel.js');
var bcrypt = require('bcrypt');


function createSecure(req, res, next) {
  var password = req.body.password;
  res.hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  next();
}

// ('sessions/login')
function loginUser(req, res, next) {
  var email = req.body.email; 
  var password = req.body.password;

  User.findOne({ email: email })
  .then(function(foundUser){
    if (foundUser == null) {
      res.json({status: 401, data: "Sorry, you're not authorized"})

    } else if (bcrypt.compareSync(password, foundUser.password)) {
      req.session.currentUser = foundUser;
    }
    next();
  })
  .catch(function(err){
    res.json({status: 500, data: err})
  });
}

function authorized(req, res, next) {
  var currentUser = req.session.currentUser
  // THIS ASSUMES THAT EVERY :id refers to the user _id
  // needs to check if the current user doesn't exist, if it does then make
  // sure that the id of the logged in user and the id of the route match
  if (!currentUser || currentUser._id !== req.params.id ) {
    // customize
    // res.render('errors/401.hbs')
    // res.redirect('/users')
    res.send({status: 401, data: "Unauthorized"});
  } else {
    next();
  };
}


module.exports = {
  createSecure: createSecure,
  loginUser: loginUser,
  authorized: authorized
}