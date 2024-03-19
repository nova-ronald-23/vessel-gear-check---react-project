import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar'; 
import Header from './header';


const DashboardPage = () => {
  return (
    <div className="dashboard">
      <Sidebar /> 
      <div className="main-content">
          <Header/>
        <div className="box">
            <div className='box2'>

            </div>
          
          
        </div>
      </div>
    </div>
    
    
  );
};

export default DashboardPage;