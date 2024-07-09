// models/Store.js
const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5 },
  ratings: [{ userId: mongoose.Schema.Types.ObjectId, rating: Number }],
});

const Store = mongoose.model('Store', storeSchema);
module.exports = Store;
