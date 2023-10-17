const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Register a new user (POST request)
router.post('/signup', userController.registerUser);

// User login (POST request)
router.post('/login', userController.loginUser);

// Protected route: Update user profile (PUT request)
router.put('/update-profile', userController.authMiddleware, userController.updateProfile);

// Add this route to userRouter.js
// Get all users
router.get('/users', userController.getAllUsers);


module.exports = router;
