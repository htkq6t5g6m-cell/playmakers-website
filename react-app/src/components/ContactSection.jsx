import React from 'react';
import { contactInfo } from '../data/data';

const ContactSection = () => {
  return (
    <section className="contact-cta" id="contact">
      <div className="container">
        <h2 className="section-heading text-center">Ready to Start Your Journey?</h2>
        <p className="cta-text text-center">
          Get in touch to book your first session or learn more about our services.
        </p>
        <div className="cta-buttons">
          <a 
            href={contactInfo.whatsapp}
            className="btn btn-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="btn-icon-img" src="/icons/whatsapp.svg" alt="WhatsApp" />
            WhatsApp
          </a>
          <a 
            href={contactInfo.facebook}
            className="btn btn-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="btn-icon-img" src="/icons/facebook.svg" alt="Facebook" />
            Facebook
          </a>
          <a 
            href={contactInfo.instagram}
            className="btn btn-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="btn-icon-img" src="/icons/instagram.svg" alt="Instagram" />
            Instagram {contactInfo.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
