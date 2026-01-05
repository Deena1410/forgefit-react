import React from 'react';

const ProgramsPage = () => {
  const programs = [
    {
      title: 'CrossFit',
      description: 'High-intensity functional training that combines weightlifting, gymnastics, and cardio.',
      schedule: 'Mon-Fri: 6AM-9PM, Sat: 8AM-6PM, Sun: 8AM-4PM',
      level: 'All Levels'
    },
    {
      title: 'Personal Training',
      description: 'One-on-one customized training with certified personal trainers.',
      schedule: 'By Appointment',
      level: 'Personalized'
    },
    {
      title: 'Yoga & Mobility',
      description: 'Improve flexibility, reduce stress, and build core strength.',
      schedule: 'Mon-Sun: Multiple Sessions Daily',
      level: 'Beginner to Advanced'
    },
    {
      title: 'Strength Training',
      description: 'Build muscle and increase strength with structured weightlifting programs.',
      schedule: '24/7 Access',
      level: 'All Levels'
    },
    {
      title: 'HIIT Classes',
      description: 'High-Intensity Interval Training for maximum calorie burn and endurance.',
      schedule: 'Mon-Fri: 5:30AM-8PM, Weekends: 9AM-3PM',
      level: 'Intermediate to Advanced'
    },
    {
      title: 'Nutrition Coaching',
      description: 'Personalized nutrition plans to complement your fitness journey.',
      schedule: 'By Appointment',
      level: 'All Levels'
    }
  ];

  return (
    <main style={{ paddingTop: '100px' }}>
      <section className="py-5">
        <div className="container">
          <h1 className="display-4 text-center mb-5">Our <span className="text-brand">Programs</span></h1>
          <p className="lead text-center mb-5">
            Choose from a wide variety of programs designed to help you reach your fitness goals.
          </p>
          
          <div className="row g-4">
            {programs.map((program, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="program-card h-100">
                  <div className="program-card-body">
                    <h3 className="mb-3">{program.title}</h3>
                    <p className="mb-4">{program.description}</p>
                    <div className="program-details mt-auto">
                      <p><strong>Schedule:</strong> {program.schedule}</p>
                      <p><strong>Level:</strong> {program.level}</p>
                    </div>
                    <button className="btn btn-brand mt-3">Learn More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProgramsPage;