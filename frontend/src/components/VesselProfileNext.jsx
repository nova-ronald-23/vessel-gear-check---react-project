import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; 
import Sidebar from './Sidebar';

const VesselProfileNext = () => {
 
    const navigate = useNavigate();

    const Back = () => {
        // Add your login logic here
        //alert(`Are you sure to logout`);
        // Redirect to the dashboard after successful login
        navigate('/vesselprofile');
      };
 





  return (
    <div className="container">
     <Sidebar/>
      <div className="main-content">
        <div className="box">
        <div className="header">Vessel Profile</div>
          <div className="text-fields">
              <input type="text" placeholder="Field 1" />
              <input type="text" placeholder="Field 2" />
              <input type="text" placeholder="Field 3" />
              <input type="text" placeholder="Field 4" />
              <input type="text" placeholder="Field 5" />
              <input type="text" placeholder="Field 6" />
            </div>
            <div className="button-container">
            <button className="button1" onClick={() => Back()}>Back</button>
           
            <button className="button2">Submit</button>
          
          </div>
        </div>
      </div>
    </div>
  );
};
export default VesselProfileNext;
