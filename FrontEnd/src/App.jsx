import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import User from './pages/User';

import Navbar from './containers/Navbar';
import Footer from './containers/Footer';

const App = () => {
  return (
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/User" element={<User />} />
      </Routes>
      <Footer /> 
    </Router>
  );
};

export default App;
