import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login'; 
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import Verification from './components/Verification';
import NewPassword from './components/NewPassword';
import './App.css';
import WeatherApp from './components/WeatherApp/WeatherApp';

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
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
