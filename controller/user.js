module.exports = function(db) {

	const getHomePage = (request, response) => {
		response.render('home');
	}

}

app.get('/', getHomepage);