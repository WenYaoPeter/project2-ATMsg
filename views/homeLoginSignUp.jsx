var React = require("react");
var DefaultLayout = require("./defaultlayout");

class Home extends React.Component {
	render(){
		return (
				<DefaultLayout>
					<div className="container">
					<div className="row inputs">
						    <div className="col">
						      UOB
						    </div>
						    <div className="col">
						      DBS
						    </div>
						    <div className="col">
						      CITIBANK
						    </div>
					</div>
					<div className="row">
						<div className="col-sm">
						<form action="/userHome" method="POST">

							<input type="text" name="inputUserName" placeholder="user name"/>
							<br/>
							<input type="password" name="inputPassword" placeholder="password"/>
							<br/>
							<input type="submit" value="Login"/>
						</form>
						</div>
					</div>
						<form action="/signUpForm" method="GET">
							<input type="submit" value="Sign Up"/>
						</form>	

					</div>
				</DefaultLayout>	
		);
	}
}
module.exports = Home;