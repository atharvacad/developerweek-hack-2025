// src/components/ListingProperty.js
import React from 'react';
import '../css/ListingProperty.css';

function ListingProperty() {
  return (
    <div className="listing-container">
      <form className="listing-form">
        <h2>List Your Property</h2>
        
        <div className="form-group">
          <label htmlFor="propertyType">Property Type:</label>
          <input type="text" id="propertyType" name="propertyType" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="bedrooms">Number of Bedrooms:</label>
          <input type="number" id="bedrooms" name="bedrooms" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="bathrooms">Number of Bathrooms:</label>
          <input type="number" id="bathrooms" name="bathrooms" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="amenities">Amenities:</label>
          <input type="text" id="amenities" name="amenities" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="appliances">Appliances:</label>
          <input type="text" id="appliances" name="appliances" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="flooring">Flooring:</label>
          <input type="text" id="flooring" name="flooring" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="windows">Windows:</label>
          <input type="text" id="windows" name="windows" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="view">View:</label>
          <input type="text" id="view" name="view" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="age">Age of Property:</label>
          <input type="number" id="age" name="age" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="renovations">Renovations:</label>
          <input type="text" id="renovations" name="renovations" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="condition">Condition:</label>
          <input type="text" id="condition" name="condition" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="leaseTerms">Lease Terms:</label>
          <input type="text" id="leaseTerms" name="leaseTerms" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="parking">Parking:</label>
          <input type="text" id="parking" name="parking" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="utilities">Utilities:</label>
          <input type="text" id="utilities" name="utilities" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="photos">Photos:</label>
          <input type="file" id="photos" name="photos" multiple required />
        </div>
        
        <div className="form-group">
          <label htmlFor="contactName">Contact Name:</label>
          <input type="text" id="contactName" name="contactName" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        
        <button type="submit">List Property</button>
      </form>
    </div>
  );
}

export default ListingProperty;