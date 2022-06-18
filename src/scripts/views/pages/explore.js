import snackbar from 'node-snackbar';
import GLightbox from 'glightbox';
import { createOlehOlehTemplate, createUpvoteButton, createUpvotedButton } from '../templates/template-creator';
import UrlParser from '../../routes/url-parser';
import Read from '../../firebase/read-database';
import { isUserSignedIn, getUserID } from '../../firebase/auth';
import Write from '../../firebase/write-database';
import UpvoteButtonInitiator from '../../utils/upvote-initiator';

const Explore = {
  async render() {
    return /* html */`
    <!-- ======= Breadcrumbs ======= -->
    <section class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>Jelajahi Kota</h2>
          <ol>
            <li><a href="index.html">Beranda</a></li>
            <li>Jelajahi</li>
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
                        <li class="filter active"> <a href="#/explore/">All</a></li>
                        <li class="filter"> <a href="#/explore/Jakarta">Jakarta</a></li>
                        <li class="filter"> <a href="#/explore/Madiun">Madiun</a></li>
                        <li class="filter"> <a href="#/explore/Tasikmalaya">Tasikmalaya</a></li>
                        <li class="filter"> <a href="#/explore/Bandung">Bandung</a></li>
                    </ul>
                </div>

                <div class="col-lg-3 d-flex justify-content-center">
                    <div class="search-container">
                    <input placeholder="Masukkan kota" class="form-control" type="search">                           
                </div>
                <div class="col-lg-2 d-flex justify-content-start">
                    <div class="button-container">
                        <button class="btn btn-signup btn-warning float-end">Cari</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="row portfolio-container">

        </div>
    </section><!-- End Explore Section -->

    <!-- ======= Recommendation Section ======= -->
    <section id="recommendation" class="recommendation">
      <div class="container">

        <div class="text-center">
          <h3>Punya Rekomendasi Oleh-Oleh dari Daerahmu?</h3>
          <p> Bantu kami untuk menyajikan informasi terbaik seputar oleh-oleh khas Indonesia. </p>
          <a class="recommendation-btn" href="#/recommendation">Ayo!</a>
        </div>

      </div>
    </section><!-- End Recommendation Section -->
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    if (url.id) {
      const city = url.id;
      Read.cityItemList(city).then((snapshot) => {
        // console.log(snapshot.val());
        const oleholehContainer = document.querySelector('.portfolio-container');
        snapshot.forEach((childSnapshot) => {
          const childData = childSnapshot.val();
          oleholehContainer.innerHTML += createOlehOlehTemplate(childData);
          const upvoteContainer = document.querySelector(`#upvote-${childData.id}`);
          upvoteContainer.innerHTML = createUpvotedButton(childData);
          // UpvoteButtonInitiator.init({
          //   upvoteButtonContainer: upvoteContainer,
          //   data: childData,
          // });
          const btn = document.querySelector('.btn-vote');
          // console.log(btn);
          Read.getItemCount(childData.city, childData.id);
        });
        const upvoteButton = document.querySelectorAll('.btn-vote');
        upvoteButton.forEach((item) => {
          item.addEventListener('click', () => {
            Write.addUpvoteCount(item.dataset.city, item.dataset.id);
            Write.addUpvoteUID(item.dataset.city, item.dataset.id, getUserID());
          });
          // console.log(item);
        });
        const lightbox = GLightbox({
          selector: '.glightbox',
        });
      });
    } else {
      Read.allItemList().then((snapshot) => {
        const oleholehContainer = document.querySelector('.portfolio-container');
        snapshot.forEach((childSnapshot) => {
          childSnapshot.forEach((grandchildSnapshot) => {
            const data = grandchildSnapshot.val();
            oleholehContainer.innerHTML += createOlehOlehTemplate(data);
            const upvoteContainer = document.querySelector(`#upvote-${data.id}`);
            upvoteContainer.innerHTML = createUpvoteButton(data);
            Read.getItemCount(data.city, data.id);
          });
        });
        const lightbox = GLightbox({
          selector: '.glightbox',
        });
      });
    }
    const recommendationButton = document.querySelector('.recommendation-btn');
    recommendationButton.addEventListener('click', (e) => {
      if (!isUserSignedIn()) {
        e.preventDefault();
        snackbar.show({
          text: 'You must sign in first',
          pos: 'top-center',
          backgroundColor: '#ffcd38',
          textColor: 'black',
          actionTextColor: 'black',
          actionText: '<i class="fa-solid fa-xmark"></i>',
          duration: 3000,
          customClass: 'customSnackbar',
        });
      }
    });
    // highlight filter city
    const filtersContainer = document.getElementById('portfolio-flters');
    const filters = filtersContainer.getElementsByClassName('filter');
    for (let i = 0; i < filters.length; i++) {
      filters[i].addEventListener('click', function () {
        const current = document.getElementsByClassName('active');
        current[1].className = current[1].className.replace(' active', '');
        this.className += ' active';
      });
    }
  },

};

export default Explore;
