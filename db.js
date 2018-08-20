const pg = require('pg');
const url = require('url');

if (process.env.DATABASE_URL) {

	const params = url.parse(process.env.DATABASE_URL);
	const auth = params.auth.split(':');

	const config = {
		user: auth[0],
		password: auth[1],
		host: params.hostname,
		port: params.port,
		database: params.pathname.split('/')[1],
		ssl: true
	};

} else {

	const config = {
		user: 'wenyaolee',
		host: '127.0.0.1',
		database: 'ATMsg',
		port: 5432
	};

}

const poolObj = new pg.Pool(config);

poolObj.on('error', function(err) {
	console.log('Error connecting to ATMsg Database', err.message, err.stack);
});

const userModel = require('./models/user');
const atmModel = require('./models/atm');

const userObj = userModel(poolObj);
const atmObj = atmModel(poolObj);

module.exports = {
	pool : poolObj,
	user : userObj,
	atm : atmObj
}