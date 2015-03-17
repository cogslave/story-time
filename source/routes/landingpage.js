var React = require('react');
var StoryTime = React.createFactory(require('../components/StoryTime.jsx'));

module.exports = function (app) {
	
	function isAuthenticated(req, res, next) {
        if (req.isAuthenticated()){ return next(); }
        res.redirect('/login');
    }

    app.get("/", function (req, res) {
    	res.render('home', { markup: React.renderToString(StoryTime({path: req.path})), layout: 'main' });
    });

    app.get('/dashboard', isAuthenticated, function(req, res) {
        res.render('home', { markup: React.renderToString(StoryTime({path: req.path})), layout: 'main' });
    });
};