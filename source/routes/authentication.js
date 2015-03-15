var React = require('react');
var StoryTime = React.createFactory(require('../components/StoryTime.jsx'));

module.exports = function (app, passport) {
    
    app.get("/login", function (req, res) {
    	res.render('home', { markup: React.renderToString(StoryTime({path: req.path})), layout: 'main' });  
    });

    app.post('/login', 
    	passport.authenticate(
    		'authentication',
    		{ 
    			successRedirect: '/good-login', 
    			failureRedirect: '/bad-login' 
    		}
    	)
    );

    app.get("/register", function (req, res) {
    	res.render('home', { markup: React.renderToString(StoryTime({path: req.path})), layout: 'main' });    
    });

    app.post('/register',
    	passport.authenticate('registration',
			{
				successRedirect : '/profile',
				failureRedirect : '/register-failed'
			}
		)
    );
};