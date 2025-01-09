import "./intro.css";
import { useNavigate } from "react-router-dom";

const Intro = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  }

  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Keji Banking App</h1>
          <p>Your trusted solution for seamless banking, savings, and financial goals.</p>
        </div>
      </header>

      <section className="features-section">
        <h2>Our Features</h2>
        <div className="features-list">
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

      <section className="cta-section">
        <h2>Ready to Manage Your Finances?</h2>
        <button onClick={handleLogin} className="cta-button">Sign In</button>
      </section>
    </div>
  );
};

export default Intro;
