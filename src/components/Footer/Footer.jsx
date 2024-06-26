import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 200, friction: 20 },
});

return (
    <animated.footer style={animationProps} className="footer-container">
    <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn />
        </a>
    </div>
    <p>&copy; {new Date().getFullYear()}  SHAMRA building contracting Copyright © 2023 All rights reserved </p>
    </animated.footer>
);
};

export default Footer;
