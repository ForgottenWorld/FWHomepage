import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPatreon } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PayPalButton from './PayPalButton';


export default function SostieniciPage(props) {

    const close = () => props.pageSetter(0)

    return (
        <div className={`page sostienici-page`}>
            <div className="page-actions">
                <FontAwesomeIcon 
                    className="close-page" 
                    icon={faTimes}
                    onClick={() => close()}></FontAwesomeIcon>
            </div>
            <div className="sostienici-info">
                <div className="sostienici-postepay">
                    Dona ricaricando Postepay<br/>
                    Nei Bar ed in Posta<br/>
                    <span className="numero-postepay"><b>Numero:</b> BLANK<br/>
                    <b>CodFiscale:</b> BLANK</span>
                </div>
            </div>
            <div className="oppure">- oppure -</div>
            <div className="sostienici-buttons">
                <PayPalButton />
                <div className="sostienici-button patreon-button" onClick={() => 
                        window.open("https://www.patreon.com/ForgottenWorldCommunity", "_blank")}>
                    <FontAwesomeIcon icon={faPatreon}  />
                    <span>Diventa un Patreon</span>
                </div>
            </div>
        </div>
    );
}

