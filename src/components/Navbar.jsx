import React, { useState } from 'react';
import './Navbar.css';
import { FiSend, FiMenu, FiX } from 'react-icons/fi';
import { FiArrowRight } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-container">
      <div className="nav-wrapper">
        {/* Logo Section */}
        <div className="nav-logo">
          Fatemah Patel
        </div>

        {/* Desktop Menu Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About me</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact</a></li>
          {/* Button inside menu for mobile view */}
          <li className="mobile-btn">
            <button className="contact-btn">
              Contact <FiArrowRight strokeWidth={3} />
            </button>
          </li>
        </ul>

        {/* Right Side Button (Desktop) */}
        <div className="nav-actions">
          <button className="contact-btn desktop-only">
            Contact <FiArrowRight strokeWidth={3} />
          </button>

          {/* Mobile Toggle Icon */}
          <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>

      {/* The Horizontal Dashed Line from Figma */}
      <div className="nav-dashed-line"></div>
    </nav>
  );
};

export default Navbar;