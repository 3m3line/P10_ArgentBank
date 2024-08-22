import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import useAutoLogout from './useAutoLogout';

import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';

import Navbar from './containers/Navbar';
import Footer from './containers/Footer';

const App = () => {
  useAutoLogout();
  
  return (
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer /> 
    </Router>
  );
};

export default App;
