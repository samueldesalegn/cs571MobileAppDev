const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 8000;
const host = 'localhost'; // Update with your host

app.use(express.json());

const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);
let db;

async function connectToDB() {
  try {
    await client.connect();
    db = client.db('yourDatabaseName'); // Replace with your database name
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    throw err;
  }
}

app.post('/schools', async (req, res) => {
  try {
    const { name, teachers, courses } = req.body;
    const collection = db.collection('schools');
    const school = { name, teachers, courses };

    const result = await collection.insertOne(school);
		
    if (result.insertedId) {
      console.log('School created successfully.');
      res.status(201).json(result);
    } else {
      console.error('Failed to create school.');
      res.status(400).json({ error: 'Failed to create school.' });
    }
  } catch (error) {
    console.error('Error creating school:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.put('/schools/:schoolId/teachers', async (req, res) => {
  try {
    const { name } = req.body;
    const { schoolId } = req.params;
    const collection = db.collection('schools');
    const teacher = { _id: new ObjectId(), name };

    const result = await collection.updateOne(
      { _id: new ObjectId(schoolId) },
      { $push: { teachers: teacher } }
    );

    // console.log(result)

    if (result.modifiedCount === 1) {
      console.log('Teacher added successfully.');
      res.status(201).json(result);
    } else {
      console.error('Failed to add teacher.');
      res.status(400).json({ error: 'Failed to add teacher.' });
    }
  } catch (error) {
    console.error('Error adding teacher:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/schools/:schoolId/courses', async (req, res) => {
  try {
    const { title } = req.body;
    const { schoolId } = req.params;
    const collection = db.collection('schools');
    const course = { _id: new ObjectId(), title, students: [] };

    const result = await collection.updateOne(
      { _id: new ObjectId(schoolId) },
      { $push: { courses: course } }
    );

    if (result.modifiedCount === 1) {
      console.log('Course added successfully.');
      res.status(201).json(course);
    } else {
      console.error('Failed to add course.');
      res.status(400).json({ error: 'Failed to add course.' });
    }
  } catch (error) {
    console.error('Error adding course:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.patch('/schools/:schoolId/courses/:courseId', async (req, res) => {
  try {
    const { schoolId, courseId } = req.params;
    const { title } = req.body;
    const collection = db.collection('schools');

    const result = await collection.updateOne(
      { _id: new ObjectId(schoolId), 'courses._id': new ObjectId(courseId) },
      { $set: { 'courses.$.title': title } }
    );

    if (result.modifiedCount === 1) {
      console.log('Course updated successfully.');
      res.status(200).json({ message: 'Course updated successfully' });
    } else {
      console.error('Failed to update course.');
      res.status(400).json({ error: 'Failed to update course.' });
    }
  } catch (error) {
    console.error('Error updating course:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.patch('/schools/:schoolId/teachers/:teacherId', async (req, res) => {
  try {
    const { schoolId, teacherId } = req.params;
    const { name } = req.body;
    const collection = db.collection('schools');

    const result = await collection.updateOne(
      { _id: new ObjectId(schoolId), 'teachers._id': new ObjectId(teacherId) },
      { $set: { 'teachers.$.name': name } }
    );

    if (result.modifiedCount === 1) {
      console.log('Teacher updated successfully.');
      res.status(200).json({ message: 'Teacher updated successfully' });
    } else {
      console.error('Failed to update teacher.');
      res.status(400).json({ error: 'Failed to update teacher.' });
    }
  } catch (error) {
    console.error('Error updating teacher:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/schools/:schoolId/teachers/:teacherId', async (req, res) => {
  try {
    const { schoolId, teacherId } = req.params;
    const collection = db.collection('schools');

    const result = await collection.updateOne(
      { _id: new ObjectId(schoolId) },
      { $pull: { teachers: { _id: new ObjectId(teacherId) } } }
    );

    if (result.modifiedCount === 1) {
      console.log('Teacher deleted successfully.');
      res.status(200).json({ message: 'Teacher deleted successfully' });
    } else {
      console.error('Failed to delete teacher.');
      res.status(400).json({ error: 'Failed to delete teacher.' });
    }
  } catch (error) {
    console.error('Error deleting teacher:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/schools/:schoolId/courses/:courseId/students', async (req, res) => {
  try {
    const { schoolId, courseId } = req.params;
    const { name } = req.body;
    const collection = db.collection('schools');
    const student = { _id: new ObjectId(), name };

    const result = await collection.updateOne(
      { _id: new ObjectId(schoolId), 'courses._id': new ObjectId(courseId) },
      { $push: { 'courses.$.students': student } }
    );

    if (result.modifiedCount === 1) {
      console.log('Student added to the course successfully.');
      res.status(201).json(student);
    } else {
      console.error('Failed to add student to the course.');
      res.status(400).json({ error: 'Failed to add student to the course.' });
    }
  } catch (error) {
    console.error('Error adding student to the course:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

async function startServer() {
  try {
    await connectToDB();
    console.log('DB connected!');

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on http://${host}:${port}/schools`);
    });
  } catch (err) {
    console.error('Failed to connect to the database:', err);
  }
}

startServer();








