const { ObjectId } = require('mongodb');
const { getDb } = require('../utils/database');


const db = getDb()

class School {
  constructor() {
    this.schoolCollection = null;
  }

  async addTeacher(teacherName) {
    try {
      const teacher = { _id: new ObjectId(), name: teacherName };
      const result = await this.schoolCollection.updateOne({}, { $push: { teachers: teacher } });

      if (result.modifiedCount === 1) {
        console.log('Teacher added successfully.');
        return teacher;
      } else {
        console.error('Failed to add teacher.');
        return null;
      }
    } catch (error) {
      console.error('Error adding teacher:', error);
      return null;
    }
  }

  // Implement other CRUD methods for updating and deleting teachers, students, etc.
}

module.exports = School;

