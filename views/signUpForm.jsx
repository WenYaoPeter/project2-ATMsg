var React = require("react");
var DefaultLayout = require("./defaultlayout");

class SignUpForm extends React.Component {
	render(){
		return (
			<DefaultLayout>
				<h3>Sign Up</h3>

				<form action="/signUserUp" method="POST">
					<div class="form-row">
					    <label for="inputUserName">User Name</label>
						<input type="text" className="form-control" name="inputUserName" placeholder="User Name"/>
					</div>
					<div class="form-row">
					    <label for="inputPassword">Password</label>
						<input type="password" className="form-control" name="inputPassword" placeholder="Password" aria-describedby="passwordHelpBlock"/>
						<small id="passwordHelpBlock" class="form-text text-muted">
						  Your password must be 6-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
						</small>
					</div>
					<div class="form-row">
						<label for="inputEmail">Email</label>
						<input type="text" className="form-control" name="inputEmail" placeholder="Email"/>	

  						<button class="btn btn-primary" type="submit">Submit form</button>
					</div>
				</form>

			</DefaultLayout>
		);
	}
}

module.exports = SignUpForm;