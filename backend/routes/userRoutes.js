// routes/userRoutes.js
const express = require('express');
const { registerUser, loginUser, changePassword, getAllUsers } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/change-password', changePassword);
router.get('/', getAllUsers);

module.exports = router;
