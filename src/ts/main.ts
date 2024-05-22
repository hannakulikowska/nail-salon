import '../scss/style.scss';
import 'bootstrap';
import 'aos';
import Aos from 'aos';

/* Animation on scroll */

Aos.init({
  once: false,
});

/* Preloader */

const spinner = document.getElementById('spinner') as HTMLElement;
const coverContainer = document.querySelector('.cover-container') as HTMLElement;
window.addEventListener('load', () => {
  spinner.style.opacity = '0';
  spinner.addEventListener('transitionend', () => {
    document.body.removeChild(spinner);
    coverContainer.style.display = 'block';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navbarToggler && navbarToggler.getAttribute('aria-expanded') === 'true') {
        navbarToggler.click();
      }
    });
  });
});
