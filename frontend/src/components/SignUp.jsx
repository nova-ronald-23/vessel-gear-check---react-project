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
  const [validationErrors, setValidationErrors] = useState({
    uniqueId: '',
    email: '',
    name: '',
    position: ''
  });

  const handleUniqueIdChange = (value) => {
    if (!/^[a-zA-Z0-9]+$/.test(value)) {
      setValidationErrors(prevErrors => ({
        ...prevErrors,
        uniqueId: 'Enter numbers and characters only.'
      }));
    } else {
      setValidationErrors(prevErrors => ({
        ...prevErrors,
        uniqueId: ''
      }));
    }
    setUniqueId(value);
  };

  const handleEmailChange = (value) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setValidationErrors(prevErrors => ({
        ...prevErrors,
        email: 'Enter a valid email address.'
      }));
    } else {
      setValidationErrors(prevErrors => ({
        ...prevErrors,
        email: ''
      }));
    }
    setEmail(value);
  };

  const handleNameChange = (value) => {
    if (!/^[a-zA-Z ]+$/.test(value)) {
      setValidationErrors(prevErrors => ({
        ...prevErrors,
        name: 'Enter letters only.'
      }));
    } else {
      setValidationErrors(prevErrors => ({
        ...prevErrors,
        name: ''
      }));
    }
    setName(value);
  };

  const handlePositionChange = (value) => {
    const validPositions = ['captain', 'deck', 'engine', 'safety', 'logistics', 'hospitality', 'others', 'Captain', 'Deck', 'Engine', 'Safety', 'Logistics', 'Hospitality', 'Others'];
    if (!validPositions.includes(value)) {
      setValidationErrors(prevErrors => ({
        ...prevErrors,
        position: 'Enter a valid position.'
      }));
    } else {
      setValidationErrors(prevErrors => ({
        ...prevErrors,
        position: ''
      }));
    }
    setPosition(value);
  };

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      return;
    }

    // Additional validations can be implemented here

    // If all validations pass, proceed with sign up logic
    console.log('Sign Up clicked');
  };

  return (
    <div className="lbody">
    <div className="sign-up-container">
      <form className="signup-form">
        <h2 className="sign-up-title">Sign Up</h2>
        <div className="form-group">
          <input type="text" id="unique-id" placeholder='Unique ID' className="form-control" value={uniqueId} onChange={(e) => handleUniqueIdChange(e.target.value)} />
          {validationErrors.uniqueId && <p className="error-message">{validationErrors.uniqueId}</p>}
          <input type="email" id="email" placeholder='Email' className="form-control" value={email} onChange={(e) => handleEmailChange(e.target.value)} />
          {validationErrors.email && <p className="error-message">{validationErrors.email}</p>}
        </div>
        <div className="form-group">
          <input type="text" id="name" placeholder='Name' className="form-control" value={name} onChange={(e) => handleNameChange(e.target.value)} />
          {validationErrors.name && <p className="error-message">{validationErrors.name}</p>}
          <input type="text" id="position" placeholder='Position' className="form-control" value={position} onChange={(e) => handlePositionChange(e.target.value)} />
          {validationErrors.position && <p className="error-message">{validationErrors.position}</p>}
        </div>
        <div className="form-group">
          <input type="password" id="password" placeholder='Password' className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="password" id="confirm-password" placeholder='Confirm Password' className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          {passwordMatchError && <p className="error-message">Passwords do not match.</p>}
        </div>
        <div className="form-group">
          <button className="sign-up-button" onClick={handleSignUp} disabled={Object.values(validationErrors).some(error => error !== '')}>Sign Up</button>
        </div>
        <div className="form-group">
          <p className="already-have-account">Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </form>
    </div>
    </div>
  );
};

export default SignUp;
