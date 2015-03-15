var React = require('react');

module.exports = Register = React.createClass({
    render: function(){
        return (
            <div>
                <p>Register Page</p>
				<form action="/register" method="post">
					<div className="form-group">
						<label>Name</label>
						<input type="text" className="form-control" name="username" />
					</div>
					<div className="form-group">
						<label>Password</label>
						<input type="password" className="form-control" name="password" />
					</div>
					<button type="submit" className="btn btn-warning btn-lg">Register</button>
				</form>
			</div>
        );
    }
});