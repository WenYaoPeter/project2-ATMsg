var React = require("react");
var DefaultLayout = require("./defaultlayout");

class UserHomePage extends React.Component {
	render(){
		
		let editMsgToUser;
		let deleteMsgToUser;
		let addMsgToUser;
		let signedUpMsgToUser;
		let html;

		if(this.props.editMsg){
			editMsgToUser = this.props.editMsg
			console.log(this.props.editMsg);
		}

		if(this.props.deleteMsg){
			deleteMsgToUser = this.props.deleteMsg
			console.log(this.props.deleteMsg);
		}

		if(this.props.addMsg){
			addMsgToUser = this.props.addMsg
			console.log(this.props.addMsg);
		}

		if(this.props.signedUpMsg) {
			signedUpMsgToUser = this.props.signedUpMsg
			console.log(this.props.signedUpMsg);	
		}

		if(this.props.editMsg || this.props.deleteMsg || this.props.addMsg || this.props.signedUpMsg) {
			html = <div class="alert alert-warning alert-dismissible fade show" role="alert">
						<strong>{editMsgToUser} {deleteMsgToUser} {addMsgToUser} {signedUpMsgToUser}</strong>
						<button type="button" class="close" data-dismiss="alert" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
		}

		return (

		<DefaultLayout>
			<section className="jumbotron text-center">
		        <div className="container">
         			<h1 className="jumbotron-heading">Home</h1>
          			
          			<div className="row justify-content-md-center">
          				<p class="lead text-muted">Search For An ATM Or Contribute One</p>
		            </div>

		            <div className="row">
			            <div className="col text-right">
							<form action="/userHome/find_atm_form" method="GET">
								<button type="submit" className="searchBtn btn btn-info">Search</button>
							</form>
			            </div>

			            <div className="col text-left">
			            	<form action="/userHome/add_atm_form" method="GET">				
								<button type="submit" className="btn btn-secondary my-2">Contribute</button>
							</form>
			            </div>	
			        </div>
			        <div className="row justify-content-center">
			        	<div className="col-4 w-25 p-3 text-center">
			            	{html}
						</div>
			        </div>
	        	</div>
	      	</section>
		</DefaultLayout>
			);
	}
}

module.exports = UserHomePage;