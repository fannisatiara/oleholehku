/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import Snackbar from 'node-snackbar';
import { createUpvoteButton, createUpvotedButton } from '../views/templates/template-creator';
import { isUserSignedIn, getUserID } from '../firebase/auth';
import Write from '../firebase/write-database';

const UpvoteButtonInitiator = {
  async init({ upvoteButtonContainer, data }) {
    this._upvoteButtonContainer = upvoteButtonContainer;
    this._data = data;
    // console.log(`UpvoteButtonInitiator-${data.name} `);
    await this._renderButton();
  },

  async _renderButton() {
    const dataUID = this._data.upvote.uid;

    if (isUserSignedIn()) {
      const uid = getUserID();
      let upvoted = false;
      for (const item in dataUID) {
        // console.log(item);
        if (uid === item) {
          upvoted = true;
        }
      }
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
    this._upvoteButtonContainer.innerHTML = createUpvoteButton(this._data);

    // const upvoteButton = document.querySelector(`#button-${this._data.id}`);
    const upvoteButton = document.querySelectorAll('.btn-vote');
    upvoteButton.addEventListener('click', async () => {
      console.log('tombol diklik');
      Write.addUpvoteCount(this._data.city, this._data.id);
      Write.addUpvoteUID(this._data.city, this._data.id, getUserID()).then(() => {
        this._renderButton();
      });
    });
  },

  _renderUpvoted() {
    this._upvoteButtonContainer.innerHTML = createUpvotedButton(this._data);

    const upvoteButton = document.querySelector(`#button-${this._data.id}`);
    upvoteButton.addEventListener('click', async () => {
      Write.subtractUpvoteCount(this._data.city, this._data.id);
      Write.removeUpvoteUID(this._data.city, this._data.id, getUserID()).then(() => {
        this._renderButton();
      });
    });
  },

  _renderNewUpvote() {
    this._upvoteButtonContainer.innerHTML = createUpvoteButton(this._data);

    const upvoteButton = document.querySelector(`#button-${this._data.id}`);
    upvoteButton.addEventListener('click', async () => {
      Snackbar.show({
        text: 'You must sign in first',
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
