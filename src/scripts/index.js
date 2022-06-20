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
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  mirror: false,
});
// Write.addUpvoteCount('Tasikmalaya', 10310);

// Write.addUpvoteCount('Tasikmalaya', 10310);
// Read.getItemCount('Tasikmalaya', 10310);
// Read.getItemCount('Tasikmalaya', 10310).then((data) => console.log(data));
// Read.sortItemList('tasikmalaya');

window.addEventListener('hashchange', () => {
  window.scrollTo(0, 0);
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  // swRegister();
});

// navbar active button
const btnContainer = document.getElementById('navbar');
const btns = btnContainer.getElementsByClassName('nav-link scrollto');
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    const current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}

// getData('jakarta');

// function writeData(nama, desc, city) {
//   const db = getDatabase();
//   set(ref(db, `oleholehku/${city}/${nama}`), {
//     nama,
//     desc,
//   });
// }
