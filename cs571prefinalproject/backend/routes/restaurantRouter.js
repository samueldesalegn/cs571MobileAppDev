const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');
// const userController = require('../controllers/userController');


// Create a new restaurant (POST request, requires authorization)
router.post('/', restaurantController.createRestaurant);

// Get restaurant by ID (GET request, public route)
router.get('/:restaurantId', restaurantController.getRestaurantById);

// List all restaurants (GET request, public route)
router.get('/', restaurantController.listRestaurants);

module.exports = router;

