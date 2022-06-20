import { initializeApp } from 'firebase/app';
import {
  getDatabase,
  ref,
  child,
  onValue,
  get,
  query,
  orderByChild,
} from 'firebase/database';
import firebaseConfig from './config';
import { createUpvoteButton, createUpvotedButton } from '../views/templates/template-creator';
import Write from './write-database';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

class Read {
  static async cityItemList(city) {
    const db = getDatabase();
    const sortedData = query(ref(db, `Oleholehku/${city}`), orderByChild('upvote/count'));
    const data = await get(sortedData);
    return data;
  }

  static async allItemList() {
    const dbref = ref(getDatabase());
    const data = await get(child(dbref, 'Oleholehku/'));
    return data;
  }

  static async getItemCount(city, id) {
    const dbref = ref(getDatabase());
    await onValue(child(dbref, `Oleholehku/${city}/${id}/upvote/count`), (snapshot) => {
      const countContainer = document.getElementById(`count-${id}`);
      countContainer.innerHTML = `<p data-aos="zoom-in" data-aos-delay="100" data-aos-duration="100" >${snapshot.val() * -1}</p>`;
    });
  }

  static async upvoteButtonInitiator(city, id, uid) {
    const dbref = ref(getDatabase());
    await onValue(child(dbref, `Oleholehku/${city}/${id}/upvote/uid/${uid}/upvote`), (snapshot) => {
      const upvoted = snapshot.val();
      const upvoteContainer = document.querySelector(`#upvote-${id}`);
      if (upvoted) {
        upvoteContainer.innerHTML = createUpvotedButton(city, id);
        const upvoteButton = document.querySelector(`#button-${id}`);
        upvoteButton.addEventListener('click', async () => {
          Write.subtractUpvoteCount(city, id);
          Write.updateUpvoteFalse(city, id, uid);
        });
      } else {
        upvoteContainer.innerHTML = createUpvoteButton(city, id);
        const upvoteButton = document.querySelector(`#button-${id}`);
        upvoteButton.addEventListener('click', async () => {
          Write.addUpvoteCount(city, id);
          Write.updateUpvoteTrue(city, id, uid);
        });
      }
    });
  }
}

export default Read;
