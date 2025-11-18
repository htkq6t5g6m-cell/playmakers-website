import React, { useEffect, useRef } from 'react';
import InstagramPost from './InstagramPost';
import { instagramPosts, contactInfo } from '../data/data';

const loadInstagramScript = () => {
  if (window.instgrm) return Promise.resolve();
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = 'https://www.instagram.com/embed.js';
    script.id = 'instagram-embed-script';
    script.onload = () => resolve();
    document.body.appendChild(script);
  });
};

const InstagramFeed = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    loadInstagramScript().then(() => {
      if (!mounted) return;
      try {
        if (window.instgrm && window.instgrm.Embeds && widgetRef.current) {
          window.instgrm.Embeds.process();
        }
      } catch (e) {
        // ignore
      }
    });

    return () => { mounted = false; };
  }, [instagramPosts]);

  return (
    <section className="instagram-feed">
      <div className="container">
        <h2 className="section-heading text-center">Follow Our Journey</h2>
        <p className="section-subtitle text-center">
          See our latest training sessions, player development, and coaching highlights on Instagram
        </p>

        <div className="instagram-embed">
          <div className="instagram-widget" id="instagram-widget" ref={widgetRef}>
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
              className="btn btn-cta instagram-follow"
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
