import '../styles/main.css';
import App from './views/app';
import { initFirebaseAuth } from './firebase/auth';

const app = new App({
  button: document.querySelector('.button'),
  drawer: document.querySelector('#navbar'),
  content: document.querySelector('main'),
  logout: document.querySelector('#logout'),

});

initFirebaseAuth();

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
