import { onMediaFileSelected, getImageURL } from '../../firebase/storage';
import Write from '../../firebase/write-database';

const Recommendation = {
  async render() {
    return `
      <!-- ======= Breadcrumbs ======= -->
      <section class="breadcrumbs">
        <div class="container">
  
          <div class="d-flex justify-content-center align-items-center">
            <h2>Input Recommendation</h2>
          </div>
  
        </div>
      </section><!-- End Breadcrumbs -->
  
      <div class="container">
      <div class="row">
          <div class="col-md-6 offset-md-3">
              <div class="signup-form">
                  <form action="" class="mt-5 border p-4 bg-light shadow" id="form">
                      <div class="row">
                          <div class="mb-3 col-md-12">
                                <label>Nama Oleh-Oleh<span class="text-danger">*</span></label>
                                <input type="text" name="fname" class="form-control" id="name" placeholder="Input nama oleh-oleh">
                          </div>

                          <div class="mb-3 col-md-12">
                                <label>Asal Kota<span class="text-danger">*</span></label>
                                <input type="text" name="fname" class="form-control" id="city" placeholder="Input asal kota">
                          </div>

                          <div class="mb-3 col-md-12">
                                <label for="textArea">Deskripsi Oleh-Oleh<span class="text-danger">*</span></label>
                                <textarea class="form-control"  rows="3" id="desc" placeholder="Input deskripsi"></textarea>
                          </div>

                          <div class="mb-3 col-md-12">
                                <label class="form-label" for="customFile">Upload Gambar Oleh-Oleh<span class="text-danger">*</span></label>
                                <input type="file" accept="image/*" capture="camera" class="form-control" id="customFile" />
                          </div>

                          <div class="col-md-12">
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

    // Enables or disables the submit button depending on the values of the input fields.
    function toggleButton() {
      if (nameElement.value && descElement.value && cityElement.value && mediaElement.value) {
        submitButton.removeAttribute('disabled');
      } else {
        submitButton.setAttribute('disabled', 'true');
      }
    }

    nameElement.addEventListener('change', toggleButton);
    descElement.addEventListener('change', toggleButton);
    cityElement.addEventListener('change', toggleButton);
    mediaElement.addEventListener('change', (e) => {
      onMediaFileSelected(e);
      toggleButton();
    });
    submitButton.addEventListener('click', (e) => {
      const name = nameElement.value;
      const desc = descElement.value;
      const city = cityElement.value;
      const file = mediaElement.files[0];
      getImageURL(file).then((imgURL) => { Write.itemRecommendation(name, desc, city, imgURL); });
      console.log('Submit Successful!');
      formElement.reset();
      toggleButton();
      e.preventDefault();
    });
  },
};

export default Recommendation;
