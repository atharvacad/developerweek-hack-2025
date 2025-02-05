// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Login</Link>
        </li>
        <li className="navbar-item">
          <Link to="/register">Owner Register</Link>
        </li>
        <li className="navbar-item">
          <Link to="/list-property">List Property</Link>
        </li>
        <li className="navbar-item">
          <Link to="/list-car">List Car</Link>
        </li>
        <li className="navbar-item">
          <Link to="/list-electronics">List Electronics</Link>
        </li>
        <li className="navbar-item">
          <Link to="/view-rentals">View Rentals</Link>
        </li>
        <li className="navbar-item">
          <Link to="/view-cars">View Cars</Link>
        </li>
        <li className="navbar-item">
          <Link to="/view-electronics">View Electronics</Link>
        </li>
        <li className="navbar-item">
          <Link to="/admin-data-view">Admin Data View</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;