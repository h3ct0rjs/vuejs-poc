//Libraries
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
mongoose
	.connect('mongodb://localhost:27017/mevn-task', { useNewUrlParser: true })
	.then((db) => console.log('DB is connected'))
	.catch((err) => console.log(err));

// Settings
app.set('PORT', process.env.PORT || 5000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/task', require('./routes/task'));
//Static Files
app.use(express.static(__dirname + '/public'));

// Server
app.listen(app.get('PORT'), () => {
	console.log(`Server is Listening in port ${app.get('PORT')}`);
});
