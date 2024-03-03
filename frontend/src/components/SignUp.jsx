// SignUp.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'; // Make sure to import your CSS file

const SignUp = () => {
  const [uniqueId, setUniqueId] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      return;
    }

    // Implement your sign-up logic here (e.g., send data to server)
    console.log('Sign Up clicked');
  };

  return (
    <div className="sign-up-container">
      <form className="signup-form">
      <h2 className="sign-up-title">Sign Up</h2>
      <div className="form-group">
        <input type="text" id="unique-id"  placeholder='Unique ID' className="form-control" value={uniqueId} onChange={(e) => setUniqueId(e.target.value)} />
        <input type="email" id="email" placeholder='Email' className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <input type="text" id="name" placeholder='Name' className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" id="position" placeholder='Position' className="form-control" value={position} onChange={(e) => setPosition(e.target.value)} />
      </div>
      <div className="form-group">
        <input type="password" id="password" placeholder='Password' className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" id="confirm-password" placeholder='Confirm Password' className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        {passwordMatchError && <p className="error-message">Passwords do not match.</p>}
      </div>
      <div className="form-group">
        <button className="sign-up-button" onClick={handleSignUp}>Sign Up</button>
      </div>
      <div className="form-group">
        <p className="already-have-account">Already have an account? <Link to="/login">Login</Link></p>
      </div>
      </form>
    </div>
  );
};

export default SignUp;
