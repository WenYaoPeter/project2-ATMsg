var React = require("react");

class FindAtm extends React.Component {
	render(){

		return (

				<html>
				<head>
					<title></title>
					<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossOrigin="anonymous"/>
				</head>
					<body>
					<h2>ATMsg</h2>


					<ul class="navbar-nav">
					    <li class="nav-item py-md-2">
					       <a href="#" class="nav-link">Home</a>
					    </li>
					    <li class="nav-item py-md-2">
					       <a href="#" class="nav-link">Link</a>
					    </li>
					    <li class="nav-item py-md-2">
					       <a href="#" class="nav-link">Link</a>
					    </li>
					    <li class="nav-item py-md-2">
					       <a href="#" class="nav-link">More</a>
					    </li>
					    <li class="nav-item py-md-2">
					       <a href="#" class="nav-link">Options</a>
					    </li>
					</ul>

						<div>
							<p>UOB</p> <p>DBS</p> <p>CITIBANK</p>
						</div>

					</body>
					</html>
		)
	}
}

module.exports = FindAtm;