import React from 'react';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar'; 
import Createchecklist from './CreateChecklistPage';


const DashboardPage = () => {
  return (
    <div className="dashboard">
      <Sidebar /> 
      <div className="main-content">
       <Createchecklist/>
      </div>
    </div>
    
    
  );
};

export default DashboardPage;