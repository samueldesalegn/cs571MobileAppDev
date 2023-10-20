const express = require('express');
const UserController = require('../controllers/userController');
const router = express.Router();

// User registration
router.post('/register', UserController.registerUser);

// User login
router.post('/login', UserController.loginUser);

module.exports = router;
