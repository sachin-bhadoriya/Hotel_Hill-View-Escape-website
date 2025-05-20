import React from 'react'
import './../../../CSSFile/ContactCSS/Contacttop.css'
import image6 from '../../../../assets/Images/inside/outside6.jpg'
import contact from '../../../../assets/Images/inside/contact.mp4'

const Contacttop = () => {
  const style = {
    background: `linear-gradient(rgba(26, 25, 25, 0.9), rgba(26, 25, 25, 0.1)), url(${contact})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '90vh',
    width: '100%',
  };

  return (
    <>
      <div className="contact_top_video_container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="contact_top_video_bg"
        >
          <source src={contact} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <span ><h2 className='contact_name_on_top'>Contact Us</h2></span>
      </div>
      <div className="container">
        <div data-aos="fade-up" className="contact-container" style={{ padding: '20px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229085.18222212055!2d78.02608560336613!3d26.21436995527914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5d1792291fb%3A0xff4fb56d65bc3adf!2sGwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1747079620175!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0, width: '100%', borderRadius: '12px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Gwalior Location"
          ></iframe>
        </div>

      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div data-aos="slide-right" className="contact-info-container">
              <h2 className="gold-heading">CONTACT US</h2>

              <div className="contact-detail">
                <i className="fas fa-phone-alt"></i>
                <span>+91 98765 43210</span>
              </div>

              <div className="contact-detail">
                <i className="fas fa-envelope"></i>
                <span>info@hillviewescape.com</span>
              </div>

              <div className="contact-detail">
                <i className="fas fa-map-marker-alt"></i>
                <span>Hillview Escape, Gwalior, Madhya Pradesh, India</span>
              </div>

              <div className="social-icons">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>

          <div className="col-6">
            <form data-aos="slide-left" className="contact-form">
              <h2>Send Us a Message</h2>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" required />
              </div>

              <div className="form-group">
                <label htmlFor="contact">Contact</label>
                <input type="text" id="contact" placeholder="Your Contact Number" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="you@example.com" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4" placeholder="Write your message..." required></textarea>
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contacttop;