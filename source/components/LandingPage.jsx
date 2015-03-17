var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = LandingPage = React.createClass({
    render: function(){
        return (
            <div>
                <p>Landing Page</p>
                <p><a className="btn btn-primary" href="/login">Login</a></p>
                <p><Link to="login" className="btn btn-primary">Login!</Link></p>
            </div>
        );
    }
});