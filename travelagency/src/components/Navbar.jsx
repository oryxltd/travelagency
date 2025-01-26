// Devansh is working on this file

import React from "react";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import tempImg from "../assets/images/tempImg.jpg";
import "../components/navbar.css";

export default function Navbar() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);

  // hide funtion
  const [hidden, setHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > lastScrollTop) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div className={`navbar ${hidden ? "hidden" : ""}`}>
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
          <FaWhatsapp size={30} color="green"/>
        </a>
      </div>
    </div>
  );
}
