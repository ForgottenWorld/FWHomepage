import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SocialLinks from './components/SocialLinks';
import LauncherPage from './components/LauncherPage';
import SostieniciPage from './components/SostieniciPage';
import AcmeBar from './components/AcmeBar';
import ts3logo from './img/tslogo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCopy } from '@fortawesome/free-solid-svg-icons';

function App() {
  const news = <span><a target="blank" href="https://forum.forgottenworld.it/t/apertura-server-riepilogo/5719">Entra in Jàtuldar, l'ottava era di Forgotten World!</a></span>
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
            <img className="logo" alt="ForgottenWorld Logo" src="https://static.forgottenworld.it/logo.webp" />
          </div>
          <div className="server-link">
            jatuldar.forgottenworld.it
            <span onClick={() => navigator.clipboard.writeText("jatuldar.forgottenworld.it")}>
              <FontAwesomeIcon icon={faCopy} />
            </span>
          </div>
          <div className="news-container-container">
            <FontAwesomeIcon icon={faCircle} />
            <div className="news-container"><div className="news">{news}</div></div>
            <FontAwesomeIcon icon={faCircle} />
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
