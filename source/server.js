var express = require('express');
var exphbs = require('express-handlebars');
var http = require('http');
var React = require('react');
var JSX = require('node-jsx').install();
var StoryTime = React.createFactory(require('./components/StoryTime.jsx'));

// Create an express instance and set a port variable
var app = express();
var port = process.env.PORT || 3000;

// Set handlebars as the templating engine
app.engine('handlebars', exphbs({
    views: __dirname + '/views/',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
}));
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views/');

// Catch all Route
app.get('/', function(req, res){
    res.render('home', { markup: React.renderToString(StoryTime({path: req.path})), layout: 'main' });
});

app.get('/login', function(req, res){
    res.render('home', { markup: React.renderToString(StoryTime({path: req.path})), layout: 'main' });
});

// Set /public as our static content dir
app.use(express.static(__dirname + '/public'));

var server = http.createServer(app).listen(port, function() {
    console.log('Express server listening on port ' + port);
});