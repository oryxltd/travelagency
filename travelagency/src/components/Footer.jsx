import React from 'react';
import './footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import jklogo1 from '../assets/images/jklogo1.png'; // Assuming your logo path

function Footer() {
  return (
    <footer className="footer-redesigned">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo-info">
            <div className="footer-logo">
              <img src={jklogo1} alt="JK Tours Logo" />
              <h2>JK Tours</h2>
            </div>
            <p className="footer-description">
              Discover incredible journeys and create lasting memories with JK Tours.
              We offer a wide range of travel experiences tailored to your interests.
            </p>
            <div className="social-icons">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://wa.me/+917581867478" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><HashLink smooth to="/">Home</HashLink></li>
              <li><HashLink smooth to="/destination">Destination</HashLink></li>
              <li><HashLink smooth to="/contact#about">About Us</HashLink></li>
              <li><HashLink smooth to="/contact#contact">Contact Us</HashLink></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Support</h3>
            <ul>
              <li><HashLink smooth to="/privacy-policy">Privacy Policy</HashLink></li>
              <li><HashLink smooth to="/terms-conditions">Terms & Conditions</HashLink></li>
              <li><HashLink smooth to="/faq">FAQ</HashLink></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>Email: info@jktours.com</p>
            <p>Phone: +91 7581 867478</p>
            <p>Address: [Your Company Address Here]</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} JK Tours. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;