const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

// Create a new SQLite database
const db = new sqlite3.Database('./db/database.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Function to run SQL file
const runSQLFile = (filePath) => {
  const sql = fs.readFileSync(filePath, 'utf8');
  db.exec(sql, (err) => {
    if (err) {
      console.error(`Error executing SQL file ${filePath}:`, err.message);
    } else {
      console.log(`Successfully executed SQL file ${filePath}`);
    }
  });
};

// Run the SQL files
const createTableSQL = path.join(__dirname, 'CreateTable.sql');
const insertSampleRecordsSQL = path.join(__dirname, 'InsertSampleRecords.sql');

runSQLFile(createTableSQL);
runSQLFile(insertSampleRecordsSQL);

// Close the database connection
db.close((err) => {
  if (err) {
    console.error('Error closing database:', err.message);
  } else {
    console.log('Closed the database connection.');
  }
});