var bcrypt = require('bcrypt');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport, db) {

  passport.use('authentication', new LocalStrategy(function(username, password, done) {
    db.get('SELECT password FROM users WHERE name = ?', username, 
      function(err, row) {
        if (!row) { return done(null, false); }

        db.get('SELECT name, id FROM users WHERE name = ? AND password = ?', username, bcrypt.hashSync(password, row.password), 
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