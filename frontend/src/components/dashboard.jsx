import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar'; // Import the Sidebar component


const DashboardPage = () => {
  return (
    <div className="dashboard">
      <Sidebar /> {/* Include the Sidebar component */}
      <div className="main-content">
        <div className="box">
            <div className='box1'>

            </div>
          
          
        </div>
      </div>
    </div>
    
    
  );
};

export default DashboardPage;