var React = require('react');
var StoryTime = React.createFactory(require('../components/StoryTime.jsx'));

module.exports = function (app, passport) {

    app.get("/login", function (req, res) {
    	res.render('home', { 
            markup: React.renderToString(
                StoryTime(
                    {
                        path: req.path, 
                        message: req.flash('message')
                    }
            )), 
        layout: 'main' });
    });

    app.post('/login', 
    	passport.authenticate('authentication',
    		{ 
    			successRedirect: '/dashboard', 
    			failureRedirect: '/login',
                failureFlash: true
    		}
    	)
    );

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    app.get("/register", function (req, res) {
    	res.render('home', { markup: React.renderToString(StoryTime({path: req.path})), layout: 'main' });
    });

    app.post('/register',
    	passport.authenticate('registration',
			{
				successRedirect : '/dashboard',
				failureRedirect : '/register-failed',
                failureFlash: true
			}
		)
    );
};