import React from 'react';
import './App.css';
import logo from './logo.png';
import Navbar from './components/Navbar';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div className="app">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <Navbar></Navbar>
      <SocialLinks></SocialLinks>
    </div>
  );
}

export default App;
