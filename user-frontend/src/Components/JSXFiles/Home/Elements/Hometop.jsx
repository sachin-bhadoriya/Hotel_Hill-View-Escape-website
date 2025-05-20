import React from 'react'
// import image1 from '../../../../assets/Images/inside/outside1.jpg'

import facilities_top from '../../../../assets/Images/inside/facilities_top.mp4'
import '../../../CSSFile/HomeCSS/Hometop.css'

const Hometop = () => {
  return (
    <div className="home_top_video_container">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="home_top_video_bg"
      >
        <source src={facilities_top} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div data-aos="fade-up" className="home_top_elements">
        <div className="home_top_content">
          <h3 data-aos="slide-right" className="home_top_heading_size">WELCOME TO</h3>
          <h1 data-aos="slide-right" className="home_top_heading_size">HILLVIEW ESCAPE</h1>
          <h3 data-aos="slide-right" className="home_top_heading_size">HOTELS</h3>
          <p data-aos="slide-right" className="home_top_para">
            Discover unmatched elegance, peaceful surroundings, and personalized luxury — all in the heart of nature.
          </p>
        </div>
        <div className="home_top_btn">
          <button><span>BOOK NOW</span></button>
        </div>
      </div>
    </div>
  );
};

export default Hometop;
