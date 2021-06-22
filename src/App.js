import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SocialLinks from './components/SocialLinks';
import LauncherPage from './components/LauncherPage';
import SostieniciPage from './components/SostieniciPage';
import AcmeBar from './components/AcmeBar';
import ts3logo from './img/tslogo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function App() {
  const news = <span><a target="blank" href="https://forum.forgottenworld.it/t/amagami-fondazione-citta-supernomachia-obiettivi-riv/4376/7">Pubblicati i requisiti per fondare una città!</a>&nbsp;&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;&nbsp;<a target="blank" href="https://forum.forgottenworld.it/t/supernomachia-parte-1-linizio-della-fine/4378/2">Leggi la Supernomachia!</a></span>
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

  const getPayPalDonationButton = () => (
    <form action="https://www.paypal.com/donate" class="paypal-donation-btn" method="post" target="_top">
      <input type="hidden" name="hosted_button_id" value="73UG3CVWRSDPW" />
      <input type="image" src="https://www.paypalobjects.com/en_US/IT/i/btn/btn_donateCC_LG.gif" 
      border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
      <img alt="" border="0" src="https://www.paypal.com/en_IT/i/scr/pixel.gif" width="1" height="1" />
    </form>
  );

  return (
    <div className="app">
      <AcmeBar />
      <div className="app-body">
        <div className="app-main-col">
          <div className="logo-container">
            <img className="logo" alt="ForgottenWorld Logo" src="https://static.forgottenworld.it/logo.webp" />
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
          { getPayPalDonationButton() }
          <SocialLinks />
          <div className="tos-footer" onClick={() => window.open("https://wiki.forgottenworld.it/main/Termini", "_blank")}>Termini di Servizio</div>
        </div>
      </div>
    </div>
  );
}

export default App;
