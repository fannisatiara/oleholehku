import snackbar from 'node-snackbar';
import { onMediaFileSelected, getImageURL } from '../../firebase/storage';
import Write from '../../firebase/write-database';

const Recommendation = {
  async render() {
    return /* html */`
      <!-- ======= Breadcrumbs ======= -->
      <section class="breadcrumbs">
        <div class="container">
  
          <div data-aos="zoom-in" data-aos-delay="100" class="d-flex justify-content-center align-items-center">
            <h2>Input Rekomendasi</h2>
          </div>
  
        </div>
      </section><!-- End Breadcrumbs -->
  
      <div data-aos="zoom-in" data-aos-delay="200" class="container">
      <div class="row">
      <div class="col-md-6 offset-md-3">
      <img id='loading' hidden src='https://www.google.com/images/spin-32.gif?a' alt="loading">
              <div class="signup-form">
                  <form action="" class="mt-5 border p-4 bg-light shadow" id="form">
                      <div class="row">
                          <div data-aos="zoom-in" data-aos-delay="300" class="mb-3 col-md-12">
                                <label>Nama Oleh-Oleh<span class="text-danger">*</span></label>
                                <input type="text" name="fname" class="form-control" id="name" placeholder="Input nama oleh-oleh">
                          </div>

                          <div data-aos="zoom-in" data-aos-delay="400" class="mb-3 col-md-12">
                                <label>Asal Kota<span class="text-danger">*</span></label>
                                <input type="text" name="fname" class="form-control" id="city" placeholder="Input asal kota">
                          </div>

                          <div data-aos="zoom-in" data-aos-delay="500" class="mb-3 col-md-12">
                                <label for="textArea">Deskripsi Oleh-Oleh<span class="text-danger">*</span></label>
                                <textarea class="form-control"  rows="3" id="desc" placeholder="Input deskripsi"></textarea>
                          </div>
                          
                          <div data-aos="zoom-in" data-aos-delay="600" class="mb-3 col-md-12">
                                <label class="form-label" for="customFile">Upload Gambar Oleh-Oleh<span class="text-danger">*</span></label>
                                <input type="file" accept="image/*" capture="camera" class="form-control" id="customFile" />
                          </div>

                          <div data-aos="zoom-in" data-aos-delay="700" class="col-md-12">
                                <button class="btn btn-signup btn-warning float-end" id="submit" type='button' disabled>Submit</button>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
      </div>
      </div>
        `;
  },

  async afterRender() {
    const formElement = document.getElementById('form');
    const mediaElement = document.getElementById('customFile');
    const submitButton = document.getElementById('submit');
    const nameElement = document.getElementById('name');
    const descElement = document.getElementById('desc');
    const cityElement = document.getElementById('city');
    const loadingElement = document.getElementById('loading');

    // Enables or disables the submit button depending on the values of the input fields.
    function toggleButton() {
      if (nameElement.value && descElement.value && cityElement.value && mediaElement.value && loadingElement.hasAttribute('hidden')) {
        submitButton.removeAttribute('disabled');
      } else {
        submitButton.setAttribute('disabled', 'true');
      }
    }

    nameElement.addEventListener('change', toggleButton);
    descElement.addEventListener('change', toggleButton);
    cityElement.addEventListener('change', toggleButton);
    mediaElement.addEventListener('change', (e) => {
      loadingElement.removeAttribute('hidden');
      onMediaFileSelected(e).then(() => {
        snackbar.show({
          text: 'Image uploaded!',
          pos: 'top-center',
          backgroundColor: '#ffcd38',
          textColor: 'black',
          actionTextColor: 'black',
          actionText: '<i class="fa-solid fa-xmark"></i>',
          duration: 3000,
          customClass: 'customSnackbar',
        });
        loadingElement.setAttribute('hidden', 'true');
        toggleButton();
      });
    });
    submitButton.addEventListener('click', (e) => {
      const name = nameElement.value;
      const desc = descElement.value;
      const city = cityElement.value;
      const file = mediaElement.files[0];
      getImageURL(file)
        .then((imgURL) => { Write.itemRecommendation(name, desc, city, imgURL); })
        .then(() => {
          snackbar.show({
            text: 'Submit successful!',
            pos: 'top-center',
            backgroundColor: '#ffcd38',
            textColor: 'black',
            actionTextColor: 'black',
            actionText: '<i class="fa-solid fa-xmark"></i>',
            duration: 3000,
            customClass: 'customSnackbar',
          });
        });
      formElement.reset();
      toggleButton();
      e.preventDefault();
    });
  },
};

export default Recommendation;
