const express = require('express');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const db = require('./db');
const sha256 = require('js-sha256');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended : true}));
app.use(methodOverride('_method'));
app.use(cookieParser());

// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views'); //tells express to look for views file from '/views' folder
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);


//Import routes
require('./routes')(app, db);

const server = app.listen(3000, () => console.log('Listening for ATMsg server'));

//Run clean up actions when server shuts down
server.on('close', () => {
	console.log('Closed express server');
});