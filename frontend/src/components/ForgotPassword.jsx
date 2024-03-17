import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  
  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
  
    if (!emailValue) {
      setEmailError("Email can't be empty.");
    } else if (!emailValue.includes('@')) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError('');
    }
  };

  return (
    <div className="lbody">
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <div className="email-label">
        <input
          type="email"
          placeholder="Email"
          className={emailError ? "email-input email-input-error" : "email-input"}
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && <p className="email-error-message">{emailError}</p>}
      </div>
      <div>
        <button className="log-button" disabled={!email}>Send</button>
      </div>
      <div>
        <p>Don't have an account? <Link to="/signup" className="sign-up-link">Sign Up</Link></p>
      </div>
      <div>
        <a href="verification" className="link-button-wrapper">
          <button className="log-button">Login</button>
        </a>
      </div>
    </div>
    </div>
  );
};

export default ForgotPassword;