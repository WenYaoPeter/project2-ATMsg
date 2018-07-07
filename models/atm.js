module.exports = function(db) {
	
	let atmModelGetAtm = (queryString, values, callback) => {
		db.query(queryString, values, callback);
	};


	return {
		atmModelGetAtm : atmModelGetAtm
	}
}