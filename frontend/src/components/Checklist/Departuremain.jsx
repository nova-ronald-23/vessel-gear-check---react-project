import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar'; 
import Defaultchecklist from './DefaultChecklistPage';
import Header from '../header';
import"./checklist.css";
import PreDeparture from './preDeparture';


const DashboardPage = () => {
  return (
    <div className="dashboard">
      <Sidebar /> 
      <div className="cmain-content">
        <Header/>
        <PreDeparture/>
      </div>
    </div>
    
    
  );
};

export default DashboardPage;