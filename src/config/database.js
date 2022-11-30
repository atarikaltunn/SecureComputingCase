const mongoose = require('mongoose');

module.exports = mongoose.connect(process.env.DB).then(() => {
    console.log('DB connection is successfull');
});