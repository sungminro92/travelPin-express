pry = require('pryjs');
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');
var db = require('./db.js');
var dotenv = require('dotenv');
dotenv.config();

// Connect to database
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
}
else {
  mongoose.connect('mongodb://localhost/travelPin');
}
mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
  }
);
mongoose.connection.once('open', function() {
  console.log("Mongoose has connected to MongoDB!");
});

// // mongoose.connect('mongodb://localhost/myTrack');

// var mongoURI = process.env.MONGODB_URI || 'mongodb://localhopst:27017/travelPin'
// mongoose.connect(mongoURI);

var index = require('./routes/index.js'); // require index
var users = require('./routes/users.js'); // require users
var pins = require('./routes/pins.js'); // require pins
var sessions = require('./routes/sessions.js'); // require sessions

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use(session({
    secret: "derpderpderpcats",
    resave: false,
    saveUninitialized: false
}));

app.use('/', index); // use index controllers
app.use('/user', users); //use users controllers
app.use('/user/:userId/pins', pins); //use pins controllers
app.use('/sessions', sessions) // use session controllers

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

