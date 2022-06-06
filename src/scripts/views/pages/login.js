import { signinUI } from '../../firebase/auth';

const Login = {
  async render() {
    return `
      <div id="signin">
      <div id="firebaseui-auth-container"></div>
      </div>
        `;
  },

  async afterRender() {
    signinUI();
  },
};

export default Login;
