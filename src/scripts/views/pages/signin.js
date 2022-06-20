import { signinUI } from '../../firebase/auth';

const SignIn = {
  async render() {
    return /* html */`
    <!-- ======= Breadcrumbs ======= -->
      <section class="breadcrumbs">
        <div class="container">
          <div class="d-flex justify-content-center align-items-center">
            <h2 data-aos="zoom-in" data-aos-delay="100">Sign In</h2>
          </div>
        </div>
      </section><!-- End Breadcrumbs -->

      <div data-aos="zoom-in" data-aos-delay="100" class="container">
        <div class="col-md-6 offset-md-3">
          <div class="mt-5 border p-4 bg-light shadow">
            <h4 data-aos="zoom-in" data-aos-delay="400">Choose Your Sign In Method:</h4>
            <div id="signin-container">
              <div data-aos="zoom-in" data-aos-delay="600" id="firebaseui-auth-container"></div>
            </div>
          </div>
        </div>
      </div>
        `;
  },

  async afterRender() {
    signinUI();
  },
};

export default SignIn;
