// src/components/Login.js
import React from 'react';
import '../css/Login.css';

function Login() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Rental Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;