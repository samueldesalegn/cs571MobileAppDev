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

  static addFood(restaurantId, newFood) {
    const db = getDb();
    newFood._id = new ObjectId();
    return db.collection('restaurants').updateOne(
      { _id: new ObjectId(restaurantId) },
      { $push: { foods: newFood } }
    );
  }

  static addNote(restaurantId, newNote) {
    const db = getDb();
    newNote._id = new ObjectId();
    return db.collection('restaurants').updateOne(
      { _id: new ObjectId(restaurantId) },
      { $push: { foods: newNote } }
    );
  }

  static updateFood(restaurantId, foodId, updatedFood) {
    const db = getDb();
    return db.collection('restaurants').updateOne(
      { _id: new ObjectId(restaurantId), 'foods._id': new ObjectId(foodId) },
      {
        $set: {
          'foods.$.name': updatedFood.name,
          'foods.$.origin': updatedFood.origin,
          'foods.$.price': updatedFood.price,
          'foods.$.date': updatedFood.date,
          'foods.$.image': updatedFood.image,
        },
      }
    );
  }
  static updateNote(restaurantId, noteId, updatedNote) {
    const db = getDb();
    return db.collection('restaurants').updateOne(
      { _id: new ObjectId(restaurantId), 'notes._id': new ObjectId(noteId) },
      {
        $set: {
          'notes.$': updatedNote         
        },
      }
    );
  }
}

module.exports = Restaurant;
