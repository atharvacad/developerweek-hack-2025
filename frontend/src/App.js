// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import OwnerRegister from './components/OwnerRegister';
import ListingProperty from './components/ListingProperty';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<OwnerRegister />} />
        <Route path="/list-property" element={<ListingProperty />} />
      </Routes>
    </Router>
  );
}

export default App;