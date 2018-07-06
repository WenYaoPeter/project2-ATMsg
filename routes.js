module.exports = (app, db) => {
	
	const usersController = require('./controller/user')(db);
	const atmsController = require('./controller/atm')(db);

	//routes related to users
	//app.get('/', usersController.get);
	app.get('/', usersController.getHomeLoginPage);
	app.get('/signUpForm', usersController.getSignUpForm);
	app.get('/userHome/find_atm_form', usersController.getFindAtmForm);
	app.get('/userHome/add_atm_form', usersController.getAddAtmForm);
	app.get('/userHome/edit_atm_form', usersController.getEditAtmForm);
	app.get('/userHome/delete_atm_form', usersController.getDeleteAtmForm); //if down vote count >= 5



	app.post('/userHome', usersController.logUserIn);
	app.post('/signUserUp', usersController.signUserUp);

	//routes related to atms
	// app.get('/', atmsController.atmget);

}

