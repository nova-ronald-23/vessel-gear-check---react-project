import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar'; 
import Checklistmain from './Checklist_Main';


const DashboardPage = () => {
  return (
    <div className="dashboard">
      <Sidebar /> 
      <div className="main-content">
        <Checklistmain/>
      </div>
    </div>
    
    
  );
};

export default DashboardPage;