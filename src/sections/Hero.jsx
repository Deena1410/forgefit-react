import React from 'react';

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="hero-content">
              <h1 className="display-1" data-aos="fade-right">FORGE <span>YOUR</span><br />BEST <span>BODY</span></h1>
              <p className="my-4" data-aos="fade-right" data-aos-delay="200">
                Unleash your potential. We provide the expertise, environment, and energy to help you achieve your ultimate fitness goals.
              </p>
              <a href="#programs" className="btn btn-brand" data-aos="fade-right" data-aos-delay="400">Our Programs</a>
              <a href="#pricing" className="btn btn-outline-brand ms-3" data-aos="fade-right" data-aos-delay="500">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;