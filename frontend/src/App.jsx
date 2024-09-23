import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Logout from './pages/Logout/Logout';
import Passwordreset from './pages/Passwordreset/Passwordreset';
import Passwordresetconfirm from './pages/Passwordresetconfirm/Passwordresetconfirm';
import Signup from './pages/Signup/Signup';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/password-reset' element={<Passwordreset />} />
        <Route path='/password-reset-confirm' element={<Passwordresetconfirm />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
