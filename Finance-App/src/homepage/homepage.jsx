import "./homepage.css";
import { useNavigate } from 'react-router-dom';

const Homepage = () => {

  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/homepage');
  };

    const handleAccount = () => {
    navigate('/account');
  };

  const handleActivity = () => {
    navigate('/activity');
  };

  const handleStatement= () => {
    navigate('/statement');
  };

  const handleGoals= () => {
    navigate('/goal');
  };

  return (
    <div className="app-container">
      <nav className="sidebar">
        <h2 className="user-name">Welcome, User</h2>
        <ul className="nav-links">
          <li><button onClick={handleHome}>Home</button></li>
          <li><button onClick={handleAccount}>Account</button></li>
          <li><button onClick={handleActivity}>Activity</button></li>
          <li><button onClick={handleStatement}>Statements</button></li>
          <li><button onClick={handleGoals}>Goals</button></li>
        </ul>
      </nav>

      <main className="main-content">
        <h1>Dashboard</h1>
        <div className="cards-container">
          {/* Card 1: Account Balance */}
          <div className="card">
            <h3>Account Balance</h3>
          </div>

          <div className="card">
            <h3>Recent Statement</h3>
          </div>

          <div className="card">
            <h3>Recent Activity</h3>
          </div>

          <div className="card">
            <h3>Recent Goal</h3>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Homepage;