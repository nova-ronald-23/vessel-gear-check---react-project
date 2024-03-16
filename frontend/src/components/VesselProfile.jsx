import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar'; // Import the Sidebar component
import './styles.css'; // Import CSS file for styling

const VesselProfile = () => {
  const navigate = useNavigate();

  const Next = () => {
    navigate('/VesselProfileNext');
  };

  const Exit = () => {
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <Sidebar /> {/* Include the Sidebar component */}
      <div className="main-content">
        <div className="box">
          <div className="header">Vessel Profile</div>
          <div className="text-fields">
            <input type="text" placeholder="Field 1" />
            <input type="text" placeholder="Field 2" />
            <input type="text" placeholder="Field 3" />
            <input type="text" placeholder="Field 4" />
            <input type="text" placeholder="Field 5" />
            <input type="text" placeholder="Field 6" />
          </div>
          <div className="button-container">
            <button className="button1" onClick={Exit}>Exit</button>
            <button className="button2" onClick={Next}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VesselProfile;
