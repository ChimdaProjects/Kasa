import React from "react";
import logo from "../../assets/logo_footer.svg"
import "./footer.scss"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <img 
                    className="footer-logo"
                    src = { logo }
                    alt ="logo du footer"
            />
                <p className="footer-text">
                    2022 Kasa. All rights reserved
                </p>
            </div>
           
        </footer>
    )
}
export default Footer;