const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeMenu = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percents = document.querySelectorAll('.progress__item-percent'),
      lines = document.querySelectorAll('.progress__item-line span');

percents.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

const prevScrollpos = window.pageYOffset;

console.log(prevScrollpos);