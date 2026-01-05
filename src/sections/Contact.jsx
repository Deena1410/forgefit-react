import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Get In <span className="text-brand">Touch</span></h2>
          <p>Have questions? Want to book a tour? Drop us a line and our team will get back to you right away.</p>
        </div>
        <div className="row g-4">
          <div className="col-lg-7" data-aos="fade-right">
            <form className="row g-3">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control" placeholder="Your Email" required />
              </div>
              <div className="col-12">
                <input type="text" className="form-control" placeholder="Subject" required />
              </div>
              <div className="col-12">
                <textarea rows="6" className="form-control" placeholder="Your Message" required></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-brand">Send Message</button>
              </div>
            </form>
          </div>
          <div className="col-lg-5" data-aos="fade-left">
            <div className="contact-info">
              <div className="info-item">
                <i className="bi bi-geo-alt-fill"></i>
                <div>
                  <h5>Address</h5>
                  <p>123 Fitness Ave, New York, NY</p>
                </div>
              </div>
              <div className="info-item">
                <i className="bi bi-telephone-fill"></i>
                <div>
                  <h5>Phone</h5>
                  <p>+1 234 567 890</p>
                </div>
              </div>
              <div className="info-item">
                <i className="bi bi-envelope-fill"></i>
                <div>
                  <h5>Email</h5>
                  <p>info@forgefit.com</p>
                </div>
              </div>
              <div className="info-item">
                <i className="bi bi-clock-fill"></i>
                <div>
                  <h5>Hours</h5>
                  <p>24 Hours, 7 Days a Week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12" data-aos="fade-up">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.647921319086!2d-118.41160132428172!3d34.0535319731557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6034177%3A0x2a334f5933390f84!2sBeverly%20Hills%20Sign!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gym Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;