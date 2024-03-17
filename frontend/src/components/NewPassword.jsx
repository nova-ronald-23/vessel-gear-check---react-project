import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NewPassword.css'

const NewPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleNewPassword = () => {
    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      return;
    }

    // Implement your new password logic here
    console.log('New Password submitted');
  };

  return (
    <div className="lbody">
    <div className="new-password-container">
      <h2 className="new-password-title">New Password</h2>
      <div className="new-password-form">
        <div className="new-password-input-container">
          <input type="password" className="new-password-input" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="new-password-input-container">
          <input type="password" className="new-password-input" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          {passwordMatchError && <p className="new-password-error">Passwords do not match.</p>}
        </div>
      </div>
        <button className="new-password-button" onClick={handleNewPassword}>
          Submit
        </button>
      
      <div className="new-password-link-container">
        <Link to="/login" className="new-password-link">
          Back to Login
        </Link>
      </div>
    </div>
    </div>
  );
};

export default NewPassword;