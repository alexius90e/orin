const portfolioSwiper = new Swiper('.portfolio .swiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
  },
  navigation: {
    nextEl: '.portfolio__controls-next',
    prevEl: '.portfolio__controls-prev',
  },
  pagination: {
    el: '.portfolio__controls-pagination',
    type: 'fraction',
  },
});

const gallerySwiper = new Swiper('.gallery .swiper', {
  slidesPerView: 'auto',
  loop: true,
  navigation: {
    nextEl: '.gallery__controls-next',
    prevEl: '.gallery__controls-prev',
  },
});
