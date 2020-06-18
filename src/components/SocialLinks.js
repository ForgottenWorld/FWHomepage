import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faTelegram, faDiscord, faTeamspeak } from '@fortawesome/free-brands-svg-icons'

export default function SocialLinks() {
    return (
        <div className="social-links">
            <div className="social-link sl-teamspeak" onClick={() => window.open("ts3server://ts3.forgottenworld.it", "_blank")}>
                <FontAwesomeIcon icon={faTeamspeak}></FontAwesomeIcon>
            </div>
            <div className="social-link sl-twitter" onClick={() => window.open("https://twitter.com/forgottentweet", "_blank")}>
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </div>
            <div className="social-link sl-facebook" onClick={() => window.open("https://www.facebook.com/ForgottenWorldCommunity/", "_blank")}>
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
            </div>
            <div className="social-link sl-instagram" onClick={() => window.open("https://www.instagram.com/forgottenworld/?hl=it", "_blank")}>
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </div>
            <div className="social-link sl-telegram" onClick={() => window.open("https://t.me/ForgottenWorldCommunity", "_blank")}>
                <FontAwesomeIcon icon={faTelegram}></FontAwesomeIcon>
            </div>
            <div className="social-link sl-discord" onClick={() => window.open("https://discord.gg/HdXcnBC", "_blank")}>
                <FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon>
            </div>
        </div>
    );
}