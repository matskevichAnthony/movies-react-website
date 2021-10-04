import React from 'react';
import home1 from '../img/home1.png'
const AboutSection = () => {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div class="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div class="hide">
                        <h2>your <span>dreams</span> come</h2>
                    </div>
                    <div class="hide">
                        <h2>true</h2>
                    </div>
                </div>
                <p>Contact us for any photography or
                    videography ideas that you have!
                    We have professionals with amazing skills.
                </p>
                <button>Contact Us</button>
            </div>
            <div class="image">
                <img src={home1} alt="" />
            </div>
        </div>
    )
}

export default AboutSection;