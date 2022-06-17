import Snackbar from 'node-snackbar';
import { createUpvoteButton, createUpvotedButton } from '../views/templates/template-creator';
import { isUserSignedIn, getUserID } from '../firebase/auth';
import Write from '../firebase/write-database';

const UpvoteButtonInitiator = {
  async init({ upvoteButtonContainer, data }) {
    this._upvoteButtonContainer = upvoteButtonContainer;
    this._data = data;
    console.log(`UpvoteButtonInitiator-${data.name} `);
    await this._renderButton();
  },

  async _renderButton() {
    const dataUID = this._data.upvote.uid;
    // console.log(`render button ${this._data.name}`);

    if (isUserSignedIn()) {
      const uid = getUserUID();
      let upvoted = false;
      dataUID.forEach((target) => {
        // console.log(target.uid);
        if (uid === target.uid) {
          upvoted = true;
        }
      });
      if (upvoted) {
        this._renderUpvoted();
      } else {
        this._renderUpvote();
      }
    } else {
      this._renderNewUpvote();
    }
  },

  _renderUpvote() {
    console.log(`render upvote ${this._data.name}`);
    this._upvoteButtonContainer.innerHTML = createUpvoteButtonTemplate(this._data);

    const upvoteButton = document.querySelector(`.${this._data.name}`);
    upvoteButton.addEventListener('click', async () => {
      Write.addUpvoteCount(this._data.city, this._data.name);
      // Write.addUpvoteUID(this._data.city, this._data.name, getUserUID()).then(() => {
      //   this._renderButton();
      // });
    });
  },

  _renderUpvoted() {
    console.log(`render upvoted ${this._data.name}`);
    this._upvoteButtonContainer.innerHTML = createUpvotedButtonTemplate(this._data);

    const upvoteButton = document.querySelector(`.${this._data.name}`);
    upvoteButton.addEventListener('click', async () => {
      Write.subtractUpvoteCount(this._data.city, this._data.name);
      // Write.removeUpvoteUID(this._data.city, this._data.name, getUserUID()).then(() => {
      //   this._renderButton();
      // });
    });
  },

  _renderNewUpvote() {
    this._upvoteButtonContainer.innerHTML = createUpvoteButtonTemplate(this._data);

    const upvoteButton = document.querySelector(`.${this._data.name}`);
    upvoteButton.addEventListener('click', async () => {
      Snackbar.show({
        text: 'You must log-in first',
        pos: 'top-center',
        backgroundColor: '#ffcd38',
        textColor: 'black',
        actionTextColor: 'black',
        actionText: '<i class="fa-solid fa-xmark"></i>',
        duration: 3000,
        customClass: 'customSnackbar',
      });
    });
  },
};

export default UpvoteButtonInitiator;
