import React from 'react';
import { contactInfo } from '../data/data';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          © 2025 PLAYMAKERS - Cheshire Football Coaching. All rights reserved.
        </p>
        <p className="footer-contact">
          📞 {contactInfo.phoneFormatted} | 📱 Instagram: {contactInfo.instagramHandle}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
