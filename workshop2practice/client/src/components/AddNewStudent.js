import './AddNewStudent.css';
import React, { useState } from 'react';
import { addStudent } from '../network';

export default function AddNewStudent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // You can access schoolId from the route parameters using React Router
    const schoolId = window.location.pathname.split('/')[2];

    // Generate a random student ID (you can adjust this logic as needed)
    const randomId = Math.floor(Math.random() * 1000);

    const result = await addStudent(schoolId, name, email, randomId);

    if (result) {
      setName('');
      setEmail('');
      // Optionally, you can redirect the user to the Home page or perform other actions
    } else {
      console.error('Error adding student.');
    }
  };

  return (
    <div>
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Add Student</button>
        </div>
      </form>
    </div>
  );
}
