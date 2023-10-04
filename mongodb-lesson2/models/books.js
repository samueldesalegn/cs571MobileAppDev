const { getDb } = require('../utils/database');
const { ObjectId } = require('mongodb');

class Books {
  constructor(title, ISBN, publishedDate, author) {
    this.title = title;
    this.ISBN = ISBN;
    this.publishedDate = publishedDate;
    this.author = author;
  }

  async save() {
    const db = getDb();
    const collection = db.collection('books');
    const result = await collection.insertOne(this);
    return result;
  }

  async update(id) {
    const db = getDb();
    const collection = db.collection('books');
    const result = await collection.updateOne(
        { _id: new ObjectId(id) },
        {
            $set: {
                title: this.title,
                ISBN: this.ISBN, // Fixed typo here
                publishedDate: this.publishedDate, // Fixed typo here
                author: this.author,
            },
        }
    );
    return result;
}

  static async getAll() {
    const db = getDb();
    const collection = db.collection('books');
    const books = await collection.find().toArray();
    return books;
  }

  static async findById(id) {
    const db = getDb();
    const collection = db.collection('books');
    const book = await collection.findOne({ _id: new ObjectId(id) });
    return book;
  }

  static async deleteById(id) {
    const db = getDb();
    const collection = db.collection('books');
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    return result;
  }
}

module.exports = Books;
