var React = require("react");
var DefaultLayout = require("./defaultlayout");

class UserHomePage extends React.Component {
	render(){
		
		let deleteMsgToUser;
		if(this.props.msg){
			deleteMsgToUser = this.props.msg
			console.log(this.props.msg);
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
				</div>

		</DefaultLayout>
			);
	}
}

module.exports = UserHomePage;