var React = require('react');

module.exports = Login = React.createClass({
    render: function(){
        return (
            <div>
                <p>Login Page</p>
                <p>{this.props.message}</p>
				<form action="/login" method="post">
					<div className="form-group">
						<label>Username</label>
						<input type="text" className="form-control" name="username" />
					</div>
					<div className="form-group">
						<label>Password</label>
						<input type="password" className="form-control" name="password" />
					</div>
					<button type="submit" className="btn btn-warning btn-lg">Login</button>
				</form>
			</div>
        );
    }
});