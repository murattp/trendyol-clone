var swiper = new Swiper(".mySwiper", {
  slidesPerView: 10,
  spaceBetween: 10,
  breakpoints: {
    // when window width is >= 320px
    420: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 5,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 7,
      spaceBetween: 40
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});