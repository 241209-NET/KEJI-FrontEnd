import { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [attempLogIn, setAttempt] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    const logInUser = async () => {
      try {
        const res = axios.get(`http://localHost:5023/login`, {
          email: email,
          password: password,
        });

        setUser(res.data.Token);
      } catch (error) {
        console.log(error);
      }
    };

    if (attempLogIn) logInUser();
  }, [attempLogIn]);

  useEffect(() => {
    if(user) handleHomepage()
  }, [user])

  const handleSubmit = (e) => {
    e.preventDefault();
    setAttempt(true);
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
      <div className="header" />
      <div className="primary-container">
        <h2>Keji Banking App</h2>
        <form onSubmit={handleSubmit} className="secondary-container">
          <div className="input-line">
            <label htmlFor="Email" className="field-label">
              Email
            </label>
            <input
              type="Email"
              id="Email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              required
            />
          </div>
          <div className="input-line">
            <label htmlFor="password" className="field-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="input-box"
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
