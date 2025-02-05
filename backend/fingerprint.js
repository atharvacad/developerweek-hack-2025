// backend/fingerprint.js
const express = require('express');
require('dotenv').config();
const { FingerprintJsServerApiClient, Region } = require('@fingerprintjs/fingerprintjs-pro-server-api');

const router = express.Router();

const apiKey = process.env.FINGERPRINTJS_API_KEY;
// Initialize the FingerprintJS Pro Server API client
const client = new FingerprintJsServerApiClient({
  apiKey: apiKey,
  region: Region[process.env.FINGERPRINTJS_REGION.toUpperCase()] || Region.Global,
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
});

module.exports = router;