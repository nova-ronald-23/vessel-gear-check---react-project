import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar'; 
import Checklistmain from './Checklist_Main';
import Header from '../header';
import"./checklist.css";


const DashboardPage = () => {
  return (
    <div className="dashboard">
      <Sidebar /> 
      <div className="cmain-content">
        <Header/>
        <Checklistmain/>
      </div>
    </div>
    
    
  );
};

export default DashboardPage;