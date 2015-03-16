var bcrypt = require('bcrypt');
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
  					password: bcrypt.hashSync(password, bcrypt.genSaltSync(16))
  				};

  				var insert = db.prepare(
            'INSERT INTO users(name, password) VALUES (?, ?);', 
            [user.username, user.password]
          );
          insert.run(function(err, row) { user.id = this.lastID; return done(null, user); });
          insert.finalize();

  				//return done(null, user);
  			}
		)
	);
};