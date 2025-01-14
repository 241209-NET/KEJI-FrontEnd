import { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [attempLogIn, setAttempt] = useState(false);

  useEffect(() => {
    try {
      
    } catch (error) {
      console.log(error);
    }
  },[attempLogIn])

  const handleSubmit = (e) => {
    e.preventDefault();
    setAttempt(true)
  };

  const handleReset = () => {
    navigate("/reset");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleHomepage = () => {
    navigate("/homepage");
  };
  return (
    <>
      <div class="header" />
      <div class="primary-container">
        <h2>Keji Banking App</h2>
        <form onSubmit={handleSubmit} class="secondary-container">
          <div class="input-line">
            <label htmlFor="Username" class="field-label">
              Username
            </label>
            <input
              type="Username"
              id="Username"
              class="input-box"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your Username"
              required
            />
          </div>
          <div class="input-line">
            <label htmlFor="password" class="field-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              class="input-box"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" id="login-button">
            Log In
          </button>

          <button className="reset-button" onClick={handleReset}>
            Forgot Username/Password?{" "}
          </button>
          <button className="reset-button" onClick={handleSignup}>
            Not Enrolled? Sign Up Now{" "}
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
