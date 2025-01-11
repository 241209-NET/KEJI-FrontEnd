import "./reset.css";

const Reset = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;

    // TODO: Add the code here to call the backend endpoint and check if the email exists.
    // If the email exists, output the username and password.
    console.log("Email submitted:", email);
  };

  return (
    <>
      <div class="header"/>
      <div className="primary-container">
        <h2>Reset Username/Password</h2>
        <form onSubmit={handleSubmit}className="secondary-container">
          <div class="input-line">
            <label htmlFor="email" class="field-label">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your Email Address" class="input-box" required />
            </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Reset;
