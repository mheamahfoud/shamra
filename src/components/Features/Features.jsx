import React from 'react';
import './Features.css';
import { FaRegClock, FaClipboardCheck, FaRulerCombined, FaDollarSign } from 'react-icons/fa';

const features = [
    {
    icon: <FaRegClock size={40} />,
    title: "On-time Delivery",
    desc: "We are committed to delivering on time to ensure customer satisfaction.",
    },
    {
    icon: <FaClipboardCheck size={40} />,
    title: "Precision Execution",
    desc: "We ensure all projects are executed with the utmost precision.",
    },
    {
    icon: <FaRulerCombined size={40} />,
    title: "Accurate Planning",
    desc: "We rely on accurate planning to ensure efficient workflow.",
    },
    {
    icon: <FaDollarSign size={40} />,
    title: "Flexible Pricing",
    desc: "We offer flexible pricing to suit various budgets.",
    },
];


const Features = () => {


return (
    <div className="features-container">
    <h2 className="features-title"> ___ Features ___ </h2>
    <div className="features-grid">
        {features.map((feature, index) => (
        <div  className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-desc">{feature.desc}</p>
        </div>
        ))}
    </div>
    </div>
);
};

export default Features;
