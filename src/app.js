const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');

const todoRoute = require('./routes/todoRouter');
const swaggerDocument = require('../swagger.json');

const app = express();

//configurations
require('dotenv').config();
//DB Connection
require('./config/database');

//Middleware
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//Routes
app.use('/', todoRoute);
//Docs Routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
    console.log(`App started on port ${port} at:`, new Date().toLocaleString());
});

module.exports = server;