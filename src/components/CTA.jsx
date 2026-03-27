import React from 'react';
import './CTA.css';
import { FiArrowRight } from 'react-icons/fi';

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-stack-wrapper">

                    {/* Rectangle 345 - The Light Blue Background Card */}
                    <div className="cta-bg-rectangle"></div>

                    {/* The Main Purple CTA Card */}
                    <div className="cta-card">
                        <div className="cta-content">
                            <div className="cta-text-side">
                                <h2 className="cta-title">Try me out, risk free!</h2>
                                <p className="cta-description">
                                    If you’re not happy with the design after the first draft,
                                    I’ll refund your deposit, no questions asked.
                                </p>
                            </div>

                            <div className="nav-cta">
                                <a href="#contact" className="btn btn-contact">
                                    Contact <FiArrowRight strokeWidth={3} />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CTA;