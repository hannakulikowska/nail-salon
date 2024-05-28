import '../scss/style.scss';
import 'bootstrap';
import 'aos';
import Aos from 'aos';
import { Ticker } from './ticker';
import { FormValidator } from './formValidator';

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

  /** Ticker */
  new Ticker('.ticker', '.ticker-text');

  /** Form Validation */
  new FormValidator('.needs-validation');

  /* Animation on scroll */
  Aos.init({
    once: false,
  });
});
