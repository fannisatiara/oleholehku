/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */

import '../styles/main.css';
import App from './views/app';
// import getData from './data/source';
import addProfileImage from './utils/profile-image';

const apps = new App({
  button: document.querySelector('.button'),
  drawer: document.querySelector('#navbar'),
  content: document.querySelector('main'),
  hero: document.querySelector('#hero'),
  explore: document.querySelector('.portfolio-container'),
});

// addProfileImage.addRoyanImage();
// addProfileImage.addFannisaImage();
// addProfileImage.addYogaImage();
// addProfileImage.addNadiaImage();

window.addEventListener('load', () => {
  if (document.location.pathname === '/explore.html') {
    console.log(document.location.pathname);
    apps.renderPage();
  }
});

// getData('jakarta');

// function writeData(nama, desc, city) {
//   const db = getDatabase();
//   set(ref(db, `oleholehku/${city}/${nama}`), {
//     nama,
//     desc,
//   });
// }
