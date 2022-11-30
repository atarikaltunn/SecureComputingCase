const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost/my_database').then(() => {
    console.log('DB connection is successfull');
});