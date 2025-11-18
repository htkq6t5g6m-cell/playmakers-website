import React from 'react';
import { contactInfo } from '../data/data';

// Simplified Instagram section: direct link to profile only.
const InstagramFeed = () => {
  return (
    <section className="instagram-feed">
      <div className="container text-center">
        <h2 className="section-heading">Instagram</h2>
        <p className="section-subtitle">Visit our Instagram page for the latest updates, sessions and player development.</p>
        <a
          href={contactInfo.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-cta instagram-follow"
        >
          <img className="btn-icon-img" src="/icons/instagram.svg" alt="Instagram" />
          Open Instagram Profile
        </a>
      </div>
    </section>
  );
};

export default InstagramFeed;
