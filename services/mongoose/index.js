
const mongoose = require('mongoose');

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error: ' + err)
    process.exit(-1)
})

module.exports = mongoose;
