import React from 'react'
import '../../../CSSFile/HomeCSS/About.css'



const About = () => {
  return (
    <>
      {/* there are some classes which define already in index.css mostly are bootstrap like classes */}
      <div data-aos="fade-up">
        <p className='text-center home_bottom_text'>Experience Luxury, Surrounded by Nature.</p>
      </div>
      {/* <h2 data-aos="fade-up" className='facilities-heading text-center'>ABOUT</h2> */}
      <div className="container about_container_heading_main_heading" data-aos="slide-right"><h2><span>Welcome to Hillview Escape – A Luxury Getaway in Nature's Lap</span></h2>
        <p className='about_container_main_content_about_us'>Nestled amidst the tranquil hills and lush greenery, Hillview Escape is not just a hotel, it's a sanctuary where elegance meets comfort. Designed for travelers who seek peace, luxury, and unforgettable experiences, we offer a perfect blend of modern sophistication and natural beauty. Whether you're planning a romantic escape, a family vacation, or a solo retreat, Hillview Escape promises serenity, style, and signature service.</p></div>
      <div className="container about_main_cont">
        <div className="row">
          <div className="w-15"></div>
          <div className="w-30 about_container about_mission" data-aos="slide-right">
            <h2 className='about_container_heading'><span>Mission</span></h2>
            <p className='about_container_para'>To provide our guests with an exceptional luxury experience that harmoniously combines comfort, nature, and hospitality, making every stay unforgettable.
            </p>
          </div>
          <div className="w-10"></div>
          <div className="w-30 about_container about_vission" data-aos="slide-left">
            <h2 className='about_container_heading'><span>Vission</span></h2>
            <p className='about_container_para'>To be recognized as a premier luxury destination in the hills, celebrated for our personalized service, sustainable practices, and timeless elegance.
            </p>
          </div>
          <div className="w-15"></div>
        </div>
      </div>
    </>
  )
}

export default About