import React, { useRef, useState } from 'react';

const VideoCard = ({ video }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (videoRef.current && video.type === 'local') {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.currentTime = 0; // Reset to beginning
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset for loop preview
    }
  };

  return (
    <div className="video-item">
      <div className="video-wrapper" onClick={handleVideoClick} style={{ cursor: video.type === 'local' ? 'pointer' : 'default' }}>
        {video.type === 'youtube' ? (
          <iframe
            src={video.src}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <video 
              ref={videoRef}
              autoPlay 
              muted={!isPlaying}
              loop={!isPlaying}
              playsInline
              poster={video.poster}
              onEnded={handleVideoEnd}
              controls={isPlaying}
            >
              <source src={video.src} type="video/mp4" />
              Your browser doesn't support video playback.
            </video>
            {!isPlaying && (
              <div className="video-play-overlay">
                <div className="play-button">▶</div>
              </div>
            )}
          </>
        )}
      </div>
      <h3 className="video-title">{video.title}</h3>
      <p className="video-description">{video.description}</p>
    </div>
  );
};

export default VideoCard;
