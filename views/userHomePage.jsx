var React = require("react");
var DefaultLayout = require("./defaultlayout");

class UserHomePage extends React.Component {
	render(){
		return (

		<DefaultLayout>
			<h2>ATM<span>sg</span></h2>
			<h3>User Home Page</h3>
				<form action="/userHome/find_atm_form" method="GET">
					<input type="submit" value="Search For an ATM"/>
				</form>


				<form action="/userHome/add_atm_form" method="GET">				
					<input type="submit" value="Add an ATM"/>
				</form>


				<form action="/userHome/edit_atm_form" method="GET">				
					<input type="submit" value="Edit an ATM"/>
				</form>


				<form action="/userHome/delete_atm_form" method="GET">				
					<input type="submit" value="Delete an ATM"/>
				</form>
		</DefaultLayout>
			);
	}
}

module.exports = UserHomePage;