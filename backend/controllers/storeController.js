// controllers/storeController.js
const Store = require('../models/Store');

const addStore = async (req, res) => {
  const { name, email, address, rating } = req.body;
  const newStore = new Store({ name, email, address, rating });
  await newStore.save();
  res.status(201).json(newStore);
};

const getAllStores = async (req, res) => {
  const stores = await Store.find();
  res.json(stores);
};

const rateStore = async (req, res) => {
  const { storeId, userId, rating } = req.body;
  const store = await Store.findById(storeId);
  store.ratings.push({ userId, rating });
  store.rating = store.ratings.reduce((acc, { rating }) => acc + rating, 0) / store.ratings.length;
  await store.save();
  res.json(store);
};

module.exports = { addStore, getAllStores, rateStore };
