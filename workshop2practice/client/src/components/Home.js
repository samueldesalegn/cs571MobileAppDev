import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ListStudents from './ListStudents';
import { getAllStudents } from '../network';


export default function Home() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  const navigateToAddStudent = () => {
    navigate('/add-new-student');
  };

  const getStudents = async () => {
    try {
      const data = await getAllStudents();
      setStudents(data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div>
      <button onClick={navigateToAddStudent}>Add New Student</button>
      <ListStudents students={students} reload={getStudents} />
    </div>
  );
}
