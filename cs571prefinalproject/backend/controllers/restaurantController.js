// controllers/restaurantController.js
const Restaurant = require('../models/restaurant');

// Create a new restaurant
exports.createRestaurant = async (req, res) => {
  const { name, phone, foods, notes } = req.body;

  const restaurant = new Restaurant(name, phone, foods, notes);

  try {
    const insertedId = await restaurant.save();
    res.status(201).json({ message: 'Restaurant created successfully', _id: insertedId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get restaurant by ID
exports.getRestaurantById = async (req, res) => {
  const { restaurantId } = req.params;

  try {
    const restaurant = await Restaurant.findById(restaurantId);

    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    res.status(200).json(restaurant);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// List all restaurants
exports.listRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll();

    if (!restaurants || restaurants.length === 0) {
      return res.status(404).json({ message: 'No restaurants found' });
    }

    res.status(200).json(restaurants);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
