import DrawerInitiator from '../utils/drawer-initiator';
import Explore from './pages/explore';

class App {
  constructor({
    button, drawer, content, hero, explore,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._hero = hero;
    this._explore = explore;

    // this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      hero: this._hero,
    });
  }

  async renderPage() {
    this._explore.innerHTML = await Explore.render();
    await Explore.afterRender('jakarta');
  }
}

export default App;
