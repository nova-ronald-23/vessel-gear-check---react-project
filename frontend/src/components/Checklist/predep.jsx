import React from 'react';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar'; 
import Deptchecklistoptions from './DeptChecklistOptions';



const predep = () => {
  return (
    <div className="dashboard">
      <Sidebar /> 
      <div className="main-content">
       <Deptchecklistoptions/>
      </div>
    </div>
    
    
  );
};

export default predep;