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
      <div className="reset-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Enter your Email Address:</label>
          <input type="email" id="email" name="email" placeholder="Enter your Email Address"required />
          <button type="submit">Submit</button>
        </form>
      </div>
  );
};

export default Reset;
