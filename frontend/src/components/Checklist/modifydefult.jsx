import React from 'react';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar'; 
import Modifydefult from './ModifyDefaultChecklist';


const DashboardPage = () => {
  return (
    <div className="dashboard">
      <Sidebar /> 
      <div className="main-content">
       <Modifydefult/>
      </div>
    </div>
    
    
  );
};

export default DashboardPage;