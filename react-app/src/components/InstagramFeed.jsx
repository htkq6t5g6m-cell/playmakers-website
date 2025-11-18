import React from 'react';
import InstagramPost from './InstagramPost';
import { instagramPosts, contactInfo } from '../data/data';

const InstagramFeed = () => {
  return (
    <section className="instagram-feed">
      <div className="container">
        <h2 className="section-heading text-center">Follow Our Journey</h2>
        <p className="section-subtitle text-center">
          See our latest training sessions, player development, and coaching highlights on Instagram
        </p>
        
        <div className="instagram-embed">
          <div className="instagram-widget" id="instagram-widget">
            <div className="instagram-grid-3">
              {instagramPosts.map((post) => (
                <InstagramPost key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="instagram-cta">
          <a 
            href={contactInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-large"
          >
            <img className="btn-icon-img" src="/icons/instagram.svg" alt="Instagram" />
            Follow {contactInfo.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
