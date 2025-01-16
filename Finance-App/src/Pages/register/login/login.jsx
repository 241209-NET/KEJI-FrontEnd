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
  const [invalid, setInvalid] = useState();

  useEffect(() => {
    const logInUser = async () => {
      try {
        const res = await axios.post(`${import.meta.env.VITE_API}/login`, {
          email: email,
          password: password,
        });

        setUser(res.data.token);
      } catch (error) {
        setInvalid("Invalid Credentials");
      }
    };

    if (attempLogIn) logInUser();
  }, [attempLogIn]);

  useEffect(() => {
    if (user) handleHomepage();
  }, [user]);

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
    const statmentsIds = user.account.statements.map((s) => s.statementId);
    let user_copy = { ...user };

    const populateStatements = async () => {
      try {
        // Map over the statement IDs and fetch data
        const updatedStatements = await Promise.all(
          statmentsIds.map(async (element) => {
            const res = await axios.get(
              `${import.meta.env.VITE_API}/api/Statement/${element}`
            );
            return res.data; // Return the fetched statement
          })
        );

        // Update user_copy with the new statements
        user_copy.account.statements = updatedStatements;

        // Navigate after all updates are complete
        navigate("/homepage", { state: user_copy });
      } catch (error) {
        console.log(error);
      }
    };
    populateStatements();
  };

  const handleClose = () => {
    setInvalid();
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
          {invalid && (
            <div className="alert">
              <span className="closebtn" onClick={handleClose}>
                &times;
              </span>
              {invalid}
            </div>
          )}
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
