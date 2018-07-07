module.exports = function(db) {
	console.log('atm controller working');
	
	// const get = (request, response) => {

	// 	response.send('ATMSS from atm controller');
	// }

	const getFindAtmForm = (request, response) => {
		const queryString = "SELECT DISTINCT area FROM atm_table";
		db.atm.atmModelGetAtmArea(queryString, (err, result) => {
		 	if(err) {
				console.log('Query error in listAtms function', err.stack);
		 	} else {
		 		console.log('Query to get area successful', result.rows[0].area);
		 		let content = {
		 			atmsAreas : result.rows
		 		} 
				response.render('atmSearchForm', content);
		 	}
		});
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
				console.log('Query result for list of atms') 
				let content = {
					atms : result.rows,
					userBank : userBank,
					userArea : userArea
				}
		 		response.render('listOfAtm', content);
			}
		 });
	}

	const getAddAtmForm = (request, response) => {
		response.render('atmAddForm');
	}

	const addNewAtm = (request, response) => {

		function firstLetterUppercase(string) 
		{
		    return string.charAt(0).toUpperCase() + string.slice(1);
		}
		let newBank = firstLetterUppercase(request.body['newBankInput']);
		let newArea = firstLetterUppercase(request.body['newAreaInput']);
		let newBankLocation = firstLetterUppercase(request.body['newBankLocation']);
		let newAddr = request.body['newAddrInput'];

		const queryString = "INSERT INTO atm_table (bank, area, address, banklocation) VALUES ($1, $2, $3, $4)";
		let values = [newBank, newArea, newAddr, newBankLocation];

		db.atm.atmModelAddNewAtm(queryString, values, (err, result) => {
			if(err){
				console.log('Query error in inserting into db', err.stack)
			} else {
				console.log('Query to insert successful')
			}
		})
	}

	const getEditAtmForm = (request, response) => {
		//response.send(request.params.id);
		console.log(typeof parseInt(request.params.id));
		let idOfAtmToEdit = parseInt(request.params.id);
		console.log("hello "+idOfAtmToEdit);

		const queryString = "SELECT * FROM atm_table WHERE id="+idOfAtmToEdit;
		db.atm.atmModelGetAtmToEdit(queryString, (err, result) => {
			if(err) {
				console.log('Query error in retrieving ATM to edit', err.stack)
			} else {
				console.log('Query to retrieve ATM to edit: ', result.rows[0].name);
				let content = {
					atmToEdit : result.rows[0]
				}
				response.render('atmEditForm', content);
			}
		})
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
		listAtms : listAtms,
		addNewAtm : addNewAtm
	};
}