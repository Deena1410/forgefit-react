import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="about-image">
              <img src="https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/ForgeFit%20Gym%20Template/interior.png" alt="About ForgeFit" />
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="about-content">
              <h2 className="display-4">WHO WE <span className="text-brand">ARE</span></h2>
              <p className="lead">
                We are more than just a gym. We are a community, a family, and a support system dedicated to helping you become the strongest version of yourself.
              </p>
              <p>
                ForgeFit was founded on the principle that fitness is a journey, not a destination. Our state-of-the-art facility, expert trainers, and diverse class schedule are all designed to give you the tools and motivation you need to succeed, no matter your starting point.
              </p>
              <ul className="list-unstyled mt-3" style={{ fontSize: '1.1rem' }}>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-brand me-2"></i> World-Class Certified Trainers</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-brand me-2"></i> State-of-the-Art Equipment</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-brand me-2"></i> 24/7 Facility Access</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-brand me-2"></i> Motivating Community Atmosphere</li>
              </ul>
              <Link to="/about" className="btn btn-brand mt-4">About Us</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;