// src/components/ViewElectronics.jsx
import React, { useEffect, useState } from 'react';

function ViewElectronics() {
  const [electronics, setElectronics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/view-data?type=electronics');
        const data = await response.json();
        setElectronics(data);
      } catch (error) {
        console.error('Error fetching electronics listings:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="view-container">
      <h2>Electronics Listings</h2>
      {electronics.map((item) => (
        <div key={item.id} className="listing-card">
          <h3>{item.Electronics_Title}</h3>
          <p><strong>Type:</strong> {item.Type}</p>
          <p><strong>Brand:</strong> {item.Brand}</p>
          <p><strong>Model:</strong> {item.Model}</p>
          <p><strong>Year:</strong> {item.Year}</p>
          <p><strong>Price:</strong> {item.Price}</p>
          <p><strong>Condition:</strong> {item.Condition}</p>
          <p><strong>Contact Name:</strong> {item.Contact_Name}</p>
          <p><strong>Phone Number:</strong> {item.Phone_Number}</p>
          <p><strong>Email:</strong> {item.Email}</p>
        </div>
      ))}
    </div>
  );
}

export default ViewElectronics;