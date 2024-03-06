import React from 'react';
import './VesselProfileNext';
import { useNavigate } from 'react-router-dom';
import './styles.css'; // Import CSS file for styling
import './Sidebar';


const VesselProfile = () => {

const navigate = useNavigate();

    const Next = () => {
        // Add your login logic here
        //alert(`Are you sure to logout`);
        // Redirect to the dashboard after successful login
       navigate('/VesselProfileNext');
      };

      const Exit = () => {
        // Add your login logic here
        //alert(`Are you sure to logout`);
        // Redirect to the dashboard after successful login
        navigate('/Sidebar');
      };

  return (
    <div className="container">
      <div className="sidebar">
      <div className="sheader">
      <div className="captain-logo"></div>
      <div className="captain-text">Captain</div>
      </div>

      <div className="sidebar-options">
          <button className="option">
            <img src={require("../components/images/opn1.png")} alt="Option 1" /> 
            <span>Roles</span>
          </button>
          <button className="option">
            <img src={require("../components/images/opn2.png")} alt="Option 2" /> 
            <span>Vessel Profiile</span>
          </button>
          <button className="option">
            <img src={require("../components/images/opn3.png")} alt="Option 3" /> 
            <span>Checklist</span>
          </button>
          <button className="option">
            <img src={require("../components/images/opn4.png")} alt="Option 4" /> 
            <span>Visualization</span>
          </button>
          <button className="option">
            <img src={require("../components/images/opn5.png")} alt="Option 5" /> 
            <span>Settings</span>
          </button>
            {/* Add more options as needed */}

      </div>
        <button className="sign-out-button">
          <img src={require("../components/images/sout.png")} alt="Sign Out" />
          <span>Sign Out</span>
          </button>

      </div>

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
            <button className="button1" onClick={() => Exit()}>Exit</button>
           
            <button className="button2" onClick={() => Next()}>
            Next</button>
          
          </div>
        </div>
      </div>
    </div>
  );
};
export default VesselProfile;
