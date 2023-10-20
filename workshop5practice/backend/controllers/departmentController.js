const Department = require('../models/department');

exports.createDepartment = async (req, res) => {
  const { name, code, courses } = req.body;

  try {
    const department = new Department(name, code, courses);
    await department.save();

    res.status(201).json({ message: 'Department created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getDepartmentById = async (req, res) => {
  const departmentId = req.params.id;

  try {
    const department = await Department.findById(departmentId);

    if (!department) {
      return res.status(404).json({ message: 'Department not found' });
    }

    res.status(200).json(department);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.findAll();
    res.status(200).json(departments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


exports.getCoursesForDepartment = async (req, res) => {
  const departmentId = req.params.id;

  try {
    const department = await Department.findById(departmentId);

    if (!department) {
      return res.status(404).json({ message: 'Department not found' });
    }

    res.status(200).json(department.courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


exports.addCourseToDepartment = async (req, res) => {
  const departmentId = req.params.id;
  const { title, code, faculty, rating, reviews } = req.body;

  try {
    const newCourse = await Department.addCourse(departmentId, {
      title,
      code,
      faculty,
      rating,
      reviews,
    });

    if (newCourse) {
      res.status(200).json({ message: 'Course added to department successfully', course: newCourse });
    } else {
      res.status(500).json({ message: 'Failed to add course' });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update a course in a department
exports.updateCourseInDepartment = async (req, res) => {
  const departmentId = req.params.id;
  const courseId = req.params.courseId;
  const updatedCourseData = req.body;

  try {
    const updateResult = await Department.updateCourse(departmentId, courseId, updatedCourseData);

    if (updateResult) {
      res.status(200).json({ message: 'Course updated successfully' });
    } else if (updateResult === false) {
      res.status(500).json({ message: 'Failed to update course' });
    } else {
      res.status(404).json({ message: 'Course or department not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};







