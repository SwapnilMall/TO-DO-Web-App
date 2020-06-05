//Setting up the server using express.js
const express = require('express');
const app = express();

//Sets the port to 8000
const port = 8000;

//Setting up the DataBase
const db = require('./config/mongoose');

//Static Files
app.use(express.static('./assets'));

//Router
app.use('/', require('./routes/index'));

//Setting up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, (err) => {
	if (err) {
		console.log(`Error in running the server : ${err}`); //Interpolation
		return;
	}
	console.log(`Servers up and Running at port: ${port}`);
});
