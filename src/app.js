const express = require('express');
const bodyParser = require('body-parser');

const todoRoute = require('./routes/todoRouter')
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');


//configurations
require('dotenv').config()
//DB Connection
const database = require('./config/database');

//Middleware
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//Routes
app.use('/', todoRoute);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`App started on port ${port} at:`, new Date().toLocaleString());
});