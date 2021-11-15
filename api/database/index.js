const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sensordb');
mongoose.Promise = global.Promise;

module.exports = mongoose;