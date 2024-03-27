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
                <button style={{fontSize: 13, fontWeight: 350, letterSpacing: 1,}}>Task Tracking</button>
                <div className='dselection'>
                    <text style={{fontSize: 13, fontWeight: 450, letterSpacing: 1, 
                   color: 'white',}}>Task Completion</text>
                   <img src={require("../components/images/pending.png")} alt="pending" />
                   <text style={{border: 'none', color:'white',marginTop: 75, fontWeight: 300,fontSize: 14,marginLeft: -6,letterSpacing: 0.5,}}> Pending </text>
                </div>
                <div className='dselectiontwo'>
                <text style={{fontSize: 13, fontWeight: 450, letterSpacing: 1, 
                   color: 'white',}}>Alert</text>
                   <img src={require("../components/images/alert.png")} alt="alert" />
                   <text style={{border: 'none', color:'white',marginTop: 79, fontWeight: 300,fontSize: 14,marginLeft: -54,letterSpacing: 0.5,}}> Alert </text>
                </div>
                <img src={require("../components/images/dashimg.png")} alt='img' style={{width: 240, height: 300,}}></img>
              </div>
          
          
        </div>
      </div>
    
    
  );
};

export default DashboardPage;