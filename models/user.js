module.exports = function(db) {
	
	let userModelSignUserUp = (queryString, values, callback) => {
		db.query(queryString, values, callback);
	};

	let userModelLogUserIn = (queryString, callback) => {
		db.query(queryString, callback);
	};

	return {
		userModelSignUserUp : userModelSignUserUp,
		userModelLogUserIn : userModelLogUserIn
	}
}





