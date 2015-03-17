'use strict';

require('node-jsx').install({ extension: '.jsx' });

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var routes = require('./routes/routes.jsx');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.engine('handlebars', exphbs({
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
}));

app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views/');

app.use(express.static(__dirname + '/public'));

app.use('/', routes);

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});