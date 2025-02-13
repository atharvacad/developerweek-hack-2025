// backend/fingerprint.js
const express = require('express');
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { Parser } = require('json2csv');
const { FingerprintJsServerApiClient, Region } = require('@fingerprintjs/fingerprintjs-pro-server-api');

const router = express.Router();

const apiKey = process.env.FINGERPRINTJS_API_KEY;
// Initialize the FingerprintJS Pro Server API client
const client = new FingerprintJsServerApiClient({
  apiKey: apiKey,
  region: Region.Global,
});

// Endpoint to get visit history of a specific visitor
router.post('/get-visitor-history', async (req, res) => {
  const { visitorId } = req.body;

  try {
    const visitorHistory = await client.getVisits(visitorId);
    console.log(visitorHistory);
    res.json(visitorHistory);
  } catch (error) {
    console.error('Error fetching visitor history:', error);
    res.status(500).json({ error: 'Failed to fetch visitor history' });
  }
});

// Endpoint to get visit history for a list of visitor IDs
router.post('/bulk-view-visitor-info', async (req, res) => {
  const { visitorIds } = req.body;

  if (!Array.isArray(visitorIds) || visitorIds.length === 0) {
    return res.status(400).json({ error: 'visitorIds must be a non-empty array' });
  }

  const results = {};

  for (const visitorId of visitorIds) {
    try {
      const visitorHistory = await client.getVisits(visitorId);
      results[visitorId] = visitorHistory.visits;
    } catch (error) {
      console.error(`Error fetching visitor history for ${visitorId}:`, error);
      results[visitorId] = { error: 'Failed to fetch visitor history' };
    }
  }

  console.log(results);
  res.json(results);
  
  // Save JSON to file
  const filePath = path.join(__dirname, 'data', 'visitor_info.json');
  try {
    fs.writeFileSync(filePath, JSON.stringify(results, null, 2));
    console.log('JSON file saved to', filePath);
  } catch (err) {
    console.error('Error saving JSON to file:', err);
  }

});

// Endpoint to get more info about a specific request ID
// Endpoint to get more info about a specific request ID
router.post('/requestidinfo', async (req, res) => {
  console.log('Received request for /requestidinfo');
  const { requestId } = req.body; // Extract requestId from the request body

  if (!requestId) {
    console.log('requestId is missing');
    return res.status(400).json({ error: 'requestId is required' });
  }

  console.log(`Fetching event for requestId: ${requestId}`);
  try {
    const event = await client.getEvent(requestId);
    console.log(`Event fetched for requestId: ${requestId}`, event);
    res.json(event);
  } catch (error) {
    console.error(`Error fetching event for requestId ${requestId}:`, error);
    res.status(500).json({ error: 'Failed to fetch event' });
  }
});

module.exports = router;