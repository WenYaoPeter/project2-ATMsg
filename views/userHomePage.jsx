var React = require("react");
var DefaultLayout = require("./defaultlayout");

class UserHomePage extends React.Component {
	render(){
		
		let deleteMsgToUser;
		let editMsgToUser;

		if(this.props.editMsg){
			editMsgToUser = this.props.editMsg
			console.log(this.props.editMsg);
		}

		if(this.props.deleteMsg){
			deleteMsgToUser = this.props.deleteMsg
			console.log(this.props.deleteMsg);
		}

		return (

		<DefaultLayout>
			<h3>User Home Page</h3>
				<form action="/userHome/find_atm_form" method="GET">
					<input type="submit" value="Search For an ATM"/>
				</form>


				<form action="/userHome/add_atm_form" method="GET">				
					<input type="submit" value="Add an ATM"/>
				</form>

				<div>
					{deleteMsgToUser}
					{editMsgToUser}
				</div>

		</DefaultLayout>
			);
	}
}

module.exports = UserHomePage;