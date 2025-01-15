import "./reset.css";
import { useState } from "react";
import axios from "axios";

const Reset = () => {
 const [userInfo, setUserInfo] = useState(null);
  const [isValidResponse, setIsValidResponse] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Not a valid email");
      setUserInfo(null);
      setIsValidResponse(false);
      return;
    }

    setErrorMessage("");

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API}/check-email/${encodeURIComponent(email)}`
      );
      const { userName, password } = response.data;
      setUserInfo({ userName, password });
      setIsValidResponse(true);
    } catch (error) {
      setErrorMessage(
        error.response && error.response.status === 404
          ? "Email does not exist."
          : "An error occurred. Please try again."
      );
      setUserInfo(null);
      setIsValidResponse(false);
    }
  };

  return (
    <>
      <div className="header"/>
      <div className="primary-container">
        <h2>Reset Username/Password</h2>
        <form onSubmit={handleSubmit}className="secondary-container">
          <div className="input-line">
            <label htmlFor="email" className="field-label">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your Email Address" className="input-box" required />
            </div>

        {isValidResponse && (
          <div id="output-container">
            <p className="output-message">Username: {userInfo.userName}</p>
            <p className="output-message">Password: {userInfo.password}</p>
          </div>
        )}

      
        {errorMessage && (
          <div className="error-container">
            <p className="error-message">{errorMessage}</p>
          </div>
        )}

        {!isValidResponse && ( 
          <button type="submit" className="submit-button">
            Submit
          </button>
        )}

        </form>
      </div>
    </>
  );
};

export default Reset;
