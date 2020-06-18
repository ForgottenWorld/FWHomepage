import React, { useState } from 'react';
import './App.css';
import logo from './logo.png';
import Navbar from './components/Navbar';
import SocialLinks from './components/SocialLinks';
import LauncherPage from './components/LauncherPage';
import SostieniciPage from './components/SostieniciPage';

function App() {
  const [curPage, setCurPage] = useState(null);

  const getPage = (pageId) => {
    switch (pageId) {
      case 1:
        return <LauncherPage pageSetter={setCurPage}/>
      case 2:
        return <SostieniciPage pageSetter={setCurPage}/>
      default:
        return null
    }
  }

  return (
    <div className="app">
      <div className="logo-container">
        <img className={`logo ${curPage ? "shrunk" : ""}`} alt="ForgottenWorld Logo" src={logo} />
      </div>
      <Navbar pageSetter={setCurPage}></Navbar>
      {curPage
        ? getPage(curPage)
        : null
      }
      <SocialLinks></SocialLinks>
    </div>
  );
}

export default App;
