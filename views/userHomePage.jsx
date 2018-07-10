var React = require("react");
var DefaultLayout = require("./defaultlayout");

class UserHomePage extends React.Component {
	render(){
		
		let editMsgToUser;
		let deleteMsgToUser;
		let addMsgToUser;

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

		return (

		<DefaultLayout>

			<section class="jumbotron text-center">
		        <div class="container">
         			<h1 class="jumbotron-heading">Home</h1>
          			
          			<div className="row justify-content-md-center">
          				<p class="lead text-muted">Search For An ATM Or Contribute One</p>
		            </div>

		            <div className="row">
			            <div className="col text-right">
							<form action="/userHome/find_atm_form" method="GET">
								<button type="submit" className="btn btn-info">Search</button>
							</form>
			            </div>

			            <div className="col text-left">
			            	<form action="/userHome/add_atm_form" method="GET">				
								<button type="submit" className="btn btn-secondary my-2">Contribute</button>
							</form>
			            </div>
			        </div>

	        	</div>
	      	</section>
				<div>
					{editMsgToUser}
					{deleteMsgToUser}
					{addMsgToUser}
				</div>
		</DefaultLayout>
			);
	}
}

module.exports = UserHomePage;