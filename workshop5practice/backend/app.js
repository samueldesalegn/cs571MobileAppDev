const express = require('express');
const app = express();
const departmentRouter = require('./routes/departmentRouter'); // Import your department router
const { connectToDB } = require('./utils/database');
const userRouter = require('./routes/userRouter');

// Middleware to parse JSON requests
app.use(express.json());

app.use('/users', userRouter);

// Register department routes

app.use('/users', userRouter);
app.use('/departments', departmentRouter);

const host = 'localhost';
const port = process.env.PORT || 5001;

app.use(express.json());

connectToDB()
  .then(() => {
    app.listen(port, host, () => {
      console.log(`Server is running on http://${host}:${port}/departments`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to the database:', err);
  
  });
