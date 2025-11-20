import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const videoRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    const heroEl = heroRef.current;
    if (!videoEl || !heroEl) return;

    // Defer source insertion until intersection
    const injectSources = () => {
      if (videoEl.dataset.sourcesInjected) return;
      const w = window.innerWidth;
      const portrait = window.matchMedia('(orientation: portrait)').matches;
      const small = w <= 480 && portrait;
      // Choose variant paths
      const sources = small ? [
        { src: '/images/page-images/hero-mobile.mp4', type: 'video/mp4' },
        { src: '/images/page-images/hero-mobile.webm', type: 'video/webm' }
      ] : [
        { src: '/images/page-images/hero.mp4', type: 'video/mp4' },
        { src: '/images/page-images/hero.webm', type: 'video/webm' },
        { src: '/images/page-images/hero.mov', type: 'video/quicktime' }
      ];
      sources.forEach(def => {
        const s = document.createElement('source');
        s.src = def.src;
        s.type = def.type;
        videoEl.appendChild(s);
      });
      videoEl.dataset.sourcesInjected = 'true';
      try { videoEl.load(); } catch (_) {}
    };

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          injectSources();
          try { if (videoEl.paused) { videoEl.play().catch(() => {}); } } catch (_) {}
        }
      });
    }, { threshold: 0.25 });
    io.observe(heroEl);

    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <section ref={heroRef} className="hero" id="home">
      <div className="hero-media" aria-hidden="true">
        <video
          className="hero-video"
          muted
          playsInline
          preload="metadata"
          poster="/images/page-images/hero.jpg"
          aria-hidden="true"
          onEnded={(e) => { e.currentTarget.pause(); }}
          onError={(e) => {
            try { e.currentTarget.style.display = 'none'; } catch (_) {}
            console.warn('Hero video failed to load', e);
          }}
          ref={videoRef}
        >
          {/* Sources injected lazily */}
          Your browser does not support the hero background video.
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
