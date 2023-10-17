import React from 'react';
import axios from 'axios';

const Student = ({ student, onDelete }) => {
  const { name, email, id } = student;

  const handleDelete = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this student?');

    if (confirmDelete) {
      axios
        .delete(`/students/${id}`)
        .then(() => {
          onDelete(id);
        })
        .catch((error) => {
          console.error('Error deleting student:', error);
        });
    }
  };

  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Student;



