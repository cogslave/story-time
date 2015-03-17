var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

module.exports = StoryTime = React.createClass({
    render: function(){
        return (
            <div>
                <div className="row">
                    <p>Application here!</p>
                </div>
                <div className="row">
                    <RouteHandler />
                </div>
            </div>
        )
    }
});