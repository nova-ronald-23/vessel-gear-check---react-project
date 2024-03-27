import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import './Login.css';

const LoginPage = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const [state, setState] = useState({
    email: '',
    password: '',
    error: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
      error: ''
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    const { email, password } = state;
  
    console.log('Request Payload:', { email, password });
  
    try {
      const response = await fetch('http://localhost:5116/api/User_info/AuthenticateUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to authenticate user: ${JSON.stringify(errorData)}`);
      }
  
      const { roll } = await response.json();
      console.log('API Response:', { message: 'User authenticated successfully', roll });
      
      // Redirect based on roll
      if (roll === 'captain') {
        navigate('/dashboard');
      } else {
        navigate('/userdashboard');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setState({ ...state, error: 'Failed to authenticate user' });
    }
  };

  return (
    <div className="lbody">
      <div className="login-page">
        <form className="login-form" onSubmit={handleFormSubmit}>
          <h1 className="login-heading">Login</h1>
          {state.error && <p className="error-message">{state.error}</p>}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={handleInputChange}
            required
            className="login-input"
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            autoComplete="current-password"
            value={state.password}
            onChange={handleInputChange}
            required
            className="login-input"
          />
          <input type="submit" value="Login" className="log-button" />
          <p className="login-link">Don't have an account? <Link to="/signup">Sign up</Link></p>
          <p className="login-link"><a href="/forgotpassword">Forgot password?</a></p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
