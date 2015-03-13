var React = require('react');
var Link = require('react-router-component').Link;

module.exports = LandingPage = React.createClass({
    render: function(){
        return (
            <div>
                <p>Landing Page</p>
                <p><Link className="btn btn-primary" href="/login">Login</Link></p>
            </div>
        );
    }
});