import React from 'react'
import './footer.css'
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';

function Footer() {
  return (

    <footer className="footer">

      <div className="footer-logo">
          <h3>JK Tours</h3>
        </div>

      <div className="footer-container">
        <div className="footer-main">
          <div className="main-left">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/> Ad nisi quia atque similique. Quo omnis similique necessitatibus<br/> eligendi fugiat. Debitis.
            </p>
            <h4>follow us</h4>
            <div className="social-icons">
              <a href="https://www.facebook.com/"><FaFacebook/></a>
              <a href="https://chatgpt.com/"><FaTwitter/></a>
              <a href="https://www.instagram.com/"><FaInstagram/></a>
              
            </div>
          </div>

          <div className="main-right">
            <h4>About us</h4>
            <ul>
              <li>Our Story</li>
              <li>Our Team</li>
              <li>Services</li>
              <li>Gallery</li>
            </ul>
          </div>
          <div className="main-right">
            <h4>Support</h4>
            <ul>
              <li>contact us</li>
              <li>privacy policy</li>
              <li>terms and conditions</li>
              <li>FAQ</li>
            </ul>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Travel Company. All Rights Reserved.</p>
      </div>

    </footer>

  )
}

export default Footer