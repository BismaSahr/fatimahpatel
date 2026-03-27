import React from 'react';

const CTAVectors = () => {
    return (
        <div className="cta-lines">
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 1180 382"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Orbital Line 1 */}
                <ellipse
                    cx="590"
                    cy="191"
                    rx="650"
                    ry="220"
                    stroke="#BECED8"
                    strokeOpacity="0.25"
                    strokeWidth="1"
                />
                {/* Orbital Line 2 */}
                <ellipse
                    cx="590"
                    cy="191"
                    rx="650"
                    ry="180"
                    stroke="#BECED8"
                    strokeOpacity="0.25"
                    strokeWidth="1"
                />
                {/* Orbital Line 3 */}
                <ellipse
                    cx="590"
                    cy="210"
                    rx="700"
                    ry="280"
                    stroke="#BECED8"
                    strokeOpacity="0.25"
                    strokeWidth="1"
                />
            </svg>
        </div>
    );
};

export default CTAVectors;