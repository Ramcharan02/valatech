import React from 'react';
import '../Styles/footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; 

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Company Info Section */}
        <div className="footer-section about-section">
          <img src="logo_icon.jpg" alt="Vala Tech Logo" className="footer-logo" />
          <p className="footer-description">
          Vala Tech is dedicated to providing high-quality technology and business solutions that help companies stay ahead in a competitive market. With a commitment to excellence, the company leverages the latest technologies and industry best practices to offer scalable and efficient solutions.
          </p>
          <div className="footer-social-icons">
            <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            <FontAwesomeIcon icon={faGoogle} className="social-icon" />
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-section links-section">
          <h3 className="footer-title">Company</h3>
          <ul className="footer-links">
            <li><a href="#Home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact-section">
           <h3 className="footer-title">Get In Touch</h3> 
           <p>hr@valatechnologies.com</p>
         {/* <p>9300 John Hickman Pkwy, Suite 905</p>
          <p>Frisco TX – 75035</p> */}
        </div>
      </div>


      <div className="footer-bottom">
        <p>Copyright © 2024 Vala Tech | Powered by Vala Tech</p>
      </div>
    </footer>
  );
}

export default Footer;
