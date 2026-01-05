export const testimonialsConfig = {
  modules: ['Pagination', 'Autoplay'],
  spaceBetween: 30,
  slidesPerView: 1,
  pagination: { clickable: true },
  loop: true,
  grabCursor: true,
  autoplay: { delay: 5000 },
  breakpoints: {
    768: { slidesPerView: 2 },
    1200: { slidesPerView: 3 }
  }
};