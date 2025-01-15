import "./Header_NavBar.css"
import logo from "./keji-logo.png"
import { useLocation, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();
    const {state} = useLocation();

    const handleHome = () => {
        navigate('/Homepage', {state: state});
    };
    const handleAccount = () => {
        navigate('/Account', {state: state});
    };
    const handleActivity = () => {
        navigate('/Activity', {state: state});
    };
    const handleStatement= () => {
        navigate('/Statement', {state: state});
    };
    const handleTransaction= () => {
        navigate('/Transaction', {state: state});
    };
    const handleGoals= () => {
        navigate('/Goal');
    };
    const handleExchange= () => {
        navigate('/Exchange', {state: state});
    };

    return (
        <nav className="nav-bar">
            <ul className="nav-links">
            <li><button onClick={handleAccount}>Account</button></li>
                <li><button onClick={handleHome}>Home</button></li>
                <li><button onClick={handleTransaction}>Withdraw/Deposit</button></li>
                <li><button onClick={handleActivity}>Activity</button></li>
                <li><button onClick={handleStatement}>Statements</button></li>
                <li><button onClick={handleExchange}>Exchange</button></li>
                <li><button onClick={handleGoals}>Goals</button></li>
                <li><img name = "logo" className = "logo" src={logo} alt="Logo"/><label htmlFor = "logo" className = "logo-label">Keji</label></li>
            </ul>
        </nav>
    )
}

export default NavBar;