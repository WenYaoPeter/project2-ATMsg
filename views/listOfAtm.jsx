var React = require("react");
var DefaultLayout = require("./defaultlayout");

class ListOfAtms extends React.Component {
	render(){

		let x = Math.floor(Math.random() * 10);
		let randomPicUrl = "https://source.unsplash.com/random/20"+x+"x200";

		return (
			<DefaultLayout>
				<h3>{this.props.userBank} Banks in {this.props.userArea}</h3>

	            <div className="row">
	            {this.props.atms.map(atm => (	            	

					<div className="col-md-4">
						<div className="card mb-4 box-shadow">
			                
			                <img className="card-img-top" src={randomPicUrl} data-holder-rendered="true"/>
			               
			                <div className="card-body">
			                	<p className="card-text">
					                <form action={"/edit_atm_form/"+atm.id} method="GET">
						                {atm.id+', '+atm.bank+', ' +atm.banklocation+', ' +atm.area+', ' +atm.address}
						                <br/>
						                <button type="submit" className="btn btn-sm btn-outline-secondary">Edit</button>
					                </form>
				           			
				           			<form method="POST" action={"/delete_atm/"+atm.id+"?_method=delete"}>          
				                    	<button type="button" className="btn btn-sm btn-outline-secondary">Delete</button>
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