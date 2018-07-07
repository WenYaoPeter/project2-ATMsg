var React = require("react");
var DefaultLayout = require("./defaultlayout");

class SignUpForm extends React.Component {
	render(){
		return (
			<DefaultLayout>
				<h2>ATM<span>sg</span></h2>
				<h3>Sign Up!</h3>
					<form action="/signUserUp" method="POST">
						<input type="text" name="inputUserName" placeholder="user name"/>
						<br/>
						<input type="password" name="inputPassword" placeholder="password"/>
						<br/>
						<input type="text" name="inputEmail" placeholder="email"/>
						<input type="submit" value="Sign Up"/>
					</form>
			</DefaultLayout>
		);
	}
}

module.exports = SignUpForm;