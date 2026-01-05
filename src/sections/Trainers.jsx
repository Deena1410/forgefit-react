import React from 'react';

const Trainers = () => {
  const trainers = [
    {
      id: 1,
      name: 'Alex "Riptide" Chen',
      role: 'Head Coach - CrossFit L2',
      image: 'https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/ForgeFit%20Gym%20Template/Alex Chen.png',
      delay: 100
    },
    {
      id: 2,
      name: 'Mike "The Tank" Davis',
      role: 'Strength & Conditioning',
      image: 'https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/ForgeFit%20Gym%20Template/Mike Davis.png',
      delay: 200
    },
    {
      id: 3,
      name: 'Jessica "Zen" Lee',
      role: 'Yoga & Mobility Specialist',
      image: 'https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/ForgeFit%20Gym%20Template/Jessica Zen Lee.png',
      delay: 300
    }
  ];

  return (
    <section id="trainers">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Meet The <span className="text-brand">Experts</span></h2>
          <p>Our trainers aren't just certified; they are passionate, dedicated, and invested in your personal fitness journey.</p>
        </div>
        <div className="row g-4">
          {trainers.map((trainer) => (
            <div key={trainer.id} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={trainer.delay}>
              <div className="trainer-card">
                <img src={trainer.image} alt={trainer.name} />
                <div className="trainer-card-overlay">
                  <h4>{trainer.name}</h4>
                  <p>{trainer.role}</p>
                  <div className="trainer-socials">
                    <a href="#"><i className="bi bi-instagram"></i></a>
                    <a href="#"><i className="bi bi-twitter-x"></i></a>
                    <a href="#"><i className="bi bi-facebook"></i></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;