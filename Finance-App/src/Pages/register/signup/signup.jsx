import "./signup.css";

const SignUp = () => {
  return (
    <>
      <div class = "header"/>
      <div className="primary-container">
        <h2>Create an Account</h2>
        <form className="secondary-container">
          <div class="input-line">
            <label htmlFor="email"class="field-label">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your Email Address"class="input-box" required />
          </div>

          <div class="input-line">
            <label htmlFor="username"class="field-label">Username:</label>
            <input type="text" id="username" name="username" placeholder="Enter your Username" class="input-box"required />
          </div>

          <div class="input-line">
            <label htmlFor="password"class="field-label">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your Password"class="input-box" required />
          </div>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
