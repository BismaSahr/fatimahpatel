import React from 'react';
import './bottom3.css';
import { FiArrowRight } from 'react-icons/fi';

const bottom3 = () => {
    return (
        <section className="cta-section">
            <div className="custom-container">
                <div className="cta-stack-wrapper">

                    {/* Rectangle 345 - The Light Blue Background Card */}
                    <div className="cta-bg-rectangle"></div>

                    {/* The Main Purple CTA Card */}
                    <div className="cta-card">
                        {/* Decorative Background Lines (Vectors) */}
                        <div className="cta-lines">
                            <svg width="100%" height="100%" viewBox="0 0 1180 382" fill="none" preserveAspectRatio="none">
                                <ellipse cx="589.845" cy="191" rx="589.845" ry="167.07" stroke="#BECED8" strokeOpacity="0.25" />
                                <ellipse cx="589.845" cy="191" rx="589.845" ry="144.405" stroke="#BECED8" strokeOpacity="0.25" />
                                <ellipse cx="589.845" cy="191" rx="589.845" ry="191" stroke="#BECED8" strokeOpacity="0.25" />
                            </svg>
                        </div>

                        <div className="cta-content">
                            <div className="cta-text-side">
                                <h2 className="cta-title">Try me out, risk free!</h2>
                                <p className="cta-description">
                                    If you’re not happy with the design after the first draft,
                                    I’ll refund your deposit, no questions asked.
                                </p>
                            </div>

                            <div className="cta-button-side">
                                <button className="btn-contact-cta">
                                    Contact <FiArrowRight size={22} strokeWidth={3} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default bottom3;