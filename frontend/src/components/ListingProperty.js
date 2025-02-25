// src/components/ListingProperty.jsx
import React from 'react';
import { useVisitor } from '../hooks/useVisitorData';
import '../css/ListingProperty.css';

function ListingProperty() {
  const { data } = useVisitor();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (data) {
      console.log('Visitor ID on form submission:', data.visitorId);
    }

    const formData = new FormData(event.target);
    const propertyData = {
      visitorID: data ? data.visitorId : null,
      Property_Title: formData.get('title'),
      Property_Type: formData.get('propertyType'),
      Location: formData.get('location'),
      Price: formData.get('price'),
      Number_of_Bedrooms: formData.get('bedrooms'),
      Number_of_Bathrooms: formData.get('bathrooms'),
      Amenities: formData.get('amenities'),
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
        body: JSON.stringify({ type: 'property', data: propertyData }),
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
        <h2>List Your Property</h2>
        
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" placeholder="e.g., Spacious Apartment in City Center" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="propertyType">Property Type:</label>
          <select id="propertyType" name="propertyType" required>
            <option value="">Select Property Type</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="Commercial">Commercial</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" placeholder="Enter location" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" placeholder="Enter price in INR" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="bedrooms">Number of Bedrooms:</label>
          <input type="number" id="bedrooms" name="bedrooms" placeholder="Enter number of bedrooms" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="bathrooms">Number of Bathrooms:</label>
          <input type="number" id="bathrooms" name="bathrooms" placeholder="Enter number of bathrooms" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="amenities">Amenities:</label>
          <input type="text" id="amenities" name="amenities" placeholder="e.g., Gym, Pool" required />
        </div>
        
        {/* <div className="form-group">
          <label htmlFor="photos">Photos:</label>
          <input type="file" id="photos" name="photos" multiple required />
        </div> */}
        
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
        
        <button type="submit">List Property</button>
      </form>
    </div>
  );
}

export default ListingProperty;