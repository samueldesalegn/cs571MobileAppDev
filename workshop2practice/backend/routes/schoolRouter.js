const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController');

// Create a new school
router.post('/', schoolController.createSchool);

// Add a student to a school by schoolId
router.put('/:schoolId/students', schoolController.addStudent);

// Get students of a school by schoolId
router.get('/:schoolId/students', schoolController.getStudents);

// Get a school by ID
router.get('/:schoolId', schoolController.getSchoolById);

module.exports = router;
