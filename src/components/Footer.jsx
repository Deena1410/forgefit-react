import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [year, setYear] = React.useState('');

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <Link className="footer-brand" to="/">FORGE<span>FIT</span></Link>
            <p>The ultimate fitness destination. We are dedicated to providing the best equipment, training, and community to help you forge your strongest self.</p>
            <div className="social-icons mt-4">
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-twitter-x"></i></a>
              <a href="#"><i className="bi bi-youtube"></i></a>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-6">
            <h5>Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/programs">Schedule</Link></li>
              <li><Link to="/programs">Trainers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-6">
            <h5>Contact Info</h5>
            <ul className="footer-links">
              <li><i className="bi bi-geo-alt-fill text-brand me-2"></i>123, Madurai, TN</li>
              <li><i className="bi bi-telephone-fill text-brand me-2"></i> +1 234 567 890</li>
              <li><i className="bi bi-envelope-fill text-brand me-2"></i> kkdeena2001@gmail.com</li>
              <li><i className="bi bi-clock-fill text-brand me-2"></i> Mon - Sun: 5:00 AM - 11:00 PM</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-12">
            <h5>Join Our Newsletter</h5>
            <p>Get exclusive deals, fitness tips, and updates sent straight to your inbox.</p>
            <form className="newsletter-form">
              <input type="email" className="form-control" placeholder="Enter your email" required />
              <button type="submit" className="btn btn-brand"><i className="bi bi-send-fill"></i></button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © <span id="copyright-year">{year}</span> ForgeFit. All Rights Reserved.
            Designed with <i className="bi bi-heart-fill text-brand"></i> by
            <a href="https://www.linkedin.com/in/kkdeena2001" target="_blank" rel="noreferrer" className="text-brand fw-bold">CodeWithDeena</a>.
          </p>
          <br className="d-md-none" />
          <Link to="/about" className="ms-md-3">Privacy Policy</Link> · <Link to="/about">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;