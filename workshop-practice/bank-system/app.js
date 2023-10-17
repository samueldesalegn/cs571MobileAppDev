const { MongoClient, ObjectId } = require('mongodb');
const express = require('express');

const app = express();

// Configuration
const host = 'localhost';
const port = process.env.PORT || 5000;

let db;

const uri = 'mongodb://127.0.0.1:27017';
async function connectToDB() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    db = client.db('mongocli');
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    throw err;
  }
}

// Middleware
app.use(express.json());

// 1. Insert a new bank
app.post('/banks', async (req, res) => {
  try {
    const bankData = req.body;
    const collection = db.collection('banks');
    const result = await collection.insertOne(bankData);
    res.status(201).json(result);
  } catch (error) {
    handleError(res, error);
  }
});

// 2. Query all banks, and provide the way to sort all banks by names
app.get('/banks', async (req, res) => {
  try {
    const collection = db.collection('banks');
    const banks = await collection.find().sort({ name: 1 }).toArray();
    res.json(banks);
  } catch (error) {
    handleError(res, error);
  }
});

// 3. Insert a new user
app.put('/banks/:bankId/users', async (req, res) => {
  try {
    const bankId = req.params.bankId;
    const userData = req.body;
    const collection = db.collection('banks');
    const result = await collection.findOneAndUpdate(
      { _id: new ObjectId(bankId) },
      { $push: { users: userData } },
      { returnOriginal: false }
    );

    res.json(result.value);
  } catch (error) {
    handleError(res, error);
  }
});

app.get('/banks/:bankId/users/:userId', async (req, res) => {
  try {
    const bankId = req.params.bankId;
    const userId = req.params.userId;

    const collection = db.collection('banks');

    const bank = await collection.findOne({ _id: new ObjectId(bankId), 'users._id': userId });

    if (!bank) {
      res.status(404).json({ message: 'Bank not found' });
      return;
    }

    const user = bank.users.find((user) => user._id === userId);

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.status(200).json(user);
  } catch (error) {
    handleError(res, error);
  }
});


// Error handler
function handleError(res, error) {
  console.error('Error:', error);
  res.status(500).json({ message: 'Internal Server Error' });
}

// Start the server
connectToDB()
  .then(() => {
    console.log('DB connected!');
    app.listen(port, host, () => {
      console.log(`Server is running on http://${host}:${port}/banks`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to the database:', err);
  });




