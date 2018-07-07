var React = require("react");
var DefaultLayout = require("./defaultlayout");

class FindAtm extends React.Component {
	render(){
//console.log(chosenBank);
		return (
			<DefaultLayout>
				<h2>ATM<span>sg</span></h2>

				<form action="/list_of_Atms" method="POST">
				<input list="banks" name="chosenBank"/>
					<datalist id="banks">
					  <option value="UOB"></option>
					  <option value="DBS"></option>
					  <option value="CITIBANK"></option>
					</datalist>
				<input type="submit"/>

				<input list="areas" name="chosenArea"/>
					<datalist id="areas">
					  <option value="Orchard"></option>
					  <option value="Tampines"></option>
					</datalist>
				<input type="submit"/>

				</form>

			</DefaultLayout>
		);
	}
}

module.exports = FindAtm;