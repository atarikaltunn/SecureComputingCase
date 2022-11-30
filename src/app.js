const express = require('express');
const bodyParser = require('body-parser');

const todoRoute = require('./routes/todoRouter')
const app = express();

//configurations
require('dotenv').config()
//DB Connection
const database = require('./config/database');

//Middleware
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//Routes
app.use('/', todoRoute);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`App started on port ${port} at:`, new Date().toLocaleString());
});