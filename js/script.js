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