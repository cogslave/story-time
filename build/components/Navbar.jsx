var React = require('react');
var Link = require('react-router-component').Link;

module.exports = Navbar = React.createClass({
    render: function(){

        var widget;

        if(this.props.isAuthenticated){
            widget = (
                <div className="form-group navbar-right">
                    <a className="btn btn-primary" href="/logout">Logout</a>
                </div>
            );
        }
        else {
            widget = (
                <div className="form-group navbar-right">
                    <Link className="btn btn-primary" href="/login">Login</Link>
                    <a className="btn btn-primary" href="/register">Register</a>
                </div>
            );
        }

        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Story Time</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <div className="form-group navbar-right">
                            {widget}
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
});