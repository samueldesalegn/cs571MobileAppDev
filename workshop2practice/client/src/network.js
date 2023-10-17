import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5001';

export async function addStudent(schoolId, name, email, randomId) {
  try {
    const response = await axios.put(`/schools/${schoolId}/students`, {
      name,
      email,
      randomId,
    });

    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error('Failed to add student');
    }
  } catch (error) {
    console.error('Error adding student:', error);
    return null;
  }
}



// Function to get all students
export async function getAllStudents() {
  try {
    const response = await axios.get('/schools/schoolId/students');

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Failed to fetch students');
    }
  } catch (error) {
    console.error('Error fetching students:', error);
    return [];
  }
}

// Function to delete a student by ID
export async function deleteStudent(id) {
  try {
    const response = await axios.delete(`/schools/schoolId/students/${id}`);

    if (response.status === 204) {
      return true;
    } else {
      throw new Error('Failed to delete student');
    }
  } catch (error) {
    console.error('Error deleting student:', error);
    return false;
  }
}

// Function to create a new school
export async function createSchool(schoolName, address) {
  try {
    const response = await axios.post('/schools', {
      school_name: schoolName,
      address: address,
    });

    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error('Failed to create school');
    }
  } catch (error) {
    console.error('Error creating school:', error);
    return null;
  }
}


