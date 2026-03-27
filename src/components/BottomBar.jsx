import React from 'react';
import './BottomBar.css';

const BottomBar = () => {
    return (
        <div className="bottom-bar-wrapper">
            <div className="bottom-bar-container">
                <div className="bottom-left">
                    <p className="made-by">Made with ❤️️ by me.</p>
                </div>

                <div className="bottom-right">
                    <span className="question-text">Got a question?</span>
                    <a href="mailto:Fatemah.patel@orientsoftsolutions.com" className="email-link">
                        Fatemah.patel@orientsoftsolutions.com
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BottomBar;