// import React from 'react';
// import { FaLinkedinIn, FaBehance } from 'react-icons/fa';
// import { SiUpwork } from 'react-icons/si';
// import './Hero.css';

// const Hero = () => {
//   return (
//     <section className="hero-section">
//       {/* Background Decor */}
//       <div className="blur-gradient"></div>

//       <div className="container hero-wrapper">
//         <div className="row align-items-center">

//           {/* Left Content */}
//           <div className="col-lg-6 hero-content">
//             <h1 className="hero-title">
//               HEY! I’m <span className="fw-bold">Fatemah Patel,</span><br />
//               <span className="fw-bold">UI/UX & Visual</span> designer
//             </h1>
//             <p className="hero-subtitle">
//               Agency-quality Webflow websites with the personal touch of a freelancer.
//             </p>

//             <div className="social-links-container">
//               <a href="#" className="social-box"><FaLinkedinIn /></a>
//               <a href="#" className="social-box"><FaBehance /></a>
//               <a href="#" className="social-box"><SiUpwork /></a>
//             </div>
//           </div>

//           {/* Right Visual */}
//           <div className="col-lg-6 hero-visual">
//             <div className="main-circle"></div>

//             {/* Floating Figma Shapes */}
//             <div className="shape purple-square"></div>
//             <div className="shape cyan-diamond"></div>
//             <div className="shape blue-dot"></div>
//             <div className="shape purple-dot"></div>

//             <div className="image-wrapper">
//               <img src="laura.png" alt="Profile" className="profile-img" />
//             </div>
//           </div>

//         </div>
//       </div>
//       <div className="hero-bottom-divider"></div>
//     </section>
//   );
// };

// export default Hero;



import React from 'react';
import { FaLinkedinIn, FaBehance } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import './Hero.css';

// Importing assets
import heroLines from '../assets/hereoVectorLines.png';
import profileImg from '../assets/Fatimah.png';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background Decor Layers */}
      <div className="blur-gradient"></div>
      <div
        className="vector-lines-layer"
        style={{ backgroundImage: `url(${heroLines})` }}
      ></div>

      <div className="container hero-container">
        <div className="hero-grid">

          {/* Left Side: Content */}
          <div className="hero-text-block">
            <h1 className="hero-main-title">
              HEY! I’m <span className="bold-text">Fatemah Patel,</span><br />
              <span className="bold-text">UI/UX & Visual</span> designer
            </h1>
            <p className="hero-desc-para">
              Agency-quality Webflow websites with the personal touch of a freelancer.
            </p>

            <div className="social-icon-row">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="icon-box"><FaLinkedinIn /></a>
              <a href="https://behance.net" target="_blank" rel="noreferrer" className="icon-box"><FaBehance /></a>
              <a href="https://upwork.com" target="_blank" rel="noreferrer" className="icon-box"><SiUpwork /></a>
            </div>
          </div>
          <div className="vertical-dashed-divider"></div>
          {/* Right Side: Visual Stack */}
          <div className="hero-visual-stack">
            {/* The Main Backdrop Circle */}
            <div className="bg-circle-backdrop"></div>

            {/* Floating Figma Shapes */}
            <div className="figma-shape purple-box"></div>
            <div className="figma-shape cyan-diamond"></div>
            <div className="figma-shape dot dot-p"></div>
            <div className="figma-shape dot dot-b"></div>
            <div className="figma-shape dot dot-c"></div>

            {/* The Profile Image */}
            <div className="profile-img-container">
              <img src={profileImg} alt="Fatemah Patel" className="hero-profile-image" />
            </div>
          </div>

        </div>
      </div>

      {/* The 1px Dashed Divider at the bottom */}
      <div className="bottom-dashed-divider"></div>
    </section>
  );
};

export default Hero;