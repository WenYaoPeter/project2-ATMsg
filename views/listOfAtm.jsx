var React = require("react");
var DefaultLayout = require("./defaultlayout");

class ListOfAtms extends React.Component {
	render(){

		return (
			<DefaultLayout>
				<h2>ATM<span>sg</span></h2>
				<p>show list of atms</p>

			<ul>
	            {this.props.atms.map(atm => (
	              <li key={atm.id}>
	                {atm.bank+', ' +atm.banklocation+', ' +atm.area+', ' +atm.address}
	              </li>
	            ))}
          	</ul>

			</DefaultLayout>
		);
	}
}

module.exports = ListOfAtms;