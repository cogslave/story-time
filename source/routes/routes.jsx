'use strict';

var express = require('express');
var router = express.Router();
var React = require('react');
var ReactRouter = require('react-router');
var DocumentTitle = require('react-document-title');
var Routes = require('../components/Routes.jsx');

module.exports = function (passport)
{
	function render(req, res, next) {
		ReactRouter.run(Routes, req.url, function(Handler, state) {
			var title  = DocumentTitle.rewind();
			var markup = React.renderToString(<Handler />);
			res.render('home', { markup: markup, layout: 'main' });
		});
	}

	function isAuthenticated(req, res, next) {
		if (req.isAuthenticated()){ return next(); }
		res.redirect('/login');
	}

	router.get('/', render);
	router.get('/login', render);
	router.post('/login', 
		passport.authenticate('authentication',
		{ 
			successRedirect: '/dashboard', 
			failureRedirect: '/login',
	        failureFlash: true
		}
	));

	router.get('/register', render);
	router.post('/register',
    	passport.authenticate('registration',
			{
				successRedirect : '/dashboard',
				failureRedirect : '/register-failed'
			}
		)
    );
    

	router.post('/logout', function(req, res, next) { req.logout(); res.redirect('/'); });
	router.get('/dashboard', isAuthenticated, render);

	return router;
}