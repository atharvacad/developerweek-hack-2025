// src/components/ElectronicsListing.jsx
import React from 'react';
import { useVisitor } from '../hooks/useVisitorData';
import '../css/ElectronicsListing.css';

function ElectronicsListing() {
  const { data } = useVisitor();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (data) {
      console.log('Visitor ID on form submission:', data.visitorId);

      const formData = {
        visitorID: data.visitorId,
        Electronics_Title: event.target.title.value,
        Type: event.target.type.value,
        Brand: event.target.brand.value,
        Model: event.target.model.value,
        Year: event.target.year.value,
        Price: event.target.price.value,
        Condition: event.target.condition.value,
        Contact_Name: event.target.contactName.value,
        Phone_Number: event.target.phoneNumber.value,
        Email: event.target.email.value,
      };

      try {
        const response = await fetch('http://localhost:3000/api/insert-data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ type: 'electronics', data: formData }),
        });

        const result = await response.json();
        console.log('Insert Result:', result);
        if (response.status === 200) {
          alert('Data inserted successfully');
        } else {
          alert('Failed to insert data');
        }
      } catch (error) {
        console.error('Error inserting data:', error);
      }
    }
    // Handle form submission logic here
  };

  return (
    <div className="listing-container">
      <form className="listing-form" onSubmit={handleSubmit}>
        <h2>List Your Electronics for Sale</h2>
        
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" placeholder="e.g., Apple iPhone 12" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="type">Type:</label>
          <input type="text" id="type" name="type" placeholder="e.g., Mobile, Laptop" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="brand">Brand:</label>
          <input type="text" id="brand" name="brand" placeholder="e.g., Apple, Samsung" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="model">Model:</label>
          <input type="text" id="model" name="model" placeholder="e.g., iPhone 12, Galaxy S21" required />
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
          <label htmlFor="condition">Condition:</label>
          <input type="text" id="condition" name="condition" placeholder="e.g., Excellent, Good, Fair" required />
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
        
        <button type="submit">List Electronics</button>
      </form>
    </div>
  );
}

export default ElectronicsListing;