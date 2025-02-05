// src/components/CarListing.jsx
import React from 'react';
import { useVisitor } from '../hooks/useVisitorData';
import '../css/CarListing.css';

function CarListing() {
  const { data } = useVisitor();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (data) {
      console.log('Visitor ID on form submission:', data.visitorId);
    }

    const formData = new FormData(event.target);
    const carData = {
      visitorID: data ? data.visitorId : null,
      Car_Title: formData.get('title'),
      Make: formData.get('make'),
      Model: formData.get('model'),
      Year: formData.get('year'),
      Price: formData.get('price'),
      Mileage: formData.get('mileage'),
      Condition: formData.get('condition'),
      Photos: formData.get('photos'),
      Contact_Name: formData.get('contactName'),
      Phone_Number: formData.get('phoneNumber'),
      Email: formData.get('email'),
    };

    try {
      const response = await fetch('http://localhost:3000/api/insert-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type: 'car', data: carData }),
      });

      const result = await response.json();
      console.log('Success:', result);
      if (response.status === 200) {
        alert('Data inserted successfully');
      } else {
        alert('Failed to insert data');
      }
      // Optionally, redirect or show a success message
    } catch (error) {
      console.error('Error:', error);
      // Optionally, show an error message
    }
  };

  return (
    <div className="listing-container">
      <form className="listing-form" onSubmit={handleSubmit}>
        <h2>List Your Car for Sale</h2>
        
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" placeholder="e.g., 2020 Toyota Corolla" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="make">Make:</label>
          <input type="text" id="make" name="make" placeholder="e.g., Toyota" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="model">Model:</label>
          <input type="text" id="model" name="model" placeholder="e.g., Corolla" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="year">Year:</label>
          <input type="number" id="year" name="year" placeholder="e.g., 2020" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" placeholder="Enter price in INR" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="mileage">Mileage:</label>
          <input type="number" id="mileage" name="mileage" placeholder="e.g., 50000" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="condition">Condition:</label>
          <input type="text" id="condition" name="condition" placeholder="e.g., Excellent, Good, Fair" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="photos">Photos:</label>
          <input type="file" id="photos" name="photos" multiple required />
        </div>
        
        <div className="form-group">
          <label htmlFor="contactName">Contact Name:</label>
          <input type="text" id="contactName" name="contactName" placeholder="Your full name" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="e.g., 9876543210" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="you@example.com" required />
        </div>
        
        <button type="submit">List Car</button>
      </form>
    </div>
  );
}

export default CarListing;