import {
  getDatabase,
  ref,
  set,
  remove,
  increment,
  update,
} from 'firebase/database';

class Write {
  static async itemRecommendation(name, desc, city, imgURL) {
    const db = getDatabase();
    set(ref(db, `recommendation/${city}/${name}`), {
      name,
      desc,
      city,
      imgURL,
    });
  }

  static async addUpvoteCount(city, id) {
    const db = getDatabase();
    update(ref(db, `Oleholehku/${city}/${id}/upvote`), {
      count: increment(1),
    }).then(() => { console.log(`added: ${id}`); });
  }

  static async subtractUpvoteCount(city, id) {
    const db = getDatabase();
    update(ref(db, `Oleholehku/${city}/${id}/upvote`), {
      count: increment(-1),
    }).then(() => { console.log(`substracted: ${id}`); });
  }

  static async addUpvoteUID(city, id, uid) {
    const db = getDatabase();
    set(ref(db, `Oleholehku/${city}/${id}/upvote/uid/${uid}`), {
      uid,
    }).then(() => { console.log(`added: ${uid}`); });
  }

  static async removeUpvoteUID(city, id, uid) {
    const db = getDatabase();
    remove(ref(db, `Oleholehku/${city}/${id}/upvote/uid/${uid}`), {
      uid,
    }).then(() => { console.log(`removed: ${uid}`); });
  }
}

export default Write;
