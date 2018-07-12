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
				console.log('Query result for list of atms');

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
				let addedmsg = "ATM added";
				let content = {
					addMsg : addedmsg
				}
				response.render('userHomePage', content);
			}
		})
	}

	const getEditAtmForm = (request, response) => {
		//response.send(request.params.id);
		//console.log(typeof parseInt(request.params.id));
		 let idOfAtmToEdit = parseInt(request.params.id);
		 console.log("requst.params.id: ", request.params.id)
		 console.log("hello request.params.id::: " + idOfAtmToEdit);

		const queryString = "SELECT * FROM atm_table WHERE id="+idOfAtmToEdit;
		console.log("QUERYYSTRINGGGGGG: ", queryString)
		console.log("parseInt:: ", parseInt(idOfAtmToEdit));
		db.atm.atmModelGetAtmToEdit(queryString, (err, result) => {
			if(err) {
				console.log("HAHAAHAHA: ", idOfAtmToEdit);				
				console.log('Query error in retrieving ATM to edit', err.stack)
			} else {
				console.log('Query to retrieve ATM to edit: ', result.rows[0]);
				let content = {
					atmToEdit : result.rows[0]
				}
				response.render('atmEditForm', content);
			}
		})
	}

	const updateEdit = (request, response) => {
		let bankId = parseInt(request.params.id);
		let updatedBank = request.body['bank'];
		let updatedArea = request.body['area'];
		let updatedBanklocation = request.body['banklocation'];
		let updatedAddress = request.body['address'];

		console.log("request.params.id in updatEdit: "+typeof parseInt(request.params.id));
		console.log("typeof ", typeof bankId);		
		console.log("bankId: ", bankId)

		const queryString = 'UPDATE atm_table SET bank=$1, area=$2, banklocation=$3, address=$4 WHERE id=$5';
		let values = [updatedBank, updatedArea, updatedBanklocation, updatedAddress, bankId];
		db.atm.atmModelUpdateEdit(queryString, values, (err, result) => {
			if(err) {
				console.log('Query error in updating database', err.stack);
			} else {
				console.log('Query to upate(PUT) successful', result);
				let edittedmsg = "ATM editted";
				let content = {
					editMsg : edittedmsg
				}
				response.render('userHomePage', content);
			}
		})
	}



	const deleteAtm = (request, response) => {
		let idToDelete = parseInt(request.params.id);
		const queryString = "DELETE from atm_table WHERE id="+idToDelete;
		db.atm.atmModelDeleteAtm(queryString, (err, result) => {
			if(err){
				console.log('Query error deleting ATM', err.stack);
			} else {
				console.log('Query to delete successful', result);

				let deletedmsg = "ATM deleted";
				let content = {
					deleteMsg : deletedmsg
				}
				response.render('userHomePage', content);
			}
		})
	}

	return {
		// atmget : get
		getFindAtmForm : getFindAtmForm,
		getAddAtmForm : getAddAtmForm,
		getEditAtmForm : getEditAtmForm,
		listAtms : listAtms,
		addNewAtm : addNewAtm,
		updateEdit : updateEdit,
		deleteAtm : deleteAtm
	};
}