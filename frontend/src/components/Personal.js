import React, { useState } from 'react';
import './Personal.css';

export const Personal = () => {
  const [showOtherInput, setShowOtherInput] = useState(false);

  const handlePositionChange = (e) => {
    if (e.target.value === "others") {
      setShowOtherInput(true);
    } else {
      setShowOtherInput(false);
    }
  };

  return (
    <div className="container">
      <div className="main-content">
        <div className="white-box">
          <div className="captain-logo"></div>
          <input type="text" placeholder="Enter email ID" />
          <input type="text" placeholder="Enter your Name" />
          <div className="dropdown">
            <select onChange={handlePositionChange}>
              <option value="">Select Your Position</option>
              <option value="option1">Captain</option>
              <option value="option2">Bridge</option>
              <option value="option3">Engine</option>
              <option value="option4">Logistics</option>
              <option value="option5">Safety</option>
              <option value="option6">Hospitality</option>
              <option value="others">Others</option> {/* Added "Others" option */}
            </select>
          </div>
          {showOtherInput && ( // Conditionally render the input for "Others"
            <input type="text" placeholder="Enter your Position" />
          )}
          <div className="button-container">
            <button className="button1">Exit</button>
            <button className="button2">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};
