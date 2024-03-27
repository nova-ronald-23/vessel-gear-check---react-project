import React from 'react';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar'; 
import Header from '../header';
import Modifydefult from './ModifyDefaultChecklist';


const modifychecklist = () => {
  return (
    <div className="dashboard">
      <Sidebar /> 
      <div className="cmain-content">
        <Header/>
       <Modifydefult/>
      </div>
    </div>
    
    
  );
};

export default modifychecklist;