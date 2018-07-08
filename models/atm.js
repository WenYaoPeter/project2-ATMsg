module.exports = function(db) {

	let atmModelGetAtmArea = (queryString, callback) => {
		db.query(queryString, callback);
	};
	
	let atmModelGetAtm = (queryString, values, callback) => {
		db.query(queryString, values, callback);
	};

	let atmModelAddNewAtm = (queryString, values, callback) => {
		db.query(queryString, values, callback);
	};

	let atmModelGetAtmToEdit = (queryString, callback) => {
		db.query(queryString, callback);
	};

	let atmModelUpdateEdit = (queryString, callback) => {
		db.query(queryString, callback);
	}

	let atmModelDeleteAtm = (queryString, callback) => {
		db.query(queryString, callback);
	}


	return {
		atmModelGetAtmArea : atmModelGetAtmArea,
		atmModelGetAtm : atmModelGetAtm,
		atmModelAddNewAtm : atmModelAddNewAtm,
		atmModelGetAtmToEdit : atmModelGetAtmToEdit,
		atmModelUpdateEdit : atmModelUpdateEdit,
		atmModelDeleteAtm : atmModelDeleteAtm
	};
}