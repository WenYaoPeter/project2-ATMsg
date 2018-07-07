module.exports = function(db) {
	console.log('atm controller working');
	
	// const get = (request, response) => {

	// 	response.send('ATMSS from atm controller');
	// }

	const getFindAtmForm = (request, response) => {
		response.render('atmSearchForm');
	}

	const listAtms = (request, response) => {
		let userBank = request.body['chosenBank'];
		let userArea = request.body['chosenArea'];
		// console.log("userBank: "+userBank);
		// console.log("userArea: "+userArea);

		const queryString = "SELECT * FROM atm_table WHERE bank=$1 and area=$2";
		let values = [userBank, userArea];
		db.atm.atmModelGetAtm(queryString, values, (err, result) => {
		 	if(err) {
				console.log('Query error in listAtms function', err.stack);
		 	} else {
				console.log('Query result for list of atms', result.rows[0].banklocation) 
				let content = {
					atms : result.rows
				}
		 		response.render('listOfAtm', content);
			}
		 });
	}

	const getAddAtmForm = (request, response) => {
		response.render('atmAddForm');
	}

	const getEditAtmForm = (request, response) => {
		response.render('atmEditForm');
	}

	const getDeleteAtmForm = (request, response) => {
		response.render('atmDeleteForm');
	}

	return {
		// atmget : get
		getFindAtmForm : getFindAtmForm,
		getAddAtmForm : getAddAtmForm,
		getEditAtmForm : getEditAtmForm,
		getDeleteAtmForm : getDeleteAtmForm,
		listAtms : listAtms
	};
}