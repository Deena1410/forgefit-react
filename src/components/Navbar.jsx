import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">FORGE<span>FIT</span></Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#programs" onClick={() => setIsMenuOpen(false)}>Programs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/programs" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/programs" onClick={() => setIsMenuOpen(false)}>Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </li>
          </ul>
          <Link to="/pricing" className="btn btn-brand d-lg-inline-block" onClick={() => setIsMenuOpen(false)}>Join Now</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;