import React from 'react';

const AboutPage = () => {
  return (
    <main style={{ paddingTop: '100px' }}>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="display-4 text-center mb-5">About <span className="text-brand">ForgeFit</span></h1>
              
              <div className="row align-items-center mb-5">
                <div className="col-lg-6">
                  <img 
                    src="https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/ForgeFit%20Gym%20Template/interior.png" 
                    alt="Our Facility" 
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-lg-6 mt-4 mt-lg-0">
                  <h2 className="mb-4">Our Mission</h2>
                  <p className="lead">
                    At ForgeFit, we believe that fitness is more than just exercise—it's a lifestyle. Our mission is to empower individuals to forge their strongest selves through cutting-edge facilities, expert guidance, and a supportive community.
                  </p>
                  <p>
                    Founded in 2010, ForgeFit has grown from a single location to a premier fitness destination serving thousands of members. Our founder, John Forge, envisioned a space where people of all fitness levels could come together to push their limits and achieve what they once thought impossible.
                  </p>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-md-4 mb-4">
                  <div className="card bg-dark border-0 h-100">
                    <div className="card-body text-center p-4">
                      <i className="bi bi-trophy-fill text-brand display-4 mb-3"></i>
                      <h3 className="h4">Our Values</h3>
                      <p>We believe in excellence, integrity, and community. Every decision we make is guided by our commitment to helping you achieve your best.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card bg-dark border-0 h-100">
                    <div className="card-body text-center p-4">
                      <i className="bi bi-people-fill text-brand display-4 mb-3"></i>
                      <h3 className="h4">Our Community</h3>
                      <p>Join thousands of members who have transformed their lives. From beginners to athletes, everyone finds their place at ForgeFit.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card bg-dark border-0 h-100">
                    <div className="card-body text-center p-4">
                      <i className="bi bi-award-fill text-brand display-4 mb-3"></i>
                      <h3 className="h4">Certifications</h3>
                      <p>All our trainers hold multiple certifications from internationally recognized organizations ensuring you receive expert guidance.</p>
                    </div>
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

export default AboutPage;