// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VesselProfile from './components/VesselProfile';
import VesselProfileNext from './components/VesselProfileNext';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<VesselProfile />} />
      <Route path="/VesselProfileNext" element={<VesselProfileNext />} />
      <Route path="/Sidebar" element={<Sidebar />} />
       
      
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
