import { initializeApp } from 'firebase/app';
import {
  getDatabase,
  ref,
  child,
  onValue,
  get,
} from 'firebase/database';
import firebaseConfig from './config';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

class Read {
  static async cityItemList(city) {
    const dbref = ref(getDatabase());
    const data = await get(child(dbref, `Oleholehku/${city}`));
    return data;
  }

  static async allItemList() {
    const dbref = ref(getDatabase());
    const data = await get(child(dbref, 'Oleholehku/'));
    return data;
  }
}

export default Read;
