
// File: components/managers/carousel-manager.js
export class CarouselManager {
  constructor(rowWrapper) {
    // Expect rowWrapper to be an instance of RowWrapper that has a scrollingController and access to the shadow DOM.
    this.rowWrapper = rowWrapper;
    this.checkbox = null;
    this.init();
  }

  init() {
    // Get the carousel toggle checkbox from the row wrapper's shadow DOM
    this.checkbox = this.rowWrapper.shadowRoot.getElementById('carousel-toggle-checkbox');
    if (this.checkbox) {
      // Sync initial state from the attribute/property
      this.checkbox.checked = this.rowWrapper._carouselEnabled;
      // Listen for changes on the checkbox to update the row wrapper's carousel state.
      this.checkbox.addEventListener('change', (e) => {
        this.rowWrapper.carouselEnabled = e.target.checked;
      });
    }
  }

  // Optionally, you can expose methods to enable/disable the carousel mode programmatically
  enable() {
    this.rowWrapper.carouselEnabled = true;
  }
  
  disable() {
    this.rowWrapper.carouselEnabled = false;
  }
}
