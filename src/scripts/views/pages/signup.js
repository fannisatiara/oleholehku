const Signup = {
  async render() {
    return `
    <!-- ======= Breadcrumbs ======= -->
    <section class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-center align-items-center">
          <h2>Sign Up</h2>
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
                            <label>Full Name<span class="text-danger">*</span></label>
                            <input type="text" name="fname" class="form-control" placeholder="Enter Full Name">
                        </div>

                        <div class="mb-3 col-md-12">
                            <label>Username<span class="text-danger">*</span></label>
                            <input type="text" name="usrname" class="form-control" placeholder="Enter Username">
                        </div>

                        <div class="mb-3 col-md-12">
                            <label>Password<span class="text-danger">*</span></label>
                            <input type="password" name="password" class="form-control" placeholder="Enter Password">
                        </div>
                        <div class="mb-3 col-md-12">
                            <label>Confirm Password<span class="text-danger">*</span></label>
                            <input type="password" name="confirmpassword" class="form-control" placeholder="Confirm Password">
                        </div>
                        <div class="col-md-12">
                           <button class="btn btn-signup btn-warning float-end">Sign Up</button>
                        </div>
                    </div>
                </form>
                <p class="text-center mt-3 text-secondary">If you have an account, Please <a href="signin.html">Sign In Now</a></p>
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

export default Signup;
