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
<<<<<<< HEAD
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
                   {/* Display input field for manual input if "Others" is selected */}
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
                   <button className="perbutton1" >Exit</button>
                  
                   <button className="perbutton2" >Update</button>
              
              </div>   
                       
            </div>
=======
      <div className="permain-content">
        <div className="perwhite-box">
          <div className="percaptain-logo"></div>
          <input type="text" placeholder="Enter email ID" />
          <input type="text" placeholder="Enter your Name" />
          <div className="perdropdown">
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
          <div className="perbutton-container">
            <button className="perbutton1">Exit</button>
            <button className="perbutton2">Update</button>
          </div>
>>>>>>> d003abf81233e2feab7b35dd97506ab080c66642
        </div>
    </div>

  );
};
