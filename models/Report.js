const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  type: String,
  date: String,
  name: String,
  nameWitness: String,
  nameResponder: String,
  descr: String
});

module.exports = mongoose.model('Card', reportSchema);
