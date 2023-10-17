import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ListStudents from './components/ListStudents';
import AddNewStudent from './components/AddNewStudent';

const RouterConfig = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/list-students" element={<ListStudents />} />
    <Route path="/add-new-student" element={<AddNewStudent />} />
  </Routes>
);

export default RouterConfig;
