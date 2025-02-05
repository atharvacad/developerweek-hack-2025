// src/index.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-react';



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FpjsProvider
      loadOptions={{
        apiKey: "AclZkOMOVJfk6QdEwIQd"
      }}
    >
      <App />
    </FpjsProvider>
  </React.StrictMode>
);