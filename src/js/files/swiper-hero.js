const swiperMain = new Swiper('.swiper-hero', {
  slidesPerView: 1,
  // grabCursor: true,
  loop: true,
  autoplay: {
    delay: 4500,
  },
  pagination: {
    el: '.pagigation-buttons',
    bulletClass: 'pagination-btn',
    bulletActiveClass: 'pagination-btn-active',
    clickable: true,
  },
});