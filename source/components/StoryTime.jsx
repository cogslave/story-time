var React = require('react');
var Router=require('react-router-component');
var Locations=Router.Locations;
var Location=Router.Location;
var LandingPage = require('./LandingPage.jsx');
var Login = require('./Login.jsx');
var Register = require('./Register.jsx');

module.exports = StoryTime = React.createClass({
    render: function(){
        return (
            <div>
                <div className="row">
                    <Locations ref="router" path={this.props.path}>
                        <Location path="/" handler={LandingPage} />
                        <Location path="/login" handler={Login} />
                        <Location path="/register" handler={Register} />
                    </Locations>
                </div>
            </div>
        )
    }
});