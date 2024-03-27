import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar'; 
import Defaultchecklist from './DefaultChecklistPage';
import Header from '../header';
import"./checklist.css";


const DashboardPage = () => {
  return (
    <div className="dashboard">
      <Sidebar /> 
      <div className="cmain-content">
        <Header/>
        <Defaultchecklist/>
      </div>
    </div>
    
    
  );
};

export default DashboardPage;