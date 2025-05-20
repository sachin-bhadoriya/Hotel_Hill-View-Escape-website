import React from 'react'
import room_top from '../../../../assets/Images/inside/home_top.mp4'
import './../../../CSSFile/FacilitiesCSS/Facilitiestop.css'
import {Link} from 'react-router-dom'
const Facilitiestop = () => {
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
          <source src={room_top} type="video/mp4" />
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
           <Link to="/room-booking"><button><span>BOOK NOW</span></button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Facilitiestop;