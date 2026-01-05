import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

const Testimonials = () => {
  const swiperRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: 'Mark Johnson',
      quote: '"Joining ForgeFit was the best decision I ever made. The trainers are incredible, and the community is so supportive. I\'ve lost 50lbs and gained a new family."',
      image: 'https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/ForgeFit%20Gym%20Template/Mark Johnson.png'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      quote: '"I was intimidated by gyms, but the trainers here made me feel welcome from day one. The yoga classes are my escape, and I\'ve never felt stronger or more balanced."',
      image: 'https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/ForgeFit%20Gym%20Template/Sarah Chen.png'
    },
    {
      id: 3,
      name: 'David Rodriguez',
      quote: '"The CrossFit program is insane in the best way possible. I\'m pushing limits I never thought I had, and I\'m in the best shape of my life at 42."',
      image: 'https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/ForgeFit%20Gym%20Template/David Rodriguez.png'
    },
    {
      id: 4,
      name: 'Emily White',
      quote: '"The personal training here is next level. My coach built a program that worked around my old injuries and helped me regain strength I thought was gone forever."',
      image: 'https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/ForgeFit%20Gym%20Template/Emily White.png'
    }
  ];

  return (
    <section id="testimonials">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>What Our <span className="text-brand">Clients</span> Say</h2>
          <p>Real results from real people. Hear why our members love being a part of the ForgeFit family.</p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          grabCursor={true}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 }
          }}
          className="testimonials-slider"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-card">
                <img src={testimonial.image} alt={testimonial.name} />
                <p className="quote">{testimonial.quote}</p>
                <h5 className="name">{testimonial.name}</h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;