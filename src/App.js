import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import Blogs from './components/Blogs';
import Careers from './components/Careers';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
//import NavBar from './components/NavBar';

function App() {
  return (

    <div>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>

    </div>

  );
}

export default App;
