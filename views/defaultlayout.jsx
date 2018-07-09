var React = require("react");

class DefaultLayout extends React.Component {
	render() {
		return (
			<html>
				<head>
					<title>ATM in SG</title>
					<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossOrigin="anonymous"/>
					<link rel="stylesheet" type="text/css" href="/public/style.css"/>
				</head>
				<body>
					<nav>
						<a href="#">Home</a>
						<a href="#">About</a>
						<a href="#">Contact</a>
					</nav>
					<h2>ATM<span className="sg">sg</span></h2>
					{this.props.children}
				</body>
			</html>

			);
	}
}

module.exports = DefaultLayout;