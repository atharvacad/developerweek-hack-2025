// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import OwnerRegister from './components/OwnerRegister';
import ListingProperty from './components/ListingProperty';
import CarListing from './components/CarListing';
import ElectronicsListing from './components/ElectronicsListing';
import ViewRentals from './components/ViewRentals';
import ViewCars from './components/ViewCars';
import ViewElectronics from './components/ViewElectronics';
import AdminDataView from './components/admin/AdminDataView';
import './App.css'; // Import the global CSS file



const AppContent = () => {


  return (
    <div>
      <Navbar />
      <div className="main-content">
        {/* {location.pathname !== '/' && <VisitorLogger />} */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<OwnerRegister />} />
          <Route path="/list-property" element={<ListingProperty />} />
          <Route path="/list-car" element={<CarListing />} />
          <Route path="/list-electronics" element={<ElectronicsListing />} />
          <Route path="/view-rentals" element={<ViewRentals />} />
          <Route path="/view-cars" element={<ViewCars />} />
          <Route path="/view-electronics" element={<ViewElectronics />} />
          <Route path="/admin-data-view" element={<AdminDataView />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;