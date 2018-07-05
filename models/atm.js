module.exports = function(db) {
	
	let atmModelGetAtm = (queryString, callback) => {
		db.query(querSring, callback);
	};

	return {
		atmModelGetAtm : atmModelGetAtm
	}
}