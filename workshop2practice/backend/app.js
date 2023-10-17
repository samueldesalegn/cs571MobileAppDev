const express = require('express');
const cors = require('cors');
const { connectToDB } = require('./utils/database');
const schoolRouter = require('./routes/schoolRouter');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectToDB()
    .then(() => {
			// Use school router
			app.use('/schools', schoolRouter);

        // Start the server
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}/schools`);
        });
    })
    .catch((err) => {
        console.error('Failed to connect to the database:', err);
    });
