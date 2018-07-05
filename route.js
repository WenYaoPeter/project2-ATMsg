module.exports = (app, db) => {
	
	const usersController = require('./controlller/user')(db);
	const atmsController = require('./controller/atm')(db);

	//routes related to users
	app.get('/', usersController.getHomepage);


	//routes related to atms
}

