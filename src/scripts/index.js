import '../styles/home.css';
import '../styles/about.css';
import '../styles/signin.css';
import '../styles/explore.css';
import '../styles/main.css';
import 'node-snackbar/dist/snackbar.min.css';
import AOS from 'aos';
import App from './views/app';
import { initFirebaseAuth } from './firebase/auth';
import 'aos/dist/aos.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('.button'),
  drawer: document.querySelector('#navbar'),
  content: document.querySelector('main'),
  logout: document.querySelector('#logout'),

});

initFirebaseAuth();
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  mirror: false,
});

window.addEventListener('hashchange', () => {
  window.scrollTo(0, 0);
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
