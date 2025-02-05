// backend/view-data.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const router = express.Router();

// Open the SQLite database
const db = new sqlite3.Database('./db/database.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Endpoint to view visitorID, id, and type for all listings
router.get('/view-visitor-ids', (req, res) => {
  const sql = `
    SELECT id, visitorID, 'car' AS type FROM CarListing
    UNION ALL
    SELECT id, visitorID, 'electronics' AS type FROM ElectronicsListing
    UNION ALL
    SELECT id, visitorID, 'property' AS type FROM PropertyListing
  `;

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error('Error fetching data:', err.message);
      return res.status(500).json({ error: 'Failed to fetch data' });
    }
    res.json(rows);
  });
});


// Endpoint to view data from different tables based on type
router.get('/view-data', (req, res) => {
  const { type } = req.query;

  let sql;

  switch (type) {
    case 'car':
      sql = `SELECT * FROM CarListing`;
      break;
    case 'electronics':
      sql = `SELECT * FROM ElectronicsListing`;
      break;
    case 'property':
      sql = `SELECT * FROM PropertyListing`;
      break;
    default:
      return res.status(400).json({ error: 'Invalid type' });
  }

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error('Error fetching data:', err.message);
      return res.status(500).json({ error: 'Failed to fetch data' });
    }
    res.json(rows);
  });
});

module.exports = router;