const express = require('express');
const bookRouter = require('./routes/bookRouter'); 
const { connectToDB } = require('./utils/database');
const cors = require('cors');

// Instantiation
const app = express();

// Configuration
const host = 'localhost'; 
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Middlewares
app.use('/books', bookRouter);

// Startup
connectToDB()
    .then(() => {
        console.log("DB connected!");
        app.listen(port, host, () => {
            console.log(`Server is running on http://${host}:${port}/books`);
        });
    })
    .catch((err) => {
        console.error('Failed to connect to the database:', err);
    });


 
