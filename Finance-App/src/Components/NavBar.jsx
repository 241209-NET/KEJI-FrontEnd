import "./Header_NavBar.css"
import logo from "./keji-logo.png"
import { useNavigate } from 'react-router-dom';
const NavBar = () => {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/Homepage');
    };
    const handleAccount = () => {
        navigate('/Account');
    };
    const handleActivity = () => {
        navigate('/Activity');
    };
    const handleStatement= () => {
        navigate('/Statement');
    };
    const handleTransaction= () => {
        navigate('/Transaction');
    };
    const handleGoals= () => {
        navigate('/Goal');
    };
    const handleExchange= () => {
        navigate('/Exchange');
    };

    return (
        <nav class="nav-bar">
            <ul class="nav-links">
            <li><button onClick={handleAccount}>Account</button></li>
                <li><button onClick={handleHome}>Home</button></li>
                <li><button onClick={handleTransaction}>Withdraw/Deposit</button></li>
                <li><button onClick={handleActivity}>Activity</button></li>
                <li><button onClick={handleStatement}>Statements</button></li>
                <li><button onClick={handleExchange}>Exchange</button></li>
                <li><button onClick={handleGoals}>Goals</button></li>
                <li><img name = "logo" class = "logo" src={logo} alt="Logo"/><label for = "logo" class = "logo-label">Keji</label></li>
            </ul>
        </nav>
    )
}

export default NavBar;