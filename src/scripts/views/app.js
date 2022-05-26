import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({
    button, drawer, content, hero, header,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._hero = hero;
    this._header = header;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      hero: this._hero,
    });
  }

//   async renderPage() {
//     const url = UrlParser.parseActiveUrlWithCombiner();
//     const page = routes[url];
//     this._content.innerHTML = await page.render();
//     await page.afterRender();
//     const skipLinkElement = document.querySelector('.skip-link');
//     skipLinkElement.addEventListener('click', (event) => {
//       event.preventDefault();
//       document.querySelector('#content').focus();
//     });
//   }
}

export default App;
