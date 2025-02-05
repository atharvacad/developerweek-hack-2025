// backend/index.js
const express = require('express');
const fingerprintRoutes = require('./fingerprint');
const dataEntryRoutes = require('./data-entry');
const viewDataRoutes = require('./view-data');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Use the fingerprint routes
app.use('/api', fingerprintRoutes);

// Use the data entry routes
app.use('/api', dataEntryRoutes);

// Use the view data routes
app.use('/api', viewDataRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});