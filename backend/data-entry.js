// backend/data-entry.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const { FingerprintJsServerApiClient, Region } = require('@fingerprintjs/fingerprintjs-pro-server-api');
require('dotenv').config();

const router = express.Router();

const apiKey = process.env.FINGERPRINTJS_API_KEY;
// Initialize the FingerprintJS Pro Server API client
const client = new FingerprintJsServerApiClient({
  apiKey: apiKey,
  region: Region.Global, // Replace with your region
});



// Open the SQLite database
const db = new sqlite3.Database('./db/database.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Endpoint to insert data into different tables based on type
router.post('/insert-data', async (req, res) => {
  const { type, data } = req.body;

  let sql;
  let params;
  if (!type || !data) {
    return res.status(400).json({ error: 'Type and data are required' });
  }

  // Fetch visit history of the visitor
  try {
    console.log(data.visitorID);
    const visitorHistory = await client.getVisits(data.visitorID);
    console.log(visitorHistory);
    //res.json(visitorHistory);
  } catch (error) {
    console.error('Error fetching visitor history:', error);
    res.status(500).json({ error: 'Failed to fetch visitor history' });
  }

  switch (type) {
    case 'car':
      sql = `INSERT INTO CarListing (visitorID, Car_Title, Make, Model, Year, Price, Mileage, Condition, Photos, Contact_Name, Phone_Number, Email) 
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      params = [
        data.visitorID, data.Car_Title, data.Make, data.Model, data.Year, data.Price, data.Mileage, data.Condition, data.Photos, data.Contact_Name, data.Phone_Number, data.Email
      ];
      break;
    case 'electronics':
      sql = `INSERT INTO ElectronicsListing (visitorID, Electronics_Title, Type, Brand, Model, Year, Price, Condition, Photos, Contact_Name, Phone_Number, Email) 
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      params = [
        data.visitorID, data.Electronics_Title, data.Type, data.Brand, data.Model, data.Year, data.Price, data.Condition, data.Photos, data.Contact_Name, data.Phone_Number, data.Email
      ];
      break;
    case 'property':
      sql = `INSERT INTO PropertyListing (visitorID, Property_Title, Property_Type, Location, Price, Number_of_Bedrooms, Number_of_Bathrooms, Amenities, Photos, Contact_Name, Phone_Number, Email) 
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      params = [
        data.visitorID, data.Property_Title, data.Property_Type, data.Location, data.Price, data.Number_of_Bedrooms, data.Number_of_Bathrooms, data.Amenities, data.Photos, data.Contact_Name, data.Phone_Number, data.Email
      ];
      break;
    default:
      return res.status(400).json({ error: 'Invalid type' });
  }

  db.run(sql, params, function (err) {
    if (err) {
      console.error('Error inserting data:', err.message);
      return res.status(500).json({ error: 'Failed to insert data' });
    }
    res.json({ message: 'Data inserted successfully', id: this.lastID });
  });
});

module.exports = router;