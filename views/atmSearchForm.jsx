var React = require("react");
var DefaultLayout = require("./defaultlayout");

class FindAtm extends React.Component {
	render(){
	// console.log("inside jsx AREA: "+this.props.atmsAreas[0].area);

	// const mapped = this.props.atmsAreas.map(atmsArea => {
	// 	console.log(atmsArea.area);
	// })

		return (
			<DefaultLayout>
				<form action="/list_of_Atms" method="POST">
					<input list="banks" name="chosenBank"/>
						<datalist id="banks">
						  <option value="UOB"></option>
						  <option value="DBS"></option>
						  <option value="CITIBANK"></option>
						</datalist>

					<input list="areas" name="chosenArea"/>
						<datalist id="areas">
						{this.props.atmsAreas.map(atmsArea => (
						  <option value={atmsArea.area}></option>
						))}
						</datalist>
					<input type="submit"/>
				</form>

			</DefaultLayout>
		);
	}
}

module.exports = FindAtm;