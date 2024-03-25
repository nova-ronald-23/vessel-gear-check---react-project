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

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const { email, password } = state;

    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Request Payload:', { email, password });


    // Commented out API call
    // try {
    //   const response = await fetch('https://localhost:7035/api/User_info/AuthenticateUser', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ Email: email, Password: password })
    //   });
    //
    //   if (!response.ok) {
    //     throw new Error('Failed to authenticate user');
    //   }
    //
    //   // Redirect to dashboard upon successful login
    //   // this.props.history.push('/dashboard');
    // } catch (error) {
    //   console.error('Login failed:', error);
    //   this.setState({ error: 'Failed to authenticate user' });
    // }

    // Redirect to dashboard without API call
    //navigate('/dashboard');
    navigate('/dashboard');
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