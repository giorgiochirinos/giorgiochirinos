import { NavButtonComponent } from "../../nav-button-component/index.js";

export class NavButtonManager {
  constructor(host) {
    this.host = host;
    this.button = this.host.shadowRoot.querySelector('nav-button-component');
    this.buttonHandler = this.buttonHandler.bind(this);
    this.mediaQuery = window.matchMedia('(min-width: 601px)');
    this.handleMediaQueryChange = this.handleMediaQueryChange.bind(this);

    this.init();
  }

  init() {
    this.button.classList.add('icon');
    const divs = this.button.shadowRoot.querySelectorAll('div');
    divs.forEach(e => e.style.backgroundColor='white');

    this.mediaQuery.addEventListener('change', this.handleMediaQueryChange);

    this.host.addEventListener('nav-button-event', this.buttonHandler);
  }

  buttonHandler(e) {
    const state = e.detail.state;
    this.toggleSelected(state);
  }

  toggleSelected(state) {
   // var x = document.getElementById("myTopnav");
   // if (x.className === "topnav") {
   //   x.className += " responsive";
   // } else {
   //   x.className = "topnav";
   // }
    this.host.classList.toggle('responsive');
  }

  handleMediaQueryChange(e) {
    if (e.matches) {
      // Media query is now matching (e.g., viewport is now <= 768px)
      //console.log('Media query now matches!');
      this.button.close = true;
      this.host.classList.remove('responsive');
    } else {
      // Media query is no longer matching (e.g., viewport is now > 768px)
      //console.log('Media query no longer matches!');
    }
  }

  
}
