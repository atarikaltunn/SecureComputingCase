const mongoose = require('mongoose');
const databaseURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/todo'
module.exports = mongoose.connect(databaseURI).then(() => {
    // console.log('DB connection is successfull');
});