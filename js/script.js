// * BURGER
const burger_open = document.querySelector('.burger-icon');
const burger_close = document.querySelector('.close-icon');

const header_menu = document.querySelector(".header__nav");

burger_open.onclick = function() {
   header_menu.classList.toggle('active');
   document.body.classList.toggle('scrollable');
}

burger_close.onclick = function () {
   header_menu.classList.toggle('active');
   document.body.classList.toggle('scrollable');
}