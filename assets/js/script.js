var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
  breakpoints: {
    // mobile
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    // tablet
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // desktop
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    // mobile
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    // tablet
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // desktop
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
