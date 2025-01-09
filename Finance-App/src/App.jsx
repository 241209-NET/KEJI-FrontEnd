import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './intro/intro.jsx';
import Login from './register/login/login.jsx';
import SignUp from './register/signup/signup.jsx';
import Reset from './register/reset/reset.jsx';
//import Homepage from './homepage/homepage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/reset' element={<Reset />} />
      </Routes>
    </Router>
    // <Homepage />

  );
}

export default App;
