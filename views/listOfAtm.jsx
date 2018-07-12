var React = require("react");
var DefaultLayout = require("./defaultlayout");

class ListOfAtms extends React.Component {
	render(){

		return(
			<DefaultLayout>
				<h3>{this.props.userBank} Banks in {this.props.userArea}</h3>

	        	<div className="row">
            		{this.props.atms.map(atm => (
          
          			<div className="col-md-4">
           				<div className="card mb-4 box-shadow">
                      		<img className="card-img-top" src={"https://source.unsplash.com/random/20"+Math.floor(Math.random() * 10)+"x200"} data-holder-rendered="true"/>
                      		<div className="card-body">
                        		<p className="card-text">
	                        		<form action={"/edit_atm_form/"+atm.id} method="GET">
	                          			{atm.id+', '+atm.bank+', ' +atm.banklocation+', ' +atm.area+', ' +atm.address}
	                         			<br/>
	                         			<button type="submit" className="btn btn-sm btn-outline-success">Edit</button>
	                        		</form>
		                      		<form method="POST" action={"/delete_atm/"+atm.id+"?_method=delete"}>          
		                            	<button type="submit" className="btn btn-sm btn-outline-danger">Delete</button>
		                      		</form>                         
                      			</p>
                      		</div>
                  		</div>
          			</div>
              		))}
        		</div>

			</DefaultLayout>
		);
	}
}

module.exports = ListOfAtms;