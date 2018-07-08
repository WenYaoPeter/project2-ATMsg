var React = require("react");
var DefaultLayout = require("./defaultlayout");

class EditAtmForm extends React.Component {
	render(){
		console.log(this.props.atmToEdit.bank);
		console.log(this.props.atmToEdit.area);
		console.log("banklocation: ", this.props.atmToEdit.banklocation);
		console.log("address: ", this.props.atmToEdit.address);		
		let urlToPut = "/update_edit/" + this.props.atmToEdit.id + "?_method=PUT";
		return (
			<DefaultLayout>
				<h3>Edit ATM </h3>
					<form method="POST" action={urlToPut}>
						Edit Bank: <input name="bank" type="text" defaultValue={this.props.atmToEdit.bank}/>
						Edit Area: <input name="area" type="text" defaultValue={this.props.atmToEdit.area}/>
						Edit Location: <input name="banklocation" type="text" defaultValue={"banklocation: ", this.props.atmToEdit.banklocation}/>
						Edit Address: <input name="address" type="text" defaultValue={"address: ", this.props.atmToEdit.address}/>
						<input type="submit" value="Submit"/>
					</form>
			</DefaultLayout>
		);
	}
}
module.exports = EditAtmForm;