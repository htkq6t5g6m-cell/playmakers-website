import React from 'react';

const InstagramPost = ({ post }) => {
  return (
    <a 
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="instagram-post-large"
    >
      <img src={post.image} alt={post.alt} />
      <div className="instagram-overlay">
        <div className="instagram-info">
          <span className="instagram-icon">📷</span>
          <p className="instagram-caption">{post.caption}</p>
        </div>
      </div>
    </a>
  );
};

export default InstagramPost;
