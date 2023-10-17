const { MongoClient } = require('mongodb');

// Update the MongoDB connection URI to match your local setup
const uri = 'mongodb://127.0.0.1:27017/mynewdb';

const client = new MongoClient(uri);

let db;

async function connectToDB() {
    try {
        await client.connect();
        db = client.db();
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        throw err;
    }
}

function getDb() {
    if (db) {
        return db;
    } else {
        throw new Error('No Database Found');
    }
}

module.exports = { connectToDB, getDb };
