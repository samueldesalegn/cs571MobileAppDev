const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(uri);
let db;

async function connectToDB() {
  try {
    await client.connect();
    db = client.db('dbms_project'); // Replace with your actual db name
    console.log('Connected to the db');
  } catch (error) {
    console.error(`MongoDB connection error: ${error}`);
    process.exit(1);
  }
}

function getDb() {
  if (db) {
    return db;
  } else {
    console.error('The db is not connected yet. Make sure to call connectToDB before using getDb.');
    return null;
  }
}

module.exports = { connectToDB,  getDb };

