/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import '../styles/main.css';
import App from './views/app';
import personIcon from '../public/Person-placeholder.jpg';

const personImages = document.querySelectorAll('#person');

personImages.forEach((personImage) => { personImage.src = personIcon; });

const app = new App({
  button: document.querySelector('.button'),
  drawer: document.querySelector('#navbar'),
  content: document.querySelector('main'),
  hero: document.querySelector('#hero'),
});
