import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useSpring, animated } from '@react-spring/web';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './PhotoGallery.css';

const PhotoGallery = ({ images }) => {
const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

return (
    <animated.div style={fadeIn} className="photo-gallery">
    <h2 className="gallery-title">___ Our Projects ___</h2>
    <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000}
        transitionTime={1000}
        dynamicHeight
    >
        {images.map((img, index) => (
    <div key={index} className="gallery-image-container">
            <img src={img} alt={`Project ${index + 1}`} className="gallery-image" />
        </div>
        ))}
    </Carousel>
    </animated.div>
);
};

export default PhotoGallery;
/*
<Route path="/dashboard/about-us" element={<EditAboutUs />} />
                <Route path="/dashboard/moto" element={<EditMoto />} />
                <Route path="/dashboard/services" element={<EditServices />} />
                <Route path="/dashboard/EditPhotoGallery" element={<EditPhotoGallery />} />
                <Route path="/dashboard/EditFeatures" element={<EditFeatures />} />*/
