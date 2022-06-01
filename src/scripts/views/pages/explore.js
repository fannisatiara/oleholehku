/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { initializeApp } from 'firebase/app';
import {
  getDatabase,
  ref,
  child,
  onValue,
} from 'firebase/database';
import { createOlehOlehTemplate } from '../templates/template-creator';
import UrlParser from '../../routes/url-parser';

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
    <!-- ======= Breadcrumbs ======= -->
    <section class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>Explore Cities</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>Explore</li>
          </ol>
        </div>

      </div>
    </section><!-- End Breadcrumbs -->

    <!-- ======= Explore Section ======= -->
    <section id="portfolio" class="portfolio">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 d-flex justify-content-center">
                    <ul id="portfolio-flters">
                        <li data-filter="*" class="filter-active">All</li>
                        <li data-filter=".filter-jkt">Jakarta</li>
                        <li data-filter=".filter-mdn">Madiun</li>
                        <li data-filter=".filter-tasik">Tasikmalaya</li>
                        <li data-filter=".filter-bdg">Bandung</li>
                    </ul>
                </div>

                <div class="col-lg-3 d-flex justify-content-center">
                    <div class="search-container">
                    <input placeholder="Search the city" class="form-control" type="search">                           
                </div>
                <div class="col-lg-2 d-flex justify-content-start">
                    <div class="button-container">
                        <button class="btn btn-warning" type="button">Search</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="row portfolio-container">

        </div>
    </section><!-- End Explore Section -->
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    let city = 'jakarta';
    console.log(url.id);
    if (url.id) {
      city = url.id;
    }
    const dbref = ref(getDatabase());
    await onValue(child(dbref, `oleholehku/${city}`), (snapshot) => {
      const oleholehContainer = document.querySelector('.portfolio-container');
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
