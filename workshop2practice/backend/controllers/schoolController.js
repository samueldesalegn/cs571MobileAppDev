const School = require('../models/schools');

// Controller for creating a new school
exports.createSchool = async (req, res) => {
    try {
        const { school_name, address } = req.body;
        const school = new School(school_name, address);

        const savedSchool = await school.save();

        res.status(201).json(savedSchool);
    } catch (error) {
        console.error('Error creating school:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Controller for adding a student to a school
exports.addStudent = async (req, res) => {
    try {
        const { schoolId } = req.params;
        const { name, email } = req.body;

        const student = await School.addStudent(schoolId, name, email);

        res.status(201).json(student);
    } catch (error) {
        console.error('Error adding student to school:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Controller for retrieving students of a school by schoolId
exports.getStudents = async (req, res) => {
    try {
        const { schoolId } = req.params;

        const students = await School.getStudents(schoolId);

        res.status(200).json(students);
    } catch (error) {
        console.error('Error getting students:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Controller for retrieving a school by ID
exports.getSchoolById = async (req, res) => {
    try {
        const { schoolId } = req.params;

        const school = await School.findById(schoolId);

        if (!school) {
            return res.status(404).json({ error: 'School not found' });
        }

        res.status(200).json(school);
    } catch (error) {
        console.error('Error retrieving school by ID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


