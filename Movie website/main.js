let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
	header.classlist.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classlist.toggle('active');
}


 var swiper = new Swiper(".home", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        
      });