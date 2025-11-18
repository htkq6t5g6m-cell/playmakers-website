import React from 'react';

const InstagramPost = ({ post }) => {
  // Use Instagram's client-side embed (blockquote). The embed script will
  // convert this into the proper media preview. This avoids needing API access
  // or stored thumbnails.
  return (
    <div className="instagram-post-large">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={post.url}
        data-instgrm-version="14"
        style={{ margin: 0 }}
      >
        <a href={post.url} target="_blank" rel="noopener noreferrer">{post.url}</a>
      </blockquote>
    </div>
  );
};

export default InstagramPost;
