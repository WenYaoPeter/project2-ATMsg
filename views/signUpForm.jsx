var React = require("react");

class SignUpForm extends React.Component {
	render(){
	return (
	<html>
		<head>
		</head>
			<body>
			<h2>ATMsg</h2>
			<h3>Sign Up!</h3>
			
				<form action="/signUserUp" method="POST">
					<input type="text" name="inputUserName" placeholder="user name"/>
					<br/>
					<input type="password" name="inputPassword" placeholder="password"/>
					<br/>
					<input type="text" name="email" placeholder="email"/>
					<input type="submit" value="Sign Up"/>
				</form>

			</body>
			</html>		
			);
	}
}

module.exports = SignUpForm;