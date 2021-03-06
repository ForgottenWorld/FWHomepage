import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows, faApple, faLinux } from '@fortawesome/free-brands-svg-icons';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';


export default function LauncherPage(props) {

    const close = () => props.pageSetter(0)
    const [confirmed, setConfirmed] = useState(false)
    const [fadingOut, setFadingOut] = useState(false)

    const handleChange = (event) => setConfirmed(event.target.checked)

    const fadeOut = () => {
        setFadingOut(true);
        setTimeout(() => {
            close();
            setFadingOut(false);
        }, 300);
    }

    return (
        <div className={`page launcher-page ${fadingOut ? "fading" : ""}`}>
            <FontAwesomeIcon 
                className="close-page" 
                icon={faChevronCircleUp}
                onClick={() => fadeOut()} />
            <div className="tos-label">
                Ho letto e accetto i&nbsp;
                    <span 
                        className="tos" 
                        onClick={() => window.open("https://wiki.forgottenworld.it/main/Termini", "_blank")}>Termini di Servizio</span>&nbsp;
                <input type="checkbox" onChange={handleChange} />
            </div>
            <div className="launcher-buttons">
                <div className={`btn-launcher btn-download-windows ${confirmed ? "" : "disabled"}`}  onClick={() => {
                    if (confirmed)
                        window.open("https://github.com/ForgottenWorld/FWHomepage/releases/download/v1.0/ForgottenWorld.exe", "_blank")}}>
                    <FontAwesomeIcon icon={faWindows}></FontAwesomeIcon></div>
                <div className={`btn-launcher btn-download-mac ${confirmed ? "" : "disabled"}`} onClick={() => {
                    if (confirmed)
                        window.open("https://github.com/ForgottenWorld/FWHomepage/releases/download/v1.1/ForgottenWorld.jar", "_blank")}}>
                    <FontAwesomeIcon icon={faApple}></FontAwesomeIcon></div>
                <div className={`btn-launcher btn-download-linux ${confirmed ? "" : "disabled"}`} onClick={() => {
                    if (confirmed)
                        window.open("https://github.com/ForgottenWorld/FWHomepage/releases/download/v1.1/ForgottenWorld.jar", "_blank")}}>
                    <FontAwesomeIcon icon={faLinux}></FontAwesomeIcon></div>
            </div>
        </div>
    );
}