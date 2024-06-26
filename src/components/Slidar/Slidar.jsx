import React from 'react';
import video from '../../assets/video.mp4';
import './Slidar.css';

const Slidar = () => {
  return (
    <>
    <div className="slidar">
    <video src={video} alt="slidar" className="video" />
    </div>

    </>
  );
}
export default Slidar;