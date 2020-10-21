import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SocialLinks from './components/SocialLinks';
import LauncherPage from './components/LauncherPage';
import SostieniciPage from './components/SostieniciPage';
import AcmeBar from './components/AcmeBar';
import ts3logo from './img/tslogo.svg';

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
      <AcmeBar />
      <div className="app-body">
        <div className="app-main-col">
          <div className="logo-container">
            <img className="logo" alt="ForgottenWorld Logo" src="https://cdn.statically.io/gh/ForgottenWorld/images/58b85a5a/logo.webp" />
          </div>
          <Navbar pageSetter={setCurPage} />
          {
            curPage
              ? getPage(curPage)
              : null
          }
          <a href="ts3server://ts3.forgottenworld.it"><img className="ts3-logo" src={ts3logo} alt="TeamSpeak Logo"></img></a>
          <SocialLinks />
          <div className="tos-footer" onClick={() => window.open("https://wiki.forgottenworld.it/main/Termini", "_blank")}>Termini di Servizio</div>
        </div>
      </div>
    </div>
  );
}

export default App;
