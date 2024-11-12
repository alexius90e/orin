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

const goodThumbsSwiper = new Swiper('.good-info__slider-thumbs .swiper', {
  spaceBetween: 24,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      slidesPerView: 3.5,
      spaceBetween: 12,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

const goodMainSwiper = new Swiper('.good-info__slider-main .swiper', {
  spaceBetween: 24,
  slidesPerView: 1,
  thumbs: {
    swiper: goodThumbsSwiper,
  },
});

const goodSimilarSwiper = new Swiper('.good-similar .swiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3.5,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: '.good-similar__controls-next',
    prevEl: '.good-similar__controls-prev',
  },
  pagination: {
    el: '.good-similar__controls-pagination',
  },
});
