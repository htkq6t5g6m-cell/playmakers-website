import React from 'react';
import VideoCard from './VideoCard';
import { videos } from '../data/data';

const VideoGallery = () => {
  return (
    <section className="video-gallery">
      <div className="container">
        <h2 className="section-heading text-center">Training in Action</h2>
        <p className="section-subtitle text-center">
          Watch our coaches in action and see the quality of training we deliver
        </p>
        <div className="videos-grid">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
