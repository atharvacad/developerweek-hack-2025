// src/components/AdminDataView.jsx
import React, { useEffect, useState } from 'react';
import { saveAs } from 'file-saver';
import { Parser } from 'json2csv';
import './AdminDataView.css';

function AdminDataView() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/view-visitor-ids');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleBulkViewInfo = async () => {
    const uniqueVisitorIds = [...new Set(data.map(item => item.visitorID))].filter(id => id.length > 6);

    try {
      const response = await fetch('http://localhost:3000/api/bulk-view-visitor-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ visitorIds: uniqueVisitorIds }),
      });

      const result = await response.json();
      console.log('Bulk View Visitor Info Result:', result);

      // Convert JSON to CSV
      const fields = [
        'visitorId',
        'requestId',
        'browserDetails.browserName',
        'browserDetails.browserMajorVersion',
        'browserDetails.browserFullVersion',
        'browserDetails.os',
        'browserDetails.osVersion',
        'browserDetails.device',
        'browserDetails.userAgent',
        'incognito',
        'ip',
        'timestamp',
        'time',
        'url',
        'confidence.score',
        'confidence.revision',
        'visitorFound',
        'firstSeenAt.global',
        'firstSeenAt.subscription',
        'lastSeenAt.global',
        'lastSeenAt.subscription',
      ];
      const csvParser = new Parser({ fields });
      const csvData = [];

      for (const visitorId in result) {
        result[visitorId].forEach((visit) => {
          csvData.push({
            visitorId,
            ...visit,
          });
        });
      }

      const csv = csvParser.parse(csvData);
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      saveAs(blob, 'visitor_info.csv');
    } catch (error) {
      console.error('Error fetching bulk visitor info:', error);
    }
  };

  return (
    <div className="admin-data-view">
      <h2>Visitor Data</h2>
      <button onClick={handleBulkViewInfo}>Bulk View Info Visitor</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Visitor ID</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.visitorID}</td>
              <td>{item.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDataView;