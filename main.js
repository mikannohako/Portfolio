// main.js
let lastScrollY = window.scrollY;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        header.classList.remove('hide');
    } else if (window.scrollY > lastScrollY) {
        header.classList.add('hide');
    } else {
        header.classList.remove('hide');
    }
    lastScrollY = window.scrollY;
});
