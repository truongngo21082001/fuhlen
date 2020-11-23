const Imgs = ["assets/Image/g900s.jpg", "assets/Image/phone.jpg"];
var slide, wCarousel = 0,
     wImg = 0,
     posCarousel = 0;

window.onload = () => {
     slide = document.getElementById('slide');
     showMenu();
     renderCarousel();
     window.onscroll = showMenu;
}

function renderCarousel() {
     slide.innerHTML = Imgs.map((i) => {
          return `<div class="carousel-item">
            <img src="${i}" class="d-block w-100">
        </div>`;
     }).join('');
     slide.children[0].classList.add('active');

}

function showMenu() {
     var menu = document.getElementById('menu');
     if (document.documentElement.scrollTop > 127)
          menu.classList.add('nav_menu');
     else
          menu.classList.remove('nav_menu');
}

setInterval(showMenu, 3000);

// (function() {
//     $("#menu").click(function(e) {
//         e.preventDefault();
//         ("#wrapper").toggleClass("caret");
//     });
//     (window).resize(function(e) {
//         if ((window).width() <= 768) {
//             ("#wrapper").removeClass("caret");
//         } else {
//             ("#wrapper").addClass("caret");
//         }
//     })
// })

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close() {
    mainMenu.style.top = '-100%';
}