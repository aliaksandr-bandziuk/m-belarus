var slider = new Swiper(".gallery-slider", {
  slidesPerView: 1,
  // loopedSlides: 6,
  // noSwiping: true,
  // noSwipingClass: "swiper-slide",
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  loop: true,
  autoplay: {
    delay: 4000,
  },
});

var thumbs = new Swiper(".gallery-thumbs", {
  slidesPerView: "auto",
  spaceBetween: 10,
  centeredSlides: false,
  slideToClickedSlide: true,
  loop: true
});

slider.controller.control = thumbs;
thumbs.controller.control = slider;