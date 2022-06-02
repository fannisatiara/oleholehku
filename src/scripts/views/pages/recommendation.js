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
                  <form action="" class="mt-5 border p-4 bg-light shadow">
                      <div class="row">
                          <div class="mb-3 col-md-12">
                                <label>Nama Oleh-Oleh<span class="text-danger">*</span></label>
                                <input type="text" name="fname" class="form-control" placeholder="Input nama oleh-oleh">
                          </div>

                          <div class="mb-3 col-md-12">
                                <label>Asal Kota<span class="text-danger">*</span></label>
                                <input type="text" name="fname" class="form-control" placeholder="Input asal kota">
                          </div>

                          <div class="mb-3 col-md-12">
                                <label for="textArea">Deskripsi Oleh-Oleh<span class="text-danger">*</span></label>
                                <textarea class="form-control" id="textArea" rows="3" placeholder="Input deskripsi"></textarea>
                          </div>

                          <div class="mb-3 col-md-12">
                                <label class="form-label" for="customFile">Upload Gambar Oleh-Oleh<span class="text-danger">*</span></label>
                                <input type="file" class="form-control" id="customFile" />
                          </div>

                          <div class="col-md-12">
                                <button class="btn btn-signup btn-warning float-end">Submit</button>
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
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Recommendation;
