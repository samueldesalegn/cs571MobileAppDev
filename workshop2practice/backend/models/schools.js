const { ObjectId } = require('mongodb');
const { getDb } = require('../utils/database');

class School {
    constructor(name, address) {
        this.school_name = name;
        this.address = address;
        this.students = [];
    }

    async save() {
        try {
            const db = getDb();
            const collection = db.collection('schools');

            
            const result = await collection.insertOne(this);
						console.log(result);

            if (result.insertedId) {
                return this; 
            } else {
                throw new Error('Failed to save school.');
            }
        } catch (error) {
            throw error;
        }
    }

    static async addStudent(schoolId, name, email) {
        try {
            const db = getDb();
            const collection = db.collection('schools');

            const student = {
                name,
                email,
                id: new ObjectId(),
            };

            // Update the school document to add the student
            const result = await collection.updateOne(
                { _id: new ObjectId(schoolId) },
                { $push: { students: student } }
            );

            if (result.modifiedCount === 1) {
                return student;
            } else {
                throw new Error('Failed to add student to the school.');
            }
        } catch (error) {
            throw error;
        }
    }

    static async getStudents(schoolId) {
        try {
            const db = getDb();
            const collection = db.collection('schools');

            const school = await collection.findOne({ _id: new ObjectId(schoolId) });

            if (school) {
                return school.students;
            } else {
                throw new Error('School not found.');
            }
        } catch (error) {
            throw error;
        }
    }

    static findById(schoolId) {
        const db = getDb();
        const collection = db.collection('schools');

        return collection.findOne({ _id: new ObjectId(schoolId) });
    }
}

module.exports = School;
