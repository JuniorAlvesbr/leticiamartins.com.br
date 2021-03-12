const swiper1 = new Swiper('.swiper1', {
  cssMode: false,
  autoplay: {
    delay: 3000
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination1',
  },
  // mousewheel: true,
  keyboard: true,
});

const swiper2 = new Swiper('.swiper2', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: '.swiper-pagination2',
  },
  keyboard: true,
});