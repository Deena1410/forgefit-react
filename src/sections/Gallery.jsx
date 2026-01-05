import React, { useEffect } from 'react';
import { Fancybox } from "@fancyapps/ui";

const Gallery = () => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {});
    
    return () => {
      Fancybox.destroy();
    };
  }, []);

  const galleryImages = [
    {
      id: 1,
      src: 'https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/ForgeFit%20Gym%20Template/Gallery 1.png',
      delay: 100
    },
    {
      id: 2,
      src: 'https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/ForgeFit%20Gym%20Template/Gallery 2.png',
      delay: 200
    },
    {
      id: 3,
      src: 'https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/ForgeFit%20Gym%20Template/Gallery 3.png',
      delay: 300
    },
    {
      id: 4,
      src: 'https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/ForgeFit%20Gym%20Template/Gallery 4.png',
      delay: 400
    },
    {
      id: 5,
      src: 'https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/ForgeFit%20Gym%20Template/Gallery 5.png',
      delay: 500
    },
    {
      id: 6,
      src: 'https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/ForgeFit%20Gym%20Template/Gallery 6.png',
      delay: 600
    }
  ];

  return (
    <section id="gallery" className="bg-dark">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Our <span className="text-brand">Community</span> In Action</h2>
          <p>A glimpse into the energy, effort, and excitement that happens here every single day.</p>
        </div>
        <div className="row g-4">
          {galleryImages.map((image) => (
            <div key={image.id} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={image.delay}>
              <a href={image.src} data-fancybox="gallery" className="gallery-item">
                <img src={image.src} alt={`Gallery ${image.id}`} />
                <div className="overlay"><i className="bi bi-arrows-fullscreen"></i></div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;