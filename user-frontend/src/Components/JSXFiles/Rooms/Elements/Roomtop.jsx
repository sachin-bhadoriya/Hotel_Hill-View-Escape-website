import React from 'react'
import rooms_top from '../../../../assets/Images/inside/rooms_top.mp4'
import './../../../CSSFile/RoomCSS/Roomtop.css'

const Roomtop = () => {
  return (
    <>
      <div className='home_top_video_container'>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="home_top_video_bg"
        >
          <source src={rooms_top} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div data-aos="fade-up" className="home_top_elements">
          <div className="home_top_content">
            {/* all css define in app.css */}
            <h3 data-aos="slide-right" className='home_top_heading_size'>WELCOME TO</h3>
            <h1 data-aos="slide-right" className='home_top_heading_size'>HILLVIEW ESCAPE</h1>
            <h3 data-aos="slide-right" className='home_top_heading_size'>HOTELS</h3>
            <p data-aos="slide-right" className='home_top_para'>Discover unmatched elegance, peaceful surroundings, and personalized luxury — all in the heart of nature.</p>
          </div>
          <div className="home_top_btn">
            <button><span>BOOK NOW</span></button>
          </div>
        </div>
        <div className='container text-center'>
          <h2 data-aos="fade-up" className='facilities-heading'>ROOMS AND RATES</h2>
          <p data-aos="fade-up" className='facilities-para'>At Hillview Escape, we believe your stay should be as memorable as the breathtaking surroundings. Each of our rooms — from the opulent Presidential Suite to the cozy Budget Premium Rooms — is designed to offer a unique blend of luxury, comfort, and style. Whether you're looking for spacious privacy, scenic views, or high-end amenities, our rooms are tailored to meet every need. With competitive rates and exclusive services, we ensure a seamless and unforgettable experience for every guest.</p>
        </div>
      </div>
    </>
  )
}

export default Roomtop;