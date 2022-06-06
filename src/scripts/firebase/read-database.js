import { initializeApp } from 'firebase/app';
import {
  getDatabase,
  ref,
  child,
  onValue,
} from 'firebase/database';
import GLightbox from 'glightbox';
import { createOlehOlehTemplate } from '../views/templates/template-creator';
import firebaseConfig from './config';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

class Read {
  static async cityItemList(city) {
    const dbref = ref(getDatabase());
    await onValue(child(dbref, `oleholehku/${city}`), (snapshot) => {
      const oleholehContainer = document.querySelector('.portfolio-container');
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        oleholehContainer.innerHTML += createOlehOlehTemplate(childData);
      });
      const lightbox = GLightbox({
        selector: '.glightbox',
      });
    }, {
      onlyOnce: true,
    });
  }

  static async allItemList() {
    const dbref = ref(getDatabase());
    await onValue(child(dbref, 'oleholehku/'), (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const oleholehContainer = document.querySelector('.portfolio-container');
        childSnapshot.forEach((grandchildSnapshot) => {
          const data = grandchildSnapshot.val();
          oleholehContainer.innerHTML += createOlehOlehTemplate(data);
        });
      });
      const lightbox = GLightbox({
        selector: '.glightbox',
      });
    }, {
      onlyOnce: true,
    });
  }
}

export default Read;
