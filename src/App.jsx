import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specialize from './components/Specialize';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Bottom from './components/Bottom';
import './App.css';

function App() {
  return (
    <div className="portfolio-app position-relative">
      <div className="grid-overlay d-none d-lg-flex">
        <div className="grid-line-vertical"></div>
        <div className="grid-line-vertical border-right-0"></div>
      </div>
      <div className="content-wrapper position-relative" style={{ zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <Specialize />
          <Projects />
          <Testimonials />
          <Bottom />
        </main>
      </div>
    </div>
  );
}

export default App;
