// routes/storeRoutes.js
const express = require('express');
const { addStore, getAllStores, rateStore } = require('../controllers/storeController');
const router = express.Router();

router.post('/add', addStore);
router.get('/', getAllStores);
router.put('/rate', rateStore);

module.exports = router;
