import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';


export default function PayPalButton() {
    return (
        <form className="paypal-form" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="W23KCXH7476DE" />
            <button 
                className="sostienici-button paypal-button" 
                type="submit" 
                name="submit" 
                alt="PayPal è il metodo rapido e sicuro per pagare e farsi pagare online.">
                <FontAwesomeIcon icon={faPaypal} /><span>Dona con PayPal</span>
            </button>
        </form>
    )
}