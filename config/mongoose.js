const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo_list');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connecting to db'));

db.once('open', () => {
	console.log('sucessuful to connect to db');
});
