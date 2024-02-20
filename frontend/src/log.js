// LoginForm.js
import React, { useState } from 'react';
import './log.css'; 

function Log() {
  // Your component code

const LoginForm = () => {
  const [formData, setFormData] = useState({
    uname: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
  
    console.log('Logging in with:', formData);
 
  };

  return (
    <div>
      <form className="form" onSubmit={handleLogin}>
        <label>
          User Name:
          <input
            type="text"
            name="uname"
            value={formData.uname}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password" // Use password type for secure input
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <center>
          <button type="submit">Login</button>
        </center>
      </form>
    </div>
  );
};
}

export default Log;
