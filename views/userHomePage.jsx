var React = require("react");

class UserHomePage extends React.Component {
	render(){
		return (
			<h2>ATMsg</h2>
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
			);
	}
}

module.exports = UserHomePage;