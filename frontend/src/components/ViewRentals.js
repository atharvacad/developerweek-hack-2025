// src/components/ViewRentals.js
import React, { useEffect, useState } from 'react';
import '../css/ViewRentals.css';

function ViewRentals() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/view-data?type=property');
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error('Error fetching property listings:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="view-container">
      <h2>Property Listings</h2>
      {properties.map((property) => (
        <div key={property.id} className="listing-card">
          <h3>{property.Property_Title}</h3>
          <p><strong>Type:</strong> {property.Property_Type}</p>
          <p><strong>Location:</strong> {property.Location}</p>
          <p><strong>Price:</strong> {property.Price}</p>
          <p><strong>Bedrooms:</strong> {property.Number_of_Bedrooms}</p>
          <p><strong>Bathrooms:</strong> {property.Number_of_Bathrooms}</p>
          <p><strong>Amenities:</strong> {property.Amenities}</p>
          <p><strong>Contact Name:</strong> {property.Contact_Name}</p>
          <p><strong>Phone Number:</strong> {property.Phone_Number}</p>
          <p><strong>Email:</strong> {property.Email}</p>
        </div>
      ))}
    </div>
  );
}

export default ViewRentals;