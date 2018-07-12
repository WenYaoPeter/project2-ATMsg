var React = require("react");
var DefaultLayout = require("./defaultlayout");

class EditAtmForm extends React.Component {
	render(){
		// console.log(this.props.atmToEdit.bank);
		// console.log(this.props.atmToEdit.area);
		// console.log("banklocation: ", this.props.atmToEdit.banklocation);
		// console.log("address: ", this.props.atmToEdit.address);		
		let urlToPut = "/update_edit/" + this.props.atmToEdit.id + "?_method=PUT";
		return (
			<DefaultLayout>
				<h3>Edit ATM </h3>

					<form method="POST" action={urlToPut}>
					   		<label for="" class="col-sm-2 col-form-label">Edit Bank</label>
							    <div class="col-sm-10">
							      <input type="text" defaultValue={this.props.atmToEdit.bank} class="form-control" name="bank"/>
								</div>


					   		<label for="" class="col-sm-2 col-form-label">Edit Area</label>
							    <div class="col-sm-10">
							      <input type="text" defaultValue={this.props.atmToEdit.area} class="form-control" name="area"/>
								</div>


					   		<label for="" class="col-sm-2 col-form-label">Edit Location</label>
							    <div class="col-sm-10">
							      <input type="text" defaultValue={this.props.atmToEdit.banklocation} class="form-control" name="banklocation"/>
								</div>


					   		<label for="" class="col-sm-2 col-form-label">Edit Address</label>
							    <div class="col-sm-10">
							      <input type="text" defaultValue={this.props.atmToEdit.address} class="form-control" name="address"/>
								</div>

							<button type="submit" class="btn btn-primary mb-2">Submit Edit</button>
					</form>
			</DefaultLayout>
		);
	}
}
module.exports = EditAtmForm;