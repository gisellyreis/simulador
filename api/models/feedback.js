const mongoose = require('../database');

const FeedbackSchema = new mongoose.Schema({
  feedback:  String,
  timestemp: { type: Date, default: Date.now },  
});

const Feedback = mongoose.model('Feedback', FeedbackSchema);

module.exports = Feedback;