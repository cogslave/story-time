var bcrypt = require('bcrypt');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport, db) {

	passport.use('registration', 
  		new LocalStrategy(
  			function(username, password, done) { 
  				//Check user name is unique
  				//Create user
  				//Save user
  				var user = {
  					id: null,
  					username: username,
  					password: password,
  					salt: bcrypt.genSaltSync(16)
  				};

  				db.get(
  					'INSERT users(username, password, salt) VALUES (?, ?, ?); SELECT last_insert_rowid();', 
  					[user.username, user.password, user.salt],
  					function(err, row) { 
  						user.id = row.id;
  					}
  				);

  				return done(null, user);
  			}
		)
	);
};