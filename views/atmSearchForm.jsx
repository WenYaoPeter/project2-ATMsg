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
			<div className="row justify-content-md-center justify-content-sm-center">

				<form className="search" action="/list_of_Atms" method="POST">
         			<div className="form-group">
         			 	
         			 	<label for="searchByArea">Search By Bank</label>
	        			<select className="form-control" id="banks" name="chosenBank">
			              <option value=""></option>
			              <option value="UOB">UOB</option>
			              <option value="DBS">DBS</option>
			              <option value="CITIBANK">CITIBANK</option>
			        	</select>

	         			<label for="searchByArea">Search By Area</label>
	         				<br/>
			            <select id="areas" name="chosenArea">
			            	<option value=""></option>
				            {this.props.atmsAreas.map(atmsArea => (
				              <option value={atmsArea.area}>{atmsArea.area}</option>
				            ))}
			            </select>
			            	<br/>
          				<button type="submit" className="btn btn-primary submit">Submit</button>
          			
          			</div>
				</form>
			</div>

			</DefaultLayout>
		);
	}
}

module.exports = FindAtm;