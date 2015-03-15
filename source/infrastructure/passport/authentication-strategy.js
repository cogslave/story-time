var bcrypt = require('bcrypt');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport, db) {

  passport.use('authentication', new LocalStrategy(function(username, password, done) {
    db.get('SELECT salt FROM users WHERE username = ?', username, 
      function(err, row) {
        if (!row) { return done(null, false); }

        db.get('SELECT username, id FROM users WHERE username = ? AND password = ?', username, bcrypt.hashSync(password, row.salt), 
          function(err, row) {
            if (!row) { return done(null, false); }
            return done(null, row);
        });
    });
  }));

  passport.serializeUser(function(user, done) {
    return done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    db.get('SELECT id, name FROM users WHERE id = ?', id, function(err, row) {
      if (!row) { return done(null, false); }
      return done(null, row);
    });
  });
};