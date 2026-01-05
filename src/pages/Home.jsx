import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Programs from '../sections/Programs';
import Trainers from '../sections/Trainers';
import Pricing from '../sections/Pricing';
import Testimonials from '../sections/Testimonials';
import Gallery from '../sections/Gallery';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Programs />
      <Trainers />
      <Pricing />
      <Testimonials />
      <Gallery />
      <Contact />
    </main>
  );
};

export default Home;