'use strict';

var React = require('react');
var Router = require('react-router');
var routes = require('./components/Routes.jsx');

if (typeof window !== 'undefined') {
	document.addEventListener("DOMContentLoaded", function(event) {
		Router.run(routes, Router.HistoryLocation, function (Handler, state) {
			React.render(<Handler />, document.getElementById('app'));
		});
	});
}