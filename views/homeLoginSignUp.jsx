var React = require("react");

class Home extends React.Component {
	render(){
		return (
		<html>
		<head>
		</head>
			<body>
			<h2>ATMsg</h2>
				
				<form action="/userHome" method="POST">
					<input type="text" name="inputUserName" placeholder="user name"/>
					<br/>
					<input type="password" name="inputPassword" placeholder="password"/>
					<br/>
					<input type="submit" value="Login"/>
				</form>


				<form action="/signUpForm" method="GET">
					<input type="submit" value="Sign Up"/>
				</form>
				
		</body>
		</html>		
		);
	}
}
module.exports = Home;