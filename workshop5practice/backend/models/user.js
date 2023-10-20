const { ObjectId } = require('mongodb');
const { getDb } = require('../utils/database');

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  async save() {
    const db = getDb();
    const existingUser = await db.collection('users').findOne({ email: this.email });

    if (existingUser) {
      throw new Error('Email already exists. Please use a different email address.');
    }

    return db.collection('users').insertOne(this);
  }

  static findByEmail(email) {
    const db = getDb();
    return db.collection('users').findOne({ email });
  }

  static findById(userId) {
    const db = getDb();
    return db.collection('users').findOne({ _id: new ObjectId(userId) });
  }
}

module.exports = User;
