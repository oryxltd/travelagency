// Devansh is working on this file


import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import tempImg from "../assets/images/tempImg.jpg";
import "../components/navbar.css";

export default function Navbar() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="logo">
        <img src={tempImg} alt="logoImg" />
        <h5>JK Tours</h5>
      </div>
      <div className={`nav-links ${click ? "active" : ""}`}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/destination">Destination</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="hamburger" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
      <div className="whatsapp">
        <a href="https://wa.me/+917581867478" target="_blank" rel="noreferrer">
          whatsapp
        </a>
      </div>
    </div>
  );
}
