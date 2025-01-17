import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Exchange from './Pages/Exchange/Exchange.jsx';
import Homepage from './Pages/homepage/homepage.jsx';
import Intro from './Pages/intro/intro.jsx';
import Login from './Pages/register/login/login.jsx';
import Reset from './Pages/register/reset/reset.jsx';
import SignUp from './Pages/register/signup/signup.jsx';
import Statement from './Pages/Statement/Statement.jsx';
import Transaction from './Pages/Transaction/Transaction.jsx';
import Goals from './Pages/Goals/goals.jsx';
import { GoalProvider } from './context/GoalContext.jsx';

function App() {
  return (
    <GoalProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/Exchange' element={<Exchange />} />
          <Route path='/Homepage' element={<Homepage />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Reset' element={<Reset />} />
          <Route path='/Signup' element={<SignUp />} />
          <Route path='/Statement' element={<Statement />} />
          <Route path='/Transaction' element={<Transaction />} />
          <Route path='/Goals' element={<Goals />} />
        </Routes>
      </Router>
    </GoalProvider>
  );
}

export default App;
