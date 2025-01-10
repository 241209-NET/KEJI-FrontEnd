import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './Pages/intro/intro.jsx';
import Login from './Pages/register/login/login.jsx';
import SignUp from './Pages/register/signup/signup.jsx';
import Reset from './Pages/register/reset/reset.jsx';
import Homepage from './Pages/homepage/homepage.jsx';
import Account from './Pages/Account/Account.jsx'
import Activity from './Pages/Transaction/Transaction.jsx';
import Statement from './Pages/Statement/Statement.jsx';
import Transaction from './Pages/Transaction/Transaction.jsx';
import TransactionDetails from './Pages/transactionDetail/transactionDetail.jsx';
//import Goals from './Pages/Goals/Goal.jsx';

function App() {

  return (

    <Router>
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/reset' element={<Reset />} />
        <Route path='/homepage' element={<Homepage />} />
        <Route path='/account' element={<Account />} />
        <Route path='/activity' element={<Activity />} />
        <Route path='/Statement' element={<Statement />} />
        <Route path='/Transaction' element={<Transaction />} />
      </Routes>
    </Router>

  );
}

export default App;
