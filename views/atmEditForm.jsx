var React = require("react");
var DefaultLayout = require("./defaultlayout");

class EditAtmForm extends React.Component {
	render(){
		return (
			<DefaultLayout>
				<h3>Edit ATM </h3>
				<form action="" method="POST">
					Edit Bank: <input name="" type="text" defaultValue={this.props.atmToEdit.bank}/>
					Edit Area: <input name="" type="text" defaultValue={this.props.atmToEdit.area}/>
					Edit Location: <input name="" type="text" defaultValue={this.props.atmToEdit.banklocation}/>
					Edit Address: <input name="" type="text" defaultValue={this.props.atmToEdit.address}/>
					<input type="submit" value="Submit"/>
				</form>
			</DefaultLayout>

			);
	}
}
module.exports = EditAtmForm;