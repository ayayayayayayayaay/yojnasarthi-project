import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Quick Links</h4>
            <p><a href="#privacy">Privacy Policy</a></p>
            <p><a href="#terms">Terms of Service</a></p>
            <p><a href="#accessibility">Accessibility</a></p>
          </div>
          <div className="footer-section">
            <h4>Contact Information</h4>
            <p><i className="fas fa-envelope"></i> info@gov.in</p>
            <p><i className="fas fa-phone"></i> 1800-XXX-XXXX</p>
            <p><i className="fas fa-map-marker-alt"></i> New Delhi, India</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <p><a href="#facebook"><i className="fab fa-facebook"></i> Facebook</a></p>
            <p><a href="#twitter"><i className="fab fa-twitter"></i> Twitter</a></p>
            <p><a href="#youtube"><i className="fab fa-youtube"></i> YouTube</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Government of India. All rights reserved.</p>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;