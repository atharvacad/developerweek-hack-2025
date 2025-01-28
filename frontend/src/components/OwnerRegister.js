// src/components/OwnerRegister.js
import React from 'react';
import '../css/OwnerRegister.css';

function OwnerRegister() {
  return (
    <div className="register-container">
      <form className="register-form">
        <h2>Owner Registration</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default OwnerRegister;