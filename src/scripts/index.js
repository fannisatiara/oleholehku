import '../styles/home.css';
import '../styles/about.css';
import '../styles/signin.css';
import '../styles/explore.css';
import '../styles/main.css';
import 'node-snackbar/dist/snackbar.min.css';
import App from './views/app';
import { initFirebaseAuth } from './firebase/auth';
// import swRegister from './utils/sw-register';
import Write from './firebase/write-database';
import Read from './firebase/read-database';

const app = new App({
  button: document.querySelector('.button'),
  drawer: document.querySelector('#navbar'),
  content: document.querySelector('main'),
  logout: document.querySelector('#logout'),

});

initFirebaseAuth();
// Write.addUpvoteCount('Tasikmalaya', 10310);

// Write.addUpvoteCount('Tasikmalaya', 10310);
// Read.getItemCount('Tasikmalaya', 10310);
// Read.getItemCount('Tasikmalaya', 10310).then((data) => console.log(data));

window.addEventListener('hashchange', () => {
  window.scrollTo(0, 0);
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  // swRegister();
});

// getData('jakarta');

// function writeData(nama, desc, city) {
//   const db = getDatabase();
//   set(ref(db, `oleholehku/${city}/${nama}`), {
//     nama,
//     desc,
//   });
// }
