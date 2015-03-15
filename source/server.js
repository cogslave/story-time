var express = require('express');
var session = require('express-session');
var exphbs = require('express-handlebars');
var http = require('http');
var React = require('react');
var JSX = require('node-jsx').install();
var passport = require('passport');
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('/home/cogslave/Documents/Projects/story-time/build/database/development.db');
var app = express();

var port = process.env.PORT || 3000;

app.use(session({ secret: 'test-secret' }));
app.use(passport.initialize());
app.use(passport.session());

require("./routes/routes")(app, passport);
require("./infrastructure/passport/authentication-strategy")(passport, db);
require("./infrastructure/passport/registration-strategy")(passport, db);

// Set handlebars as the templating engine
app.engine('handlebars', exphbs({
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
}));

app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views/');

// Set /public as our static content dir
app.use(express.static(__dirname + '/public'));

var server = http.createServer(app).listen(port, function() {
    console.log('Express server listening on port ' + port);
});