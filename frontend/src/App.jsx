import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login'; 
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import Verification from './components/Verification';
import NewPassword from './components/NewPassword';
import WeatherApp from './components/WeatherApp/WeatherApp';
import DashboardPage from './components/dashboard';
import VesselProfile from './components/VesselProfile';
import VesselProfileNext from './components/VesselProfileNext';
import Roles from'./components/Roles';
import Personal from './components/Personal';
import Set from './components/Set';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WeatherApp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/vesselprofile" element={<VesselProfile />} />
        <Route path="/VesselProfileNext" element={<VesselProfileNext />} />
        <Route path="/roles" element={<Roles />}/>
        <Route path="/personal" element={<Personal/>}/>
        <Route path="/set" element={<Set/>}/> 
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
