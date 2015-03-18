var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = Navbar = React.createClass({
    render: function(){

        var widget;

        if(this.props.isAuthenticated){
            widget = (
                    <form action="/logout" method="post">
                        <input type="submit" value="Logout" />
                    </form>
            );
        }
        else {
            widget = (
                <div>
                    <Link className="btn btn-primary" to="/login">Login</Link>
                    <Link className="btn btn-primary" to="/register">Register</Link>
                </div>
            );
        }

        return (
            <nav>
                {widget}
            </nav>
        )
    }
});