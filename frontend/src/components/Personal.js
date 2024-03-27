import React, { useState } from 'react';
import './Personal.css';

export const Personal = () => {
  const [position, setPosition] = useState('');
  const [otherPosition, setOtherPosition] = useState('');

  const handlePositionChange = (event) => {
    const selectedPosition = event.target.value;
    setPosition(selectedPosition);
    // If "Others" is selected, reset otherPosition state
    if (selectedPosition !== "Others") {
      setOtherPosition('');
    }
  };

  const handleOtherPositionChange = (event) => {
    setOtherPosition(event.target.value);
  };

  return (
    <div className="percontainer">
      <div className="permain-content">
        <div className="perwhite-box">
          <div className="percaptain-logo"></div>
          <input type="text" placeholder="Enter email ID" />
          <input type="text" placeholder="Enter your Name" />
          <div className="perdropdown">
            <select value={position} onChange={handlePositionChange}>
              <option value="">Select Your Position</option>
              <option value="Captain">Captain</option>
              <option value="Bridge">Bridge</option>
              <option value="Engine">Engine</option>
              <option value="Logistics">Logistics</option>
              <option value="Safety">Safety</option>
              <option value="Hospitality">Hospitality</option>
              <option value="Others">Others</option>
            </select>
            
            {position === "Others" && (
              <input
                type="text"
                value={otherPosition}
                onChange={handleOtherPositionChange}
                placeholder="Enter your Position"
              />
            )}
          </div>
          <div className="perbutton-container">
            <button className="perbutton1">Exit</button>
            <button className="perbutton2">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};
