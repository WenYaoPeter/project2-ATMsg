var React = require("react");
var DefaultLayout = require("./defaultlayout");

class ListOfAtms extends React.Component {
	render(){
	// console.log("new inside jsx: "+this.props.atms[14].id);
	// console.log("new inside jsx: "+this.props.atms[14].banklocation);
	// console.log("new inside jsx: "+this.props.atms[14].address);
	//console.log("inside jsx listofAtms ID: "+this.props.atms[0].id);
	//let ulrToDelete = "/delete_Atm/" + atm.id + "?_method=DELETE";


		return (
			<DefaultLayout>
				<h3>{this.props.userBank} Banks in {this.props.userArea}</h3>

			<ul>
	            {this.props.atms.map(atm => (
	              <li key={atm.id}>
	              <form action={"/edit_atm_form/"+atm.id} method="GET">
	                {atm.id+', '+atm.bank+', ' +atm.banklocation+', ' +atm.area+', ' +atm.address}
	             	<input type="submit" value="Edit"/>
	              </form>

	              <form method="POST" action={"/delete_atm/"+atm.id+"?_method=delete"}>
	              	<input type="submit" value="Delete"/>
	              </form>
	              </li>

	            ))}
          	</ul>
			</DefaultLayout>
		);
	}
}

module.exports = ListOfAtms;