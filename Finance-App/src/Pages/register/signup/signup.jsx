import { useEffect, useState } from "react";
import "./signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    const registeUser = async () => {
      try {
        const res = await axios.post(`http://localHost:5023/register`, {
          userName: username,
          email: email,
          password: password,
        });

        setUser(res.data);
      } catch (error) {
        console.log(`It looks like there was a ${error.message} our server might be down at the moment`);
      }
    };

    if (isSubmitted) registeUser();
  }, [isSubmitted]);

  useEffect(() => {
    if (user) createSuccess();
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Creating User...");
    setIsSubmitted(true);
  };

  const createSuccess = () => {
    navigate("/Login");
  };

  const handleEmailInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordInputChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <>
      <div className="header" />
      <div className="primary-container">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit} className="secondary-container">
          <div className="input-line">
            <label htmlFor="email" className="field-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailInputChange}
              placeholder="Enter your Email Address"
              className="input-box"
              required
            />
          </div>

          <div className="input-line">
            <label htmlFor="username" className="field-label">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameInputChange}
              placeholder="Enter your Username"
              className="input-box"
              required
            />
          </div>

          <div className="input-line">
            <label htmlFor="password" className="field-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordInputChange}
              placeholder="Enter your Password"
              className="input-box"
              required
            />
          </div>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
