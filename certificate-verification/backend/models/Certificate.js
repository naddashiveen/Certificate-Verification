const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  name: String,
  course: String,
  issueDate: Date,
  certificateID: String
});

module.exports = mongoose.model('Certificate', certificateSchema);
