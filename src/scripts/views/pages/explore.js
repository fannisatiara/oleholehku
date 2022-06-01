/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { initializeApp } from 'firebase/app';
import {
  getDatabase,
  ref,
  child,
  get,
  onValue,
} from 'firebase/database';
import { createOlehOlehTemplate } from '../templates/template-creator';

const firebaseConfig = {
  apiKey: 'AIzaSyBr2Zs0pPCeRfaD30v7_YY5tdFlh2EHRAw',
  authDomain: 'oleh-olehku.firebaseapp.com',
  databaseURL: 'https://oleh-olehku-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'oleh-olehku',
  storageBucket: 'oleh-olehku.appspot.com',
  messagingSenderId: '861250081340',
  appId: '1:861250081340:web:dd6ebc4fe221c5c1fc2939',
  measurementId: 'G-SVNKRXHKD3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Explore = {
  async render() {
    return `
        <div class="col-lg-4 col-md-6 portfolio-item filter-jkt">
            
        </div>
    `;
  },

  async afterRender(city) {
    const dbref = ref(getDatabase());
    await onValue(child(dbref, `oleholehku/${city}`), (snapshot) => {
      const oleholehContainer = document.querySelector('.portfolio-item');
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        console.log(childData);
        oleholehContainer.innerHTML += createOlehOlehTemplate(childData);
      });
    }, {
      onlyOnce: true,
    });
  },

};

export default Explore;
