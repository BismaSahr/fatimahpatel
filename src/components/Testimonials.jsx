import React from 'react';
import './Testimonials.css';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import avatarImg from '../assets/avatar.jpg'; // Path to your dmitry-vechorko image

const testimonialData = [
    {
        id: 1,
        text: "“I've been using this for a few months now and it has completely changed the way I work. The UI is intuitive and the features are exactly what I needed.”"
    },
    {
        id: 2,
        text: "“Incredible attention to detail. The custom layouts and responsive design made our transition seamless. Highly recommended for any scaling business.”"
    },
    {
        id: 3,
        text: "“The best decision we made this year. User research was clearly a priority, and it shows in every interaction. Simply brilliant work.”"
    }
];

const Testimonials = () => {
    return (
        <section className="testimonial-section">
            {/* Background Decorative Patterns - Left Side */}
            <div className="bg-pattern left-pattern">
                <div className="ellipse-purple"></div>
                <div className="ellipse-blue"></div>
                <div className="rect-cyan"></div>
            </div>

            {/* Background Decorative Patterns - Right Side */}
            <div className="bg-pattern right-pattern">
                <div className="ellipse-purple"></div>
                <div className="ellipse-blue"></div>
                <div className="rect-cyan"></div>
            </div>

            <div className="container position-relative h-100 mt-5">
                <h2 className="testimonial-title"><strong>Customer reviews</strong></h2>

                <div className="testimonial-items">
                    {testimonialData.map((item) => (
                        <div key={item.id} className="testimonial-item">
                            <div className="avatar-wrapper">
                                <img src={avatarImg} alt="User Avatar" className="avatar-img" />
                            </div>
                            <div className="testimonial-body">
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="testimonial-arrows">
                    <button className="arrow-btn btn-prev">
                        <FiArrowLeft />
                    </button>
                    <button className="arrow-btn btn-next">
                        <FiArrowRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;