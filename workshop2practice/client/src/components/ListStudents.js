import React, { useContext, useEffect } from 'react';
import GlobalContext from '../context';
import Student from './Student';
import { getAllStudents } from '../network';

function ListStudents({ students, reload, schoolId }) {
  const { state, setState } = useContext(GlobalContext);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this student?');

    if (confirmDelete) {
      const updatedStudents = state.students.filter((student) => student.id !== id);
      setState({ ...state, students: updatedStudents });
      localStorage.setItem('students', JSON.stringify(updatedStudents));
    }
  };

  useEffect(() => {
    // Fetch the initial list of students from the server for a specific school
    getAllStudents(schoolId)
      .then((data) => {
        reload(); // Reload the students list in the parent component
        setState({ ...state, students: data });
        localStorage.setItem('students', JSON.stringify(data));
      })
      .catch((error) => {
        console.error('Error fetching students:', error);
      });
  }, [setState, schoolId, reload]);

  return (
    <div>
      <h2>List of Students</h2>
      {students.map((student) => (
        <Student key={student.id} student={student} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default ListStudents;



