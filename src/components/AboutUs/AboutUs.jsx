import React from 'react';
import './AboutUs.css';
import defaultImage from '../../assets/new logo shamra.png';

const AboutUs = () => {

    return (
        <div className="aboutus-header">
            <div className="container">
                <div className="col-md-6">
                    <img src={ defaultImage} alt="aboutUs.title"  className="aboutus-image" />
                </div>
                <div className="col-md-6">
                    <h2> About Us  ______</h2>
                    <p> "We believe that the values of the company are not only important but the culmination of the overall success of any company, regardless of size or number of employees. The founders of this company have spent a great deal of time and effort to define the companys ethics and code of conduct not only to build a successful company but to build a company with a strong link with the community and the surrounding environment."</p>
                </div>
            </div>
        </div>
    );
};






export default AboutUs;
