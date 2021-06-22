import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPatreon } from '@fortawesome/free-brands-svg-icons';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import PayPalButton from './PayPalButton';


export default function SostieniciPage(props) {

    const close = () => props.pageSetter(0);
    
    const [fadingOut, setFadingOut] = useState(false);

    const fadeOut = () => {
        setFadingOut(true);
        setTimeout(() => {
            close();
            setFadingOut(false);
        }, 300);
    }

    return (
        <div className={`page sostienici-page ${fadingOut ? "fading" : ""}`}>
            <FontAwesomeIcon 
                className="close-page" 
                icon={faChevronCircleUp}
                onClick={() => fadeOut()} />
{/*             <div className="sostienici-info">
                <div className="sostienici-postepay">
                    Dona ricaricando Postepay<br/>
                    Nei Bar ed in Posta<br/>
                    <span className="numero-postepay"><b>Numero:</b> BLANK<br/>
                    <b>CodFiscale:</b> BLANK</span>
                </div>
            </div>
            <div className="oppure">- oppure -</div> */}
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

