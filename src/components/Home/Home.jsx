import React from 'react';
import logo from '../../assets/shamra.png';
import AboutUs from './AboutUs';
import Moto from './Moto';
import PhotoGallery from './PhotoGallery';
import Services from './Services';
import img1 from '../../assets/construction-services-1.jpg';
import img2 from '../../assets/decoration-works.jpg';
import img3 from '../../assets/Industrial-facilities-works.jpg';
import img4 from '../../assets/construction-works.jpg';
import Features from './Features';
import ContactInfo from './ContactInfo';
import Footer from './Footer';

const Home = () => {
    const images = [img1, img2, img3, img4];
    return (
        <>
            <AboutUs />
            <Moto />
            <Services title="___ Our Services ___"
                desc="Add a fingerprint value in each project to be the first aspect when thinking about the construction" />
            <PhotoGallery images={images} />
            <Features />
            <ContactInfo />
            <Footer />
        </>
    );
}

export default Home;
