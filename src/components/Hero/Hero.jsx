import React from 'react';
import './Hero.css';

const Hero = ({ video }) => {
    return (
        <div className="hero">
            <video src={video} controls />
        </div>
    );
};

export default Hero;
