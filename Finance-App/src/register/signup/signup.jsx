import "./signup.css";

const SignUp = () => {
  return (
    <div className="reset-container">
      <form className="reset-form">
        <label htmlFor="email">Enter your Email Address:</label>
        <input type="email" id="email" name="email" placeholder="Enter your Email Address" required />

        <label htmlFor="username">Enter your Username:</label>
        <input type="text" id="username" name="username" placeholder="Enter your Username" required />

        <label htmlFor="password">Enter your Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter your Password" required />

        <button type="submit" className="reset-submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
