/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import { initializeApp } from 'firebase/app';
import {
  getDatabase,
  ref,
  child,
  get,
  onValue,
} from 'firebase/database';

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

const dbref = ref(getDatabase());

// const getData = async (city) => {
//   const data = await get(child(dbref, `oleholehku/${city}`)).then((snapshot) => {
//     if (snapshot.exists()) {
//       const items = snapshot.val();
//       console.log(items);
//       return items;
//     }
//     console.log('No data available');
//   });
//   console.log(data);
//   data.array.forEach((element) => {
//     console.log(element);
//   });
//   return data;
// };

const getData = async (city) => {
  const data = await onValue(child(dbref, `oleholehku/${city}`), (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();
      console.log(childData);
      const container = document.getElementById('team');
      container.innerHTML += `<h1>${childData.name}</h1>`;
    });
  }, {
    onlyOnce: true,
  });
};

export default getData;
