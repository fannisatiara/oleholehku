/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import { initializeApp } from 'firebase/app';
import {
  getDatabase,
  ref,
  child,
  onValue,
} from 'firebase/database';
import { createOlehOlehTemplate } from '../views/templates/template-creator';

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

class Source {
  static async cityItemList(city) {
    const dbref = ref(getDatabase());
    await onValue(child(dbref, `oleholehku/${city}`), (snapshot) => {
      const oleholehContainer = document.querySelector('.portfolio-container');
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        oleholehContainer.innerHTML += createOlehOlehTemplate(childData);
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
    }, {
      onlyOnce: true,
    });
  }
}
export default Source;
