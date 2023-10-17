// models/restaurant.js
const { ObjectId } = require('mongodb');
const { getDb } = require('../utils/database');

class Restaurant {
  constructor(name, phone, foods = [], notes = []) {
    this.name = name;
    this.phone = phone;
    this.foods = foods;
    this.notes = notes;
  }

  async save() {
    const db = getDb();
    const result = await db.collection('restaurants').insertOne(this);
    return result.insertedId;
  }

  static findById(restaurantId) {
    const db = getDb();
    return db.collection('restaurants').findOne({ _id: new ObjectId(restaurantId) });
  }

  static findByName(name) {
    const db = getDb();
    return db.collection('restaurants').findOne({ name });
  }

  static findAll() {
    const db = getDb();
    return db.collection('restaurants').find({}).toArray();
  }
}

module.exports = Restaurant;
