import React from 'react';
import './Footer.css';
import facebook from '../../../image/Icon/facebook-tile.svg';
import instagram from '../../../image/Icon/instagram-tile.svg'
import whatsApp from '../../../image/Icon/whatsapp-tile.svg'
import twitter from '../../../image/Icon/twitter-tile.svg'
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="contact d-flex 
            justify-content-lg-around
             p-5 ">
                <div className="contact-us">
                    <p><i className="far fa-envelope"></i></p>
                    <h3>Contact Us</h3>
                    <p>info@painCare.org</p>
                </div>
                <div className="Call-us">
                    <p><i className="fas fa-phone"></i></p>
                    <h3>Call Us</h3>
                    <p>Phone: (800) 917-1619 Ext. 102 </p>
                    <p>Fax: (407) 749-0714</p>
                </div>
                <div className="visit-us">
                    <p><i className="fas fa-home"></i></p>
                    <h3>Visit Us</h3>
                    <p>1705 Edgewater Drive, #7778</p>
                    <p>Orlando, FL 32804</p>                    
                </div>
            </div>
            <div>
            <div className="icon">
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={whatsApp} alt="" />
                <img src={twitter} alt="" />
                
            </div>
                <p style={{color:"white", backgroundColor:"black"}}>&copy; Pain Care 2021</p>
            </div>
            </div>
    );
};

export default Footer;