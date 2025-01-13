import "./homepage.css";
import NavBar from "../../Components/NavBar.jsx"

const Homepage = () => {
  return (
    <div>
      <NavBar/>
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