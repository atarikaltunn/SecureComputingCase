const express = require('express');
const bodyParser = require('body-parser');

//configurations
require('dotenv').config()
const database = require('./config/database');

// const userRoute = require('./routes/userRoute');

const app = express();

//DB Connection


//Middleware
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//Routes
// app.use('/', pageRoute);

const port = 3000;
app.listen(port, () => {
    console.log(`App started on port ${port} at: `, new Date().toLocaleString());
});