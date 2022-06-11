import { signinUI } from '../../firebase/auth';

const SignIn = {
  async render() {
    return `
    <!-- ======= Breadcrumbs ======= -->
      <section class="breadcrumbs">
        <div class="container">
          <div class="d-flex justify-content-center align-items-center">
            <h2>Sign In</h2>
          </div>
        </div>
      </section><!-- End Breadcrumbs -->

      <div class="container">
        <div class="col-md-6 offset-md-3">
          <div class="mt-5 border p-4 bg-light shadow">
            <h4>Choose Your Sign In Method:</h4>
            <div id="signin-container">
              <div id="firebaseui-auth-container"></div>
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
