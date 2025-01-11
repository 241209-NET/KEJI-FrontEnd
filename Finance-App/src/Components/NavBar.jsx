import "./Header_NavBar.css"
import logo from "./keji-logo.png"
import { useNavigate } from 'react-router-dom';
const NavBar = () => {
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
    const handleTransaction= () => {
        navigate('/Transaction');
    };

    const handleGoals= () => {
        navigate('/goal');
    };

    return (
        <nav class="nav-bar">
            <ul class="nav-links">
                <li><button onClick={handleHome}>Home</button></li>
                <li><button onClick={handleAccount}>Account</button></li>
                <li><button onClick={handleActivity}>Activity</button></li>
                <li><button onClick={handleStatement}>Statements</button></li>
                <li><button onClick={handleTransaction}>Make Transaction</button></li>
                <li><button onClick={handleGoals}>Goals</button></li>
                <li><img name = "logo" class = "logo" src={logo} alt="Logo"/><label for = "logo" class = "logo-label">Keji</label></li>
            </ul>
        </nav>
    )
}

export default NavBar;