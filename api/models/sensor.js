const mongoose = require('../database');

const SensorSchema = new mongoose.Schema({
    code:  String,
    method: String,
    header: {
        sensor: String,
        device: String,
    time: {
      collect: Number,
      publish: Number,
    }
  },
  data: [String],
  timestemp: { type: Date, default: Date.now },
    
});

const Sensor = mongoose.model('Sensor', SensorSchema);

module.exports = Sensor;