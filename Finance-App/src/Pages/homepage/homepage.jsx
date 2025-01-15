import "./homepage.css";
import NavBar from "../../Components/NavBar.jsx"
import { useLocation } from "react-router-dom"

const Homepage = () => {

  const { state } = useLocation();
  
  console.log(state);

  return (
    <div>
      <NavBar/>
      <main className="main-content">
        <h1>Dashboard</h1>
        <div className="cards-container">

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