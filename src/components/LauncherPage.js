import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows, faApple, faLinux } from '@fortawesome/free-brands-svg-icons';
import { faTimes, } from '@fortawesome/free-solid-svg-icons';


export default function LauncherPage(props) {

    const close = () => props.pageSetter(0)
    const [confirmed, setConfirmed] = useState(false)

    const handleChange = (event) => setConfirmed(event.target.checked)

    return (
        <div className={`page launcher-page`}>
            <div className="page-actions">
                <FontAwesomeIcon 
                    className="close-page" 
                    icon={faTimes}
                    onClick={() => close()}></FontAwesomeIcon>
            </div>
            <div className="launcher-info">Scegli il tuo sistema operativo</div>
            <div className="tos-label">
                Ho letto il e accetto i&nbsp;
                    <span 
                        className="tos" 
                        onClick={() => window.open("https://wiki.forgottenworld.it/main/Termini", "_blank")}>Termini di Servizio</span>&nbsp;
                <input type="checkbox" onChange={handleChange} />
            </div>
            <div className="launcher-buttons">
                <div className={`btn-launcher btn-download-windows ${confirmed ? "" : "disabled"}`}  onClick={() => {
                    if (confirmed)
                        window.open("https://forgottenworld.it/launcher/ForgottenWorld.exe", "_blank")}}>
                    <FontAwesomeIcon icon={faWindows}></FontAwesomeIcon></div>
                <div className={`btn-launcher btn-download-mac ${confirmed ? "" : "disabled"}`} onClick={() => {
                    if (confirmed)
                        window.open("https://forgottenworld.it/launcher/ForgottenWorld.jar", "_blank")}}>
                    <FontAwesomeIcon icon={faApple}></FontAwesomeIcon></div>
                <div className={`btn-launcher btn-download-linux ${confirmed ? "" : "disabled"}`} onClick={() => {
                    if (confirmed)
                        window.open("https://forgottenworld.it/launcher/ForgottenWorld.jar", "_blank")}}>
                    <FontAwesomeIcon icon={faLinux}></FontAwesomeIcon></div>
            </div>
        </div>
    );
}