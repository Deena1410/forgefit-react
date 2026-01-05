import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <a 
      className={`scroll-to-top ${isVisible ? 'active' : ''}`} 
      id="scrollToTopBtn" 
      aria-label="Scroll to top"
      onClick={scrollToTop}
      style={{ cursor: 'pointer' }}
    >
      <i className="bi bi-arrow-up-short icon-arrow"></i>
    </a>
  );
};

export default ScrollToTop;