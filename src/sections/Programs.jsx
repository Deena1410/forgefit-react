import React from 'react';

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: 'CrossFit',
      description: 'High-intensity functional training that combines weightlifting, gymnastics, and cardio for a complete body workout.',
      icon: 'bi-fire',
      image: 'https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/ForgeFit%20Gym%20Template/crossfit.png',
      delay: 100
    },
    {
      id: 2,
      title: 'Personal Training',
      description: 'Get one-on-one guidance, a customized workout plan, and nutritional advice tailored specifically to your body and goals.',
      icon: 'bi-person-bounding-box',
      image: 'https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/ForgeFit%20Gym%20Template/personal trainer.png',
      delay: 200
    },
    {
      id: 3,
      title: 'Yoga & Mobility',
      description: 'Improve your flexibility, reduce stress, and build core strength with our range of yoga and mobility classes for all levels.',
      icon: 'bi-peace-fill',
      image: 'https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/ForgeFit%20Gym%20Template/Calm yoga and mobility session.png',
      delay: 300
    }
  ];

  return (
    <section id="programs" className="bg-dark">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Our <span className="text-brand">Programs</span></h2>
          <p>From high-intensity group classes to personalized one-on-one training, we have a program built to match your goals and lifestyle.</p>
        </div>
        <div className="row g-4">
          {programs.map((program) => (
            <div key={program.id} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={program.delay}>
              <div className="program-card">
                <div className="program-card-img">
                  <img src={program.image} alt={program.title} />
                </div>
                <div className="program-card-body">
                  <div className="icon"><i className={`bi ${program.icon}`}></i></div>
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;