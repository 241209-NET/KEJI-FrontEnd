import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './intro/intro.jsx';
import Login from './register/login/login.jsx';
import SignUp from './register/signup/signup.jsx';
import Reset from './register/reset/reset.jsx';
import Homepage from './homepage/homepage.jsx';
import Account from './Account/Account.jsx'
import Activity from './Transaction/Transaction.jsx'
// import Statement from './Statement/Statement.jsx';
// import TransactionDetails from './transactionDetail/transactionDetail.jsx';
// import Goals from './ Goals/Goal.jsx';

function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/reset' element={<Reset />} />
        <Route path='/homepage' element={<Homepage />} />
        <Route path='/account' element={<Account />} />
        <Route path='/activity' element={<Activity />} />
      </Routes>
    </Router>

  );
}

export default App;
