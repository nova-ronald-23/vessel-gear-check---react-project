import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './Login.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      recaptcha: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();

    // Send the form data to the server
    console.log('Email: ' + this.state.email);
    console.log('Password: ' + this.state.password);
    console.log('Recaptcha: ' + this.state.recaptcha);
  }

  render() {
    return (

      <div className="login-page">
        <form className="login-form" onSubmit={this.handleFormSubmit}>
          <h1 className="login-heading">Login</h1>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Mail'
            value={this.state.email}
            onChange={this.handleInputChange}
            required
            className="login-input"
          />
          <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder='Password'
            value={this.state.password}
            onChange={this.handleInputChange}
            required
            className="login-input"
          />
          <br />
          <ReCAPTCHA
            sitekey="6Lccz4EpAAAAAIQ-76b7IFK9NRW6ZWpN1joylDp0"
            onChange={(value) => this.setState({ recaptcha: value })}
            name="recaptcha"
            className="login-recaptcha"
          />
          <br />
          <input type="submit" value="Login" className="login-button" />
          <p className="login-link">Don't have an account? <a href="/signup">Sign up</a></p>
          <p className="login-link"><a href="/forgotpassword">Forgot password?</a></p>
        </form>
      </div>
    );
  }
}

export default LoginPage;
