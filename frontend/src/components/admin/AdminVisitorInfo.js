import React, { useEffect, useState } from 'react';

const AdminVisitorInfo = () => {
  const [visitorInfo, setVisitorInfo] = useState(null);
  const [error, setError] = useState(null);
  const [detailedInfo, setDetailedInfo] = useState({});
  const [visibleRequestId, setVisibleRequestId] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/visitorinfo')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setVisitorInfo(data))
      .catch(error => setError(error));
  }, []);

  const handleViewMoreInfo = (requestId) => {
    if (visibleRequestId === requestId) {
      setVisibleRequestId(null); // Hide the detailed info if it's already visible
      return;
    }

    fetch(`http://localhost:3000/api/requestidinfo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ requestId }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('More info:', data);
        setDetailedInfo(data); // Store the detailed information
        setVisibleRequestId(requestId); // Show the detailed info
      })
      .catch(error => {
        console.error('Error fetching more info:', error);
      });
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!visitorInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Visitor Information</h1>
      {Object.entries(visitorInfo).map(([visitorId, visits]) => (
        <div key={visitorId}>
          <h2>Visitor ID: {visitorId}</h2>
          <table border="1">
            <thead>
              <tr>
                <th>Request ID</th>
                <th>Browser</th>
                <th>Incognito</th>
                <th>IP</th>
                <th>Timestamp</th>
                <th>URL</th>
                <th>Confidence Score</th>
                <th>First Seen</th>
                <th>Last Seen</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {visits.map((visit, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td>{visit.requestId}</td>
                    <td>{visit.browserDetails.browserName} {visit.browserDetails.browserFullVersion}</td>
                    <td>{visit.incognito ? 'Yes' : 'No'}</td>
                    <td>{visit.ip}</td>
                    <td>{new Date(visit.timestamp).toLocaleString()}</td>
                    <td>{visit.url}</td>
                    <td>{visit.confidence.score}</td>
                    <td>{new Date(visit.firstSeenAt.global).toLocaleString()}</td>
                    <td>{new Date(visit.lastSeenAt.global).toLocaleString()}</td>
                    <td>
                      <button onClick={() => handleViewMoreInfo(visit.requestId)}>
                        {visibleRequestId === visit.requestId ? 'Hide Info' : 'View More Info'}
                      </button>
                    </td>
                  </tr>
                  {visibleRequestId === visit.requestId && (
                    <tr>
                      <td colSpan="10">
                        <DetailedInfo info={detailedInfo} />
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

const DetailedInfo = ({ info }) => {
  const identification = info.products.identification.data;
  const ipInfo = info.products.ipInfo.data;
  const vpn = info.products.vpn.data;
  const botd = info.products.botd.data;

  return (
    <table border="1">
      <tbody>
        <tr>
          <td>Visitor ID</td>
          <td>{identification.visitorId}</td>
        </tr>
        <tr>
          <td>Request ID</td>
          <td>{identification.requestId}</td>
        </tr>
        <tr>
          <td>Browser</td>
          <td>{identification.browserDetails.browserName} {identification.browserDetails.browserFullVersion}</td>
        </tr>
        <tr>
          <td>Operating System</td>
          <td>{identification.browserDetails.os} {identification.browserDetails.osVersion}</td>
        </tr>
        <tr>
          <td>IP</td>
          <td>{identification.ip}</td>
        </tr>
        <tr>
          <td>Timestamp</td>
          <td>{new Date(identification.timestamp).toLocaleString()}</td>
        </tr>
        <tr>
          <td>URL</td>
          <td>{identification.url}</td>
        </tr>
        <tr>
          <td>Confidence Score</td>
          <td>{identification.confidence.score}</td>
        </tr>
        <tr>
          <td>First Seen</td>
          <td>{new Date(identification.firstSeenAt.global).toLocaleString()}</td>
        </tr>
        <tr>
          <td>Last Seen</td>
          <td>{new Date(identification.lastSeenAt.global).toLocaleString()}</td>
        </tr>
        <tr>
          <td colSpan="2"><strong>IP Information</strong></td>
        </tr>
        <tr>
          <td>IP Address</td>
          <td>{ipInfo.v4.address}</td>
        </tr>
        <tr>
          <td>City</td>
          <td>{ipInfo.v4.geolocation.city.name}</td>
        </tr>
        <tr>
          <td>Country</td>
          <td>{ipInfo.v4.geolocation.country.name}</td>
        </tr>
        <tr>
          <td>Latitude</td>
          <td>{ipInfo.v4.geolocation.latitude}</td>
        </tr>
        <tr>
          <td>Longitude</td>
          <td>{ipInfo.v4.geolocation.longitude}</td>
        </tr>
        <tr>
          <td colSpan="2"><strong>VPN Information</strong></td>
        </tr>
        <tr>
          <td>VPN Detected</td>
          <td>{vpn.result ? 'Yes' : 'No'}</td>
        </tr>
        <tr>
          <td>Confidence</td>
          <td>{vpn.confidence}</td>
        </tr>
        <tr>
          <td colSpan="2"><strong>Bot Detection</strong></td>
        </tr>
        <tr>
          <td>Bot Detected</td>
          <td>{botd.bot.result}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default AdminVisitorInfo;