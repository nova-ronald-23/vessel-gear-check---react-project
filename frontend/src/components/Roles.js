import React, { useState } from 'react';
import './Role.css';

const RoleScreen = () => {
  // State for managing selected options and select button status
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isButtonSelected, setIsButtonSelected] = useState(false);

  // Function to toggle selection of an option
  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  // Function to handle "Select" button press
  const handleSelectPress = () => {
    setIsButtonSelected(!isButtonSelected);
    if (isButtonSelected) {
      setSelectedOptions([]);
    }
    console.log('Selected Options:', selectedOptions);
  };

  return (
    <div className="container">
      <div className="main-content">
        <div className="white-box">
          <div className='box1'>
            <div className="options-btn">
              {/* Buttons for options */}
              <button 
                className={selectedOptions.includes('Captain') ? 'selectedButton' : 'option1'}
                onClick={() => toggleOption('Captain')}
              >
                Captain
              </button>
              {/* Repeat button elements for other options */}
              <button 
                className={selectedOptions.includes('Bridge') ? 'selectedButton' : 'option1'}
                onClick={() => toggleOption('Bridge')}
              >
                Bridge
              </button>
              <button 
                className={selectedOptions.includes('Engine') ? 'selectedButton' : 'option1'}
                onClick={() => toggleOption('Engine')}
              >
                Engine
              </button>
              <button 
                className={selectedOptions.includes('Logistics') ? 'selectedButton' : 'option1'}
                onClick={() => toggleOption('Logistics')}
              >
                Logistics
              </button>
              <button 
                className={selectedOptions.includes('Safety') ? 'selectedButton' : 'option1'}
                onClick={() => toggleOption('Safety')}
              >
                Safety
              </button>
              <button 
                className={selectedOptions.includes('Hospitality') ? 'selectedButton' : 'option1'}
                onClick={() => toggleOption('Hospitality')}
              >
                Hospitality
              </button>
              {/* Select button */}
              <button 
                className={isButtonSelected ? 'selectedButton' : 'option'}
                onClick={handleSelectPress}
              >
                {isButtonSelected ? 'Selected' : 'Select'}
              </button>
            </div>
            
          </div>
          <div className='box2'>
          <div className='track1'><button className='track'> Task Tracking</button></div>
          
          <div className='inside-box'></div>
          <div className='inside-box'></div>
          </div>
          
              
              
        </div>
      </div>
    </div>
  );
};

export default RoleScreen;
