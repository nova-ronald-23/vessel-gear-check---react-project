import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './header'
import './Role.css';
import './styles.css';

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
    <Sidebar/>
    <div className="rcontainer">
      
      <div className="rmain-content">
        <Header/>
        <div className="rwhite-box">
        
          <div className='rbox1'>
            <div className="roptions-btn">
              {/* Buttons for options */}
              <button 
                className={selectedOptions.includes('Captain') ? 'rselectedButton' : 'roption1'}
                onClick={() => toggleOption('Captain')}
              >
                Captain
              </button>
              {/* Repeat button elements for other options */}
              <button 
                className={selectedOptions.includes('Bridge') ? 'rselectedButton' : 'roption1'}
                onClick={() => toggleOption('Bridge')}
              >
                Bridge
              </button>
              <button 
                className={selectedOptions.includes('Engine') ? 'rselectedButton' : 'roption1'}
                onClick={() => toggleOption('Engine')}
              >
                Engine
              </button>
              <button 
                className={selectedOptions.includes('Logistics') ? 'rselectedButton' : 'roption1'}
                onClick={() => toggleOption('Logistics')}
              >
                Logistics
              </button>
              <button 
                className={selectedOptions.includes('Safety') ? 'rselectedButton' : 'roption1'}
                onClick={() => toggleOption('Safety')}
              >
                Safety
              </button>
              <button 
                className={selectedOptions.includes('Hospitality') ? 'rselectedButton' : 'roption1'}
                onClick={() => toggleOption('Hospitality')}
              >
                Hospitality
              </button>
              {/* Select button */}
              <button 
                className={isButtonSelected ? 'rselectedButton' : 'roption'}
                onClick={handleSelectPress}
              >
                {isButtonSelected ? 'Selected' : 'Select'}
              </button>
            </div>
            
          </div>
          <div className='rbox2'>
          <div className='rtrack1'><button className='rtrack'> Task Tracking</button></div>
          
          <div className='rinside-box'></div>
          <div className='rinside-box'></div>
          </div>
          
              
              
        </div>
      </div>
    </div>
    </div>
  );
};

export default RoleScreen;
