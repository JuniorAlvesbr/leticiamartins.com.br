var swiper = new Swiper('.swiper-container', {
  cssMode: false,
  autoplay: {
    delay: 4000
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
});