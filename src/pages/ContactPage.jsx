import React from 'react';

const ContactPage = () => {
  return (
    <main style={{ paddingTop: '100px' }}>
      <section className="py-5">
        <div className="container">
          <h1 className="display-4 text-center mb-5">Contact <span className="text-brand">Us</span></h1>
          
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="card bg-dark border-0">
                <div className="card-body p-4 p-md-5">
                  <h2 className="mb-4">Send us a Message</h2>
                  <form>
                    <div className="row g-3">
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
                        <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-brand px-4">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            
            <div className="col-lg-5">
              <div className="contact-info h-100">
                <h2 className="mb-4">Get in Touch</h2>
                <p className="mb-4">We're here to help you with any questions about memberships, programs, or our facilities.</p>
                
                <div className="info-item">
                  <i className="bi bi-geo-alt-fill"></i>
                  <div>
                    <h5>Our Location</h5>
                    <p>123 Fitness Avenue<br />Madurai, Tamil Nadu 625001</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <i className="bi bi-telephone-fill"></i>
                  <div>
                    <h5>Phone Number</h5>
                    <p>+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <i className="bi bi-envelope-fill"></i>
                  <div>
                    <h5>Email Address</h5>
                    <p>info@forgefit.com</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <i className="bi bi-clock-fill"></i>
                  <div>
                    <h5>Working Hours</h5>
                    <p>Monday - Sunday: 5:00 AM - 11:00 PM</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h5>Follow Us</h5>
                  <div className="social-icons mt-3">
                    <a href="#" className="me-3"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="me-3"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="me-3"><i className="bi bi-twitter-x"></i></a>
                    <a href="#"><i className="bi bi-youtube"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;