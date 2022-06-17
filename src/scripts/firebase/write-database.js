import {
  getDatabase,
  ref,
  set,
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

  static async addUpvoteCount(city, name) {
    const db = getDatabase();
    set(ref(db, `Oleholehku/${city}/${name}/count`), {
      count: increment(1),
    }).then(() => { console.log(`added: ${name}`); });
  }

  static async subtractUpvoteCount(city, name) {
    const db = getDatabase();
    set(ref(db, `Oleholehku/${city}/${name}/count`), {
      count: increment(-1),
    }).then(() => { console.log(`substracted: ${name}`); });
  }

  static async addUpvoteUID(city, name, uid) {
    const db = getDatabase();
    set(ref(db, `Oleholehku/${city}/${name}/uid/${uid}`), {
      uid,
    }).then(() => { console.log(`added: ${uid}`); });
  }

  static async removeUpvoteUID(city, name, uid) {
    const db = getDatabase();
    remove(ref(db, `Oleholehku/${city}/${name}/uid/${uid}`), {
      uid,
    }).then(() => { console.log(`removed: ${uid}`); });
  }
}

export default Write;
