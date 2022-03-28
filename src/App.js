import React from 'react';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home';
import Navbar from './components/pages/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <Home/> } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
