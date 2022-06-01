/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */

import '../styles/main.css';
import App from './views/app';

const app = new App({
  button: document.querySelector('.button'),
  drawer: document.querySelector('#navbar'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

// getData('jakarta');

// function writeData(nama, desc, city) {
//   const db = getDatabase();
//   set(ref(db, `oleholehku/${city}/${nama}`), {
//     nama,
//     desc,
//   });
// }
