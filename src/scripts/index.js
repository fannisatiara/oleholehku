/* eslint-disable no-param-reassign */
import '../styles/main.css';
import personIcon from '../public/Person-placeholder.jpg';

const personImages = document.querySelectorAll('#person');

personImages.forEach((personImage) => { personImage.src = personIcon; });
