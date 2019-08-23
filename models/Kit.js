const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  date: String,
  name: String,
  type: String,
  notes: String,
  inventory: [
    {
      _idItem: String,
      name: String,
      type: String,
      itemLastUsed: String,
      itemBBF: String,
      size: String,
      amount: int
    }
  ]
});

module.exports = mongoose.model('Card', cardSchema);
