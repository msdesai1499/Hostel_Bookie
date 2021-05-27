const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
var cookieParser = require('cookie-parser')
app.use(cookieParser());
app.use(cors());
app.use(express.static('./uploads/'))


dotenv.config({ path: './config.env' });
require('./db/conn');
// const User = require('./model/userSchema');

app.use(express.json());


app.use(require('./router/auth'));
const PORT = process.env.PORT;


// app.get('/', (req, res) => {
// 	res.send(`Hello World from app.js`);

// });

app.get('/about', (req, res) => {
	res.send(`Hello World This is about us page`);
});

// app.get('/contact', (req, res) => {
// 	res.send(`Hello World This is contact page`);
// });
// app.get('/profile', (req, res) => {
// 	res.send(`Hello World This is profile page`);
// });
app.get('/login', (req, res) => {
	res.send(`Hello World This is Login page`);
});
// app.get('/register', (req, res) => {
// 	res.send(`Hello World This is register page`);
// });


app.listen(PORT, () => {
	console.log(`Server is running at port no ${PORT}`);
})
console.log('Welcome to CodeEarth');