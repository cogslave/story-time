'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var StoryTime = require('../components/StoryTime.jsx');
var LandingPage = require('../components/LandingPage.jsx');
var Login = require('../components/Login.jsx');
var Register = require('../components/Register.jsx');
var Dashboard = require('../components/Dashboard.jsx');

var routes = (
		<Route name="story-time" path="/" handler={StoryTime}>
			<DefaultRoute name="landing-page" handler={LandingPage} />
			<Route name="login" path="/login" handler={Login} />
			<Route name="dashboard" path="/dashboard" handler={Dashboard} />
			<Route name="register" path="/register" handler={Register} />
		</Route>
	);

module.exports = routes;