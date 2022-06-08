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
}

export default Write;
