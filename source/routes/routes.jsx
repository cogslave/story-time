'use strict';

var express = require('express');
var router = express.Router();
var React = require('react');
var ReactRouter = require('react-router');
var DocumentTitle = require('react-document-title');
var Routes = require('../components/Routes.jsx');

function render(req, res, next) {
	ReactRouter.run(Routes, req.url, function(Handler, state) {
		var title  = DocumentTitle.rewind();
		var markup = React.renderToString(<Handler message='Hello' />);
		res.render('home', { markup: markup, layout: 'main' });
	});
}

function isAuthenticated(req, res, next) {
	if (false){ return next(); }
	res.redirect('/login');
}

router.get('/', render);
router.get('/login', render);
router.get('/dashboard', isAuthenticated, render);

module.exports = router;