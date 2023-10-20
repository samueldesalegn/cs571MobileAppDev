const { ObjectId } = require('mongodb');
const { getDb } = require('../utils/database');

class Department {
  constructor(name, code, courses) {
    this.name = name;
    this.code = code;
    this.courses = courses || [];
  }

  async save() {
    const db = getDb();
    return db.collection('departments').insertOne(this);
  }

  static findById(departmentId) {
    const db = getDb();
    return db.collection('departments').findOne({ _id: new ObjectId(departmentId) });
  }

  static findAll() {
    const db = getDb();
    return db.collection('departments').find({}).toArray();
  }

	static async addCourse(departmentId, courseData) {
		const db = getDb();
		const departmentCollection = db.collection('departments');
	
		try {
			const department = await departmentCollection.findOne({ _id: new ObjectId(departmentId) });
	
			if (!department) {
				return null; // Return null if department not found
			}
	
			// Generate a new ObjectId for the course
			const courseId = new ObjectId();
	
			// Create a new course with the provided data including the _id field
			const newCourse = { _id: courseId, ...courseData };
			department.courses.push(newCourse);
	
			const result = await departmentCollection.updateOne(
				{ _id: new ObjectId(departmentId) },
				{ $set: department }
			);
	
			if (result.modifiedCount === 1) {
				return newCourse; // Return the new course on success
			} else {
				return null; // Return null on failure
			}
		} catch (error) {
			console.error(error);
			return null; // Return null on error
		}
	}
	

	static async updateCourse(departmentId, courseId, updatedCourseData) {
		const client = new MongoClient(DB_URL, { useUnifiedTopology: true });
	
		try {
			await client.connect();
	
			const db = client.db(); // Get the default database
			const departmentCollection = db.collection('departments');
	
			const filter = {
				_id: new ObjectId(departmentId),
				'courses._id': new ObjectId(courseId), // Match the specific course by _id
			};
	
			const update = {
				$set: {
					'courses.$': updatedCourseData, // Update the matched course with new data
				},
			};
	
			const result = await departmentCollection.updateOne(filter, update);
	
			if (result.modifiedCount === 1) {
				return true; // Update successful
			} else {
				return false; // Update failed
			}
		} catch (error) {
			console.error(error);
			return false; // Error occurred
		} 
	}
}

module.exports = Department;
