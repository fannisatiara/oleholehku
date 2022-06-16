import snackbar from 'node-snackbar';
import UrlParser from '../../routes/url-parser';
import Read from '../../firebase/read-database';
import { isUserSignedIn } from '../../firebase/auth';

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
                        <li> <a href="#/explore/">All</a></li>
                        <li> <a href="#/explore/Jakarta">Jakarta</a></li>
                        <li> <a href="#/explore/Madiun">Madiun</a></li>
                        <li> <a href="#/explore/Tasikmalaya">Tasikmalaya</a></li>
                        <li> <a href="#/explore/Bandung">Bandung</a></li>
                    </ul>
                </div>

                <div class="col-lg-3 d-flex justify-content-center">
                    <div class="search-container">
                    <input placeholder="Search the city" class="form-control" type="search">                           
                </div>
                <div class="col-lg-2 d-flex justify-content-start">
                    <div class="button-container">
                        <button class="btn btn-signup btn-warning float-end">Search</button>
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
          <h3>Do You Have Any Recommendation?</h3>
          <p> Help this website to provide the best information about Indonesian souvenirs and foodies. </p>
          <a class="recommendation-btn" href="#/recommendation">Lets Go!</a>
        </div>

      </div>
    </section><!-- End Recommendation Section -->
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    if (url.id) {
      const city = url.id;
      console.log(city);
      Read.cityItemList(city);
    } else {
      Read.allItemList();
    }
    const recommendationButton = document.querySelector('.recommendation-btn');
    recommendationButton.addEventListener('click', (e) => {
      if (!isUserSignedIn()) {
        e.preventDefault();
        snackbar.show({
          text: 'You must log-in first',
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
  },

};

export default Explore;
