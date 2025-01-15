import "./reset.css";
import { useState } from "react";
import axios from "axios";

const Reset = () => {
 const [userInfo, setUserInfo] = useState(null); // Store user info object
  const [isValidResponse, setIsValidResponse] = useState(false); // Track if the response is valid
  const [errorMessage, setErrorMessage] = useState(""); // Track validation or server error messages

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Not a valid email");
      setUserInfo(null); // Reset user info
      setIsValidResponse(false); // Ensure no valid response is shown
      return;
    }

    // Clear previous error message
    setErrorMessage("");

    try {
      const response = await axios.get(
        `http://localhost:5023/check-email/${encodeURIComponent(email)}`
      );
      const { userName, password } = response.data;
      setUserInfo({ userName, password }); // Store the username and password
      setIsValidResponse(true); // Valid response received
    } catch (error) {
      setErrorMessage(
        error.response && error.response.status === 404
          ? "Email does not exist."
          : "An error occurred. Please try again."
      );
      setUserInfo(null); // Reset user info
      setIsValidResponse(false); // Invalid response
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
          {/* <button type="submit">Submit</button> */}

        {/* Display the div only if the response is valid */}
        {isValidResponse && (
          <div id="output-container">
            <p className="output-message">Username: {userInfo.userName}</p>
            <p className="output-message">Password: {userInfo.password}</p>
          </div>
        )}

        {/* Display validation error or server error message */}
        {errorMessage && (
          <div className="error-container">
            <p className="error-message">{errorMessage}</p>
          </div>
        )}

        {!isValidResponse && ( // Hide submit button if the response is valid
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
