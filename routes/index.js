var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My tracks' });
});

module.exports = router;

// INDEX USERS

router.get('/', function(req, res) {
	User.find({})
		.exec(function(err, users){
			if(err) {console.log(err); }
			console.log(users);
			res.render('users')
		});
});