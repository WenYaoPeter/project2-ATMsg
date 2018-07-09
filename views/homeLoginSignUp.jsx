var React = require("react");
var DefaultLayout = require("./defaultlayout");

class Home extends React.Component {
	render(){
		return (
				<DefaultLayout>
					<div>
						ATMs In Singapore
					</div>
						     <p><span className="uob">UOB</span> <span id="dbs">DBS</span> <span id="citibank">CITIBANK</span></p>

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

				</DefaultLayout>	
		);
	}
}
module.exports = Home;