import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import './Graph.css';

const Graph = ({ img, title, desc }) => {
const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

return (
    <animated.div style={props} className="graph-container">
    <img src={img} alt={title} className="graph-image" />
    <h3 className="graph-title">{title}</h3>
    <p className="graph-desc">{desc}</p>
    </animated.div>
);
};

export default Graph;
