module.exports = function(db) {
	
	let userModelGetHomeLoginPage = (queryString, callback) => {
		db.query(queryString, callback);
	};

	return {
		userModelGetHomeLoginPage : userModelGetHomeLoginPage
	}
}





