import React, { useState, useEffect, useCallback } from 'react';

const Header = () => {
  const isClient = typeof window !== 'undefined';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(() => (isClient ? window.innerWidth <= 768 : false));

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  };

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setScrolled(scrollTop > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) closeMenu();
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [closeMenu]);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => () => {
    document.body.style.overflow = '';
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#coaches', label: 'Coaches' },
    // services link removed
    { href: '#what-we-do', label: 'What We Do' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#book', label: 'Book Now' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header 
      className="header" 
      id="header"
      style={{
        boxShadow: scrolled 
          ? '0 4px 20px rgba(0, 0, 0, 0.15)' 
          : '0 2px 10px rgba(0, 0, 0, 0.5)'
      }}
    >
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <a href="#home" style={{ display: "flex", alignItems: "center", height: "45px", overflow: "hidden" }}>
              <img src="/images/logo/logo.jpg" alt="PLAYMAKERS Logo"  />
            </a>
          </div>
          
          <nav
            className={`nav ${isMenuOpen ? 'active' : ''}`}
            id="primary-navigation"
            aria-hidden={isMobile ? !isMenuOpen : false}
          >
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div 
            className={`nav-overlay ${isMenuOpen ? 'active' : ''}`} 
            onClick={closeMenu}
            aria-hidden="true"
          />
          
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            id="hamburger"
            aria-label="Toggle menu"
            aria-controls="primary-navigation"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
