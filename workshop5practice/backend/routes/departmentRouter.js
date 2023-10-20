const express = require('express');
const DepartmentController = require('../controllers/departmentController');
const { authMiddleware } = require('../controllers/userController'); // Import your authMiddleware
const router = express.Router();

// Apply the authentication middleware to restrict access to department routes
router.use(authMiddleware);

router.post('/', DepartmentController.createDepartment);
router.get('/:id', DepartmentController.getDepartmentById);
router.get('/', DepartmentController.getAllDepartments);
router.put('/:id/courses', DepartmentController.addCourseToDepartment);
router.get('/:id/courses', DepartmentController.getCoursesForDepartment);
router.patch('/departments/:id/courses/:courseId',  DepartmentController.updateCourseInDepartment);


module.exports = router;
