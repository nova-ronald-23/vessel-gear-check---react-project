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
      const handleFileSelection = (event) => {
        const file = event.target.files[0];
        console.log('Selected file:', file);
        // Perform further actions with the selected file
    };
 





  return (
    <div className="container">
     <Sidebar/>
      <div className="main-content">
        <div className="box">
        <div className="header">Vessel Profile</div>
          <div className="text-fields">
              <input type="text" placeholder="Country" />
              <input type="text" placeholder="IMO Number" />
              <input type="text" placeholder="IMO Type" />
              Registry Info<input type="file" accept=".pdf" className="file-input" onChange={handleFileSelection} />
              Maintanence Schedule<input type="file" accept=".pdf" className="file-input" onChange={handleFileSelection} />
              Repair Histroy<input type="file" accept=".pdf" className="file-input" onChange={handleFileSelection} />
              
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
