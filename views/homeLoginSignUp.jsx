var React = require("react");
var DefaultLayout = require("./defaultlayout");

class Home extends React.Component {
	render(){
		return (
				<DefaultLayout>
						<div className="container">
							<div className="row justify-content-md-center">
								<div className="banner col jumbotron bg-danger">
								 	<div className="row justify-content-center">
										<h2>ATMs In <span className="whiteSg">SG</span></h2>
									</div>
								</div>
								
							</div>
							<div className="row justify-content-md-center">
								<div className="col text-right">
								UOB
								</div>
								<div className="col text-center">
								DBS
								</div>
								<div className="col text-left">
								 CITIBANK
								</div>
							</div>

							<div className="row justify-content-md-center text-center" cz-shortcut-listen="true">
								<form className="form-signin " action="/userHome" method="POST">
									<h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

									<label for="inputUserName" className="sr-only">User Name</label>
									<input type="text" name="inputUserName" className="form-control" placeholder="User Name" required="" autoFocus=""/>
									
									<label for="inputEmail" className="sr-only">Email address</label>
									<input type="email" name="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus=""/>
									
									<label for="inputPassword" className="sr-only">Password</label>
									<input type="password" name="inputPassword" className="form-control" placeholder="password" required/>

									<div className="checkbox mb-3">
									  <label>
									    <input type="checkbox" value="remember-me"/> Remember me
									  </label>
									</div>

									<button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>		
								</form>
							</div>

							<br/>

							<div className="row justify-content-md-center">
								<form action="/signUpForm" method="GET">
									<button type="button" class="btn btn-info" type="submit">Sign Up</button>
									<p className="mt-5 mb-3 text-muted">© 2017-2018</p>
								</form>	
							</div>

						</div>

				</DefaultLayout>	
		);
	}
}
module.exports = Home;