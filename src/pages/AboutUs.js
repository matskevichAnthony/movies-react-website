import React from 'react';

import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';
import { pageAnimation } from '../animation';
import { motion } from 'framer-motion';
import ScrollTop from '../components/ScrollTop';
const AboutUs = () => {
    return (
        <motion.div exit="exit" variants={pageAnimation} initial='hidden' animate='show'>
            <ScrollTop />
            <AboutSection />
            <ServicesSection />
            <FaqSection />
        </motion.div>
    )
}

export default AboutUs;