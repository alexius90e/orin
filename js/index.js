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

const orderForms = document.querySelectorAll('.order-catalog__form');

orderForms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const name = formData.has('name') ? formData.get('name') : '';
    const email = formData.has('email') ? formData.get('email') : '';
    const phone = formData.has('phone') ? formData.get('phone') : '';
    const subject = 'Заказать каталог фигур';
    const content = formData.has('message') ? formData.get('message') : '';

    form.reset();

    fetch('../contact-form-handler.php', {
      method: 'POST',
      data: { name, email, phone, subject, content },
    }).then(() => form.reset());
  });
});

const footerForms = document.querySelectorAll('.footer__form');

footerForms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const name = formData.has('name') ? formData.get('name') : '';
    const email = formData.has('email') ? formData.get('email') : '';
    const phone = formData.has('phone') ? formData.get('phone') : '';
    const subject = 'Напишите нам';
    const content = formData.has('message') ? formData.get('message') : '';

    form.reset();

    fetch('../contact-form-handler.php', {
      method: 'POST',
      data: { name, email, phone, subject, content },
    }).then(() => form.reset());
  });
});

const goodInfoForms = document.querySelectorAll('.good-info__details-form');

goodInfoForms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const name = formData.has('name') ? formData.get('name') : '';
    const email = formData.has('email') ? formData.get('email') : '';
    const phone = formData.has('phone') ? formData.get('phone') : '';
    const subject = 'Консультация';
    const content = formData.has('message') ? formData.get('message') : '';

    console.log(name, email, phone, subject, content);

    form.reset();

    fetch('../contact-form-handler.php', {
      method: 'POST',
      data: { name, email, phone, subject, content },
    }).then(() => form.reset());
  });
});
