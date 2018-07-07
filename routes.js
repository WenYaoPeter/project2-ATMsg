module.exports = (app, db) => {
	
	const usersController = require('./controller/user')(db);
	const atmsController = require('./controller/atm')(db);

	//routes related to users
	//app.get('/', usersController.get);
	app.get('/', usersController.getHomeLoginPage);
	app.get('/signUpForm', usersController.getSignUpForm);
	
	app.post('/userHome', usersController.logUserIn);
	app.post('/signUserUp', usersController.signUserUp);


	//routes related to atms
	app.get('/userHome/find_atm_form', atmsController.getFindAtmForm);
	app.post('/list_of_Atms', atmsController.listAtms);
	app.get('/userHome/add_atm_form', atmsController.getAddAtmForm);
	app.post('/add_new_Atm', atmsController.addNewAtm);
	app.get('/edit_atm_form/:id', atmsController.getEditAtmForm);

	app.get('/userHome/delete_atm_form', atmsController.getDeleteAtmForm); //if down vote count >= 5


}

