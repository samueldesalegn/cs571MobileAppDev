const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
// const uri = "mongodb+srv://samuel:samuel@cluster0.xk1m88j.mongodb.net/"
const client = new MongoClient(uri);

let db;

async function connectToDB() {
    try {
        await client.connect();
        db = client.db('mongocli');
        // db = client.db('cs571-mongo-practice');
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

