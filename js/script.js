const open_burger = document.querySelector('.open-burger');
const close_burger = document.querySelector('.close-burger');
const burger = document.querySelector('.header__nav');

open_burger.onclick = function() {
   open_burger.classList.toggle('active');
   close_burger.classList.toggle('active');
   burger.classList.toggle('active');
   document.body.classList.toggle('scroll-blocked');
}

close_burger.onclick = function () {
   open_burger.classList.toggle('active');
   close_burger.classList.toggle('active');
   burger.classList.toggle('active');
   document.body.classList.toggle('scroll-blocked');
}


const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   allowTouchMove: true,
   slidesPerView: 1,
   spaceBetween: 50,
   breakpoints: {
      990.98: {
         slidesPerView: 2,
         spaceBetween: 0,
         allowTouchMove: false,
      }
   },
   autoplay: {
      delay: 5000,
   },


   // Navigation arrows
   navigation: {
      nextEl: '.btn-right',
      prevEl: '.btn-left   ',
   },
});