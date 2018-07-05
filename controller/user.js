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
		//response.render(userHomePage);
	}

	const logUserIn = (request, response) => {

		let user_name = request.body['inputUserName'];
		let user_hashedPw = sha256(request.body['inputPassword']);
		console.log("user_hashedPw: " +user_hashedPw);

		//check with database if user_name && pw is the same as db username
		//if same, log user in - and render UserHomePage
		//else prompt user to re log in

		const SALT = "salt is the secret word";
		let currentSessionCookie = sha256(user_name + 'logged_id' + SALT);
		console.log("seesion cookie: " +currentSessionCookie);
		response.cookie('logged_id', currentSessionCookie);
	}

	const getFindAtmForm = (request, response) => {
		response.render('atmSearchForm');
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
		// get : get,
		getHomeLoginPage : getHomeLoginPage,
		getSignUpForm : getSignUpForm,
		logUserIn : logUserIn,
		signUserUp : signUserUp,
		getFindAtmForm : getFindAtmForm,
		getAddAtmForm : getAddAtmForm,
		getEditAtmForm : getEditAtmForm,
		getDeleteAtmForm : getDeleteAtmForm
	};


}
