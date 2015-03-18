var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Navbar = require('../components/Navbar.jsx');

module.exports = StoryTime = React.createClass({
    render: function(){
        return (
            <div>
                <Navbar />
                <RouteHandler />
            </div>
        )
    }
});