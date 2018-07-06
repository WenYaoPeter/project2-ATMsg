var React = require("react");



class SignUpForm extends React.Component {
	render(){

	return (
	<html>
		<head>
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossOrigin="anonymous"/>
			<title></title>
		</head>
			<body>
				<h2>ATMsg</h2>
				<h3>Sign Up!</h3>

					<form action="/signUserUp" method="POST">
						<input type="text" name="inputUserName" placeholder="user name"/>
						<br/>
						<input type="password" name="inputPassword" placeholder="password"/>
						<br/>
						<input type="text" name="inputEmail" placeholder="email"/>
						<input type="submit" value="Sign Up"/>
					</form>
			</body>
	</html>
			);
	}
}

module.exports = SignUpForm;