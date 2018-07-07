var React = require("react");

class DefaultLayout extends React.Component {
	render() {
		return (
			<html>
				<head>
					<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossOrigin="anonymous"/>
					<link rel="stylesheet" type="text/css" href="./style.css"/>
					<title>ATM in SG</title>
				</head>
				<body>
				<h2>ATM<span>sg</span></h2>
				{this.props.children}
				</body>
			</html>

			);
	}
}

module.exports = DefaultLayout;