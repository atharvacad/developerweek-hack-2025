// src/components/ViewCars.jsx
import React, { useEffect, useState } from 'react';

function ViewCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/view-data?type=car');
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error('Error fetching car listings:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="view-container">
      <h2>Car Listings</h2>
      {cars.map((car) => (
        <div key={car.id} className="listing-card">
          <h3>{car.Car_Title}</h3>
          <p><strong>Make:</strong> {car.Make}</p>
          <p><strong>Model:</strong> {car.Model}</p>
          <p><strong>Year:</strong> {car.Year}</p>
          <p><strong>Price:</strong> {car.Price}</p>
          <p><strong>Mileage:</strong> {car.Mileage}</p>
          <p><strong>Condition:</strong> {car.Condition}</p>
          <p><strong>Contact Name:</strong> {car.Contact_Name}</p>
          <p><strong>Phone Number:</strong> {car.Phone_Number}</p>
          <p><strong>Email:</strong> {car.Email}</p>
        </div>
      ))}
    </div>
  );
}

export default ViewCars;