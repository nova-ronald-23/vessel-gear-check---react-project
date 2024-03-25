import React from 'react';
import { Link } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';
import './styles.css'; // Import CSS file for styling


const sidebar = () => {

  //const navigate = useNavigate();


    //const Next = () => {
        // Add your login logic here
        //alert(`Are you sure to logout`);
        // Redirect to the dashboard after successful login
       // navigate('/VesselProfileNext');
      //};

  return (
    <div className="container">
      <div className="sidebar">
      <div className="sheader">
      <div className="captain-logo"></div>
      <div className="captain-text">Captain</div>
      </div>

      <div className="sidebar-options">
      <Link to="/dashboard" className="option"> 
            <img src={require("../components/images/dash.png")} alt="Option 2" /> 
            <span>Dash Board</span>
          </Link>
          <Link to="/roles" className="option"> 
            <img src={require("../components/images/opn1.png")} alt="Option 2" /> 
            <span>Roles</span>
          </Link>
          <Link to="/vesselprofile" className="option"> 
            <img src={require("../components/images/opn2.png")} alt="Option 2" /> 
            <span>Vessel Profiile</span>
          </Link>
          <Link to="/checklistmain" className="option">
            <img src={require("../components/images/opn3.png")} alt="Option 3" /> 
            <span>Checklist</span>
          </Link>
          <button className="option">
            <img src={require("../components/images/opn4.png")} alt="Option 4" /> 
            <span>Visualization</span>
          </button>
          <Link to={"/Set"} className="option">
            <img src={require("../components/images/opn5.png")} alt="Option 5" /> 
            <span>Settings</span>
          </Link>
            {/* Add more options as needed */}

      </div>
        <button className="sign-out-button">
          <img src={require("../components/images/sout.png")} alt="Sign Out" />
          <span>Sign Out</span>
          </button>

      </div>

          </div>
  );
};
export default sidebar;
