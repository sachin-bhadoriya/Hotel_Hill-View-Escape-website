import React from 'react'
import '../../CSSFile/Footer.css'
import { Link, useLocation } from "react-router-dom";

const Footer = () => {

  const location = useLocation();

  return (
    <div className='Footeritem'>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section brand">
            <h2>Hillview Escape</h2>
            <p>Your luxury stay in the lap of nature.</p>
          </div>

          <div className="footer-section links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link className={location.pathname === '/' ? 'link-active' : 'link-deactive'} to="/">Home</Link></li>
              <li><Link className={location.pathname === '/Facilities' ? 'link-active' : 'link-deactive'} to="/Facilities">Facilities</Link></li>
              <li><Link className={location.pathname === '/Rooms' ? 'link-active' : 'link-deactive'} to="/Rooms">Rooms</Link></li>
              <li><Link className={location.pathname === '/Contact' ? 'link-active' : 'link-deactive'} to="/Contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h4>Contact</h4>
            <p><i className="fas fa-phone-alt"></i> +91 98765 43210</p>
            <p><i className="fas fa-envelope"></i> info@hillviewescape.com</p>
            <p><i className="fas fa-map-marker-alt"></i> Gwalior, Madhya Pradesh</p>
          </div>

          <div className="footer-section social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Hillview Escape. All rights reserved.</p>
        </div>
      </footer>

    </div>
  )
}

export default Footer