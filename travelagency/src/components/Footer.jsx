import React from 'react'
import './footer.css'
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';

function Footer() {
  return (

    <footer className="footer">

      <div className="footer-logo">
          <h2>JK Tours</h2>
        </div>

      <div className="footer-container">
        <div className="footer-main">
          <div className="main-left">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad nisi quia atque similique. Quo omnis similique necessitatibus eligendi fugiat. Debitis.
            </p>
            <h3>follow us</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com/"><FaFacebook/></a>
              <a href="https://chatgpt.com/"><FaTwitter/></a>
              <a href="https://www.instagram.com/"><FaInstagram/></a>
              
            </div>
          </div>

          <div className="main-right">
            <h3>About us</h3>
            <ul>
              <li>Our Story</li>
              <li>Our Team</li>
              <li>Services</li>
              <li>Gallery</li>
            </ul>
          </div>
          <div className="main-right">
            <h3>Support</h3>
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