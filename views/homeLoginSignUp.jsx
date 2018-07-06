var React = require("react");

const h2Style = {
  color: '#aaa',
  fontSize: '40px',
  textAlign: 'start'
} 

class Home extends React.Component {
	render(){
		
		return (


				<html>
				<head>
					<title></title>
					<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossOrigin="anonymous"/>
				</head>
				
				<body>

					<h2 style={h2Style}>ATMsg</h2>
				
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