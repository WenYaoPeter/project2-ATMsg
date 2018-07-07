module.exports = function(db) {
	const sha256 = require('js-sha256');
	console.log('user controller working');
	
	// const get = (request, response) => {
	// 	response.send('ATMSS from user controller');
	// }

	const getHomeLoginPage = (request, response) => {
		response.render('homeLoginSignUp');
	}

	const getSignUpForm = (request, response) => {
		response.render('signUpForm');
	}

	const signUserUp = (request, response) => {
		//insert into database new user name, pw and email
		let user_nameInput = request.body['inputUserName'];	
		let passwordInput = sha256(request.body['inputPassword']);
		let emailInput = request.body['inputEmail'];

		console.log('user_nameInput length in signUserUp controller: ' +user_nameInput.length);
		console.log('passwordInput in signUserUp controller: '+passwordInput);
		console.log('emailInput in signUserUp controller : '+emailInput);

			let queryString = 'INSERT INTO user_table (user_name, password, email) VALUES ($1 ,$2 , $3) RETURNING *'
			let values = [user_nameInput, passwordInput, emailInput];
			db.user.userModelSignUserUp(queryString, values, (err, result) => {
		      if(err) {
		        console.log('QUERY ERROR IN REGISTERING NEW USER', err.stack);
		      } else {
		        console.log('QUERY RESULT FOR REGISTERING NEW USER', result.rows);
					response.render('userHomePage');
		      }
			});
		}

	const logUserIn = (request, response) => {

		let user_nameInput = request.body['inputUserName'];
		let user_hashedPw = sha256(request.body['inputPassword']);

		const queryString = "SELECT user_name, password FROM user_table";

		db.user.userModelLogUserIn(queryString, (err, result) => {
			if(err){
				console.log('QUERY ERROR IN RETRIEVING USERNAME AND PW');
			} else {	
				console.log('Query result', result.rows)

				result.rows.forEach(function(row) {

					if((user_nameInput === row.user_name) && (user_hashedPw === row.password)){
						response.render('userHomePage');
					} else if ((user_nameInput === row.user_nameInput) || (user_hashedPw !== row.password)) {
						//alert to enter correct password
					} else if ((user_nameInput !== row.user_nameInput) || (user_hashedPw === row.password)) {
						//alert to enter correct username 
					}
				});
				}
		});
	}

	return {
		// get : get,
		getHomeLoginPage : getHomeLoginPage,
		getSignUpForm : getSignUpForm,
		logUserIn : logUserIn,
		signUserUp : signUserUp
	};


}
