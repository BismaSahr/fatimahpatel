import React from 'react';
import CTA from './CTA';

import FAQ from './FAQ';

import Footer from './Footer';
import BottomBar from './BottomBar';


const Bottom = () => {
    return (
        <section className="bottom-wrapper">
            <div className="container bg-white">
                <CTA />
                <FAQ />
                <Footer />


            </div>

            <BottomBar />




        </section>
    );
};

export default Bottom;