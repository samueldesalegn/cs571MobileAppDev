import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalContext from './context';
import { getAllStudents } from './network';
import RouterConfig from './router';
import Home from './components/Home'; // Import Home component
import AddNewStudent from './components/AddNewStudent'; // Import AddNewStudent component

function App() {
  const [state, setState] = useState({ students: [] });

  const getStudents = async () => {
    try {
      const data = await getAllStudents();
      setState({ students: data });
      localStorage.setItem('students', JSON.stringify(data));
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  useEffect(() => {
    const storedStudents = localStorage.getItem('students');
    if (storedStudents) {
      setState({ students: JSON.parse(storedStudents) });
    } else {
      getStudents();
    }
  }, []);

  return (
    <div className="App">
      <GlobalContext.Provider value={{ state, setState }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Render Home component */}
            <Route path="/add-new-student" element={<AddNewStudent />} /> {/* Render AddNewStudent component */}
          </Routes>
        </Router>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;




