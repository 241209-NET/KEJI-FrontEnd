import "./Homepage.css";

const Homepage = () => {

  return (
    <div id ="home-container">
      <header id="homepage-header">
        <div id ="homepage-content">
          <h1>Welcome to Keji Financing App</h1>
          <p>Your trusted solution for seamless banking, savings, and financial goals.</p>
        </div>
      </header>

      <section id="features-section">
        <h2>Our Features</h2>
        <div id="features-list">
          <div className="feature-item">
            <h3>Create Account</h3>
            <p>Join us to manage your finances easily and securely.</p>
          </div>
          <div className="feature-item">
            <h3>Currency Conversion</h3>
            <p>Convert currencies on the go with live exchange rates.</p>
          </div>
          <div className="feature-item">
            <h3>Track Your Goals</h3>
            <p>Set and achieve financial goals with our tracking tools.</p>
          </div>
        </div>
      </section>

      <section id="cta-section">
        <h2>Ready to Manage Your Finances?</h2>
        <button id ="cta-button">Sign Up Now</button>
      </section>
    </div>
  );
};

export default Homepage;
