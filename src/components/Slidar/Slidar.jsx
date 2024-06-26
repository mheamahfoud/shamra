import React from 'react';
import video from '../../assets/video.mp4';
import './Slidar.css';
import { useLang } from '../../i18n/Layout18n';

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