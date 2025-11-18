import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setScrolled(scrollTop > 50);
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = '';
    };
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#coaches', label: 'Coaches' },
    { href: '#sessions', label: 'Sessions' },
    { href: '#reviews', label: 'Why Us' },
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
          
          <nav className={`nav ${isMenuOpen ? 'active' : ''}`} id="nav">
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
          
          <a href="#contact" className="btn btn-primary btn-header">
            Book Now
          </a>
          
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            id="hamburger"
            aria-label="Toggle menu"
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
