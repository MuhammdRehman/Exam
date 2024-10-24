
import React from 'react';
import '../stylesheets/footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-flex">
                    <div className="footer-column">
                        <h5 className="footer-heading">Movie Manager</h5>
                        <ul className="footer-link-list">
                            <li><a href="#!" className="footer-link">About Us</a></li>
                            <li><a href="#!" className="footer-link">Privacy</a></li>
                            <li><a href="#!" className="footer-link">Terms</a></li>
                            <li><a href="#!" className="footer-link">Help</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h5 className="footer-heading">Support</h5>
                        <ul className="footer-link-list">
                            <li><a href="#!" className="footer-link">Help Center</a></li>
                            <li><a href="#!" className="footer-link">Trust & Safety</a></li>
                            <li><a href="#!" className="footer-link">Accessibility</a></li>
                        </ul>
                    </div>

                    
                </div>

                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <p>&copy; {new Date().getFullYear()} Movie Manager, Inc. All rights reserved.</p>
                    </div>
                    <div className="footer-socials">
                        <a href="#!" className="footer-social-icon"><FaFacebookF /></a>
                        <a href="#!" className="footer-social-icon"><FaTwitter /></a>
                        <a href="#!" className="footer-social-icon"><FaInstagram /></a>
                        <a href="#!" className="footer-social-icon"><FaPinterestP /></a>
                        <a href="#!" className="footer-social-icon"><FaLinkedinIn /></a>
                    </div>
                   
                </div>
            </div>
        </footer>
    );
};

export default Footer;
