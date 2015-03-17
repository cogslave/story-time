'use strict';

var React = require('react');
var Router = require('react-router');
var DocumentTitle = require('react-document-title');
var routes = require('../components/Routes.jsx');

module.exports = function (req, res, next) {

	function render(Handler, state) {
		var title  = DocumentTitle.rewind();
		var markup = React.renderToString(<Handler />);

		res.render('home', { markup: markup, layout: 'main' }); 
  	}

	Router.run(routes, req.url, render);
};