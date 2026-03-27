import React from 'react';
import './Footer.css';
import { FiArrowRight } from 'react-icons/fi';
import { FiLinkedin, FiSend } from 'react-icons/fi';
import avatarImg from '../assets/avatar-small.png'; // Use your .png from figma
import LinkdIn from '../assets/linkdIn.png';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container footer-container">

                {/* Left Info Block */}
                <div className="footer-info">
                    <div className="footer-top-row">
                        <img src={avatarImg} alt="Avatar" className="footer-avatar" />
                        <h2 className="footer-headline">Let's build it together.</h2>
                    </div>

                    <div className="btn-linkedin-div footer-buttons">
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn-linkedin">
                            <span>My Linkedin</span>
                            <img src={LinkdIn} alt="" style={{ width: "40px" }} />
                        </a>
                    </div>
                </div>

                {/* Right Mini CTA Block */}
                <div className="footer-cta-stack">
                    {/* The tilted light blue background (Rectangle/div in Figma) */}
                    <div className="footer-cta-bg"></div>

                    {/* The Main Purple Card */}
                    <div className="footer-cta-card">
                        <div className="footer-cta-content">
                            <h3 className="footer-cta-title">Try me out, risk free!</h3>
                            <p className="footer-cta-subtitle">Let's build something great together</p>
                        </div>
                        <button className="footer-cta-btn">
                            Contact <FiArrowRight strokeWidth={3} />

                        </button>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;