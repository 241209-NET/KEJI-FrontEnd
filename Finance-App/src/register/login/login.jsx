import { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Submitted', { username, password });
    // Add your API call or authentication logic here
  };

  const handleReset = () => {
    navigate("/reset");
  }

  const handleSignup = () => {
    navigate("/signup");
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Keji Banking App</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="Username">Username</label>
            <input
              type="Username"
              id="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your Username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-button">Log In</button>
        </form>
        
        <div id="change">
          <button className="reset-button" onClick={handleReset}>Forgot Username/Password? </button>
          <button className="reset-button" onClick={handleSignup}>Not Enrolled? Sign Up Now </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
