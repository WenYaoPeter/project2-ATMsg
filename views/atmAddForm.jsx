var React = require("react");
var DefaultLayout = require("./defaultlayout");

class AddAtm extends React.Component {
	render(){
		return (
			<DefaultLayout>
				<h3>Add an ATM</h3>
				<form action="/add_new_Atm" method="POST">
					Enter A New Bank: <input type="text" name="newBankInput"/>
					<br/>
					Enter A New Area: <input type="text" name="newAreaInput" placeholder=" i.e Simei"/>
					<br/>
					Enter ATM address: <input type="text" name="newAddrInput"/>
					<br/>
					Enter New Location: <input type="text" name="newBankLocation" placeholder=" i.e ION Orchard"/>
					<br/>
					<input type="submit" value="Contribute"/>
				</form>
			</DefaultLayout>

			)
	}
}

module.exports = AddAtm;