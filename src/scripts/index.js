/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import '../styles/main.css';
import { initializeApp } from 'firebase/app';
import {
  getDatabase, ref, child, get, onValue, set,
} from 'firebase/database';
import App from './views/app';
import addProfileImage from './utils/profile-image';

const apps = new App({
  button: document.querySelector('.button'),
  drawer: document.querySelector('#navbar'),
  content: document.querySelector('main'),
  hero: document.querySelector('#hero'),
});

addProfileImage.addRoyanImage();
addProfileImage.addFannisaImage();
addProfileImage.addYogaImage();
addProfileImage.addNadiaImage();

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

get(child(dbref, 'oleholehku')).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log('No data available');
  }
}).catch((error) => {
  console.error(error);
});

function writeData(nama, desc, city) {
  const db = getDatabase();
  set(ref(db, `oleholehku/${city}/${nama}`), {
    nama,
    desc,
  });
}

writeData('Kelom Geulis', ' ', 'tasikmalaya');
