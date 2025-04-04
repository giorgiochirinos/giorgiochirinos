// File: components/row-wrapper.js
// Main component with all modular systems integrated

import { RowWrapperTemplate } from './managers/row-wrapper-template.js';
import { RowWrapperStyles } from './managers/row-wrapper-styles.js';
import { ThemeSystem } from './managers/theme-system.js';
import { ScrollingController } from './managers/scrolling-controller.js';
import { ColumnManager } from './managers/column-manager.js';
import { ResizeRowManager } from './managers/resize-row-manager.js';
import { CarouselManager } from './managers/carousel-manager.js';
import { CollapseManager } from './managers/collapse-manager.js';

export class RowWrapper extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});
    
    // Initialize component modules
    this.template = new RowWrapperTemplate();
    this.styles = new RowWrapperStyles();
    this.themeSystem = new ThemeSystem(this);
    this.resizeRowManager = new ResizeRowManager(this)
    this.scrollingController = null;
    this.columnManager = null;
    
    // Define custom properties with getters and setters
    this._theme = 'default';
    // default value for carousel mode
    this._carouselEnabled = false; 
    // default not collapsed
    this._collapsed = false;      
  }
  
  // Lifecycle methods
  connectedCallback() {
    this.renderComponent();
    this.initializeModules();
    
    // Apply initial theme
    this.theme = this.getAttribute('theme') || 'default';

    // Apply observer to this component
    this.resizeRowManager.startObserving();

    // Initialize the carousel toggle
    this.carouselManager = new CarouselManager(this);
   
    // Initialize the collapse toggle
    this.collapseManager = new CollapseManager(this);
    
    // Make sure to apply the current collapsed state (default false)
    this.collapseManager.applyCollapseState();

    // Update scroll visibility
    this.scrollingController.updateScrollVisibility();

    // Enable drag scroll for mobile users
    this.enableScrollFeature('drag');
  }
  
  disconnectedCallback() {
    // Clean up event listeners and resources
    if (this.scrollingController) {
      this.scrollingController.disableDragScroll();
    }
    if (this.columnManager) {
      // Implementation of cleanup code
    }
    // disctonnect observer
    if (this.resizeRowManager) {
      this.resizeRowManager.disconnectObserver();
    }
    
    // Optionally, remove any collapse-related or carousel-related listeners if you set them up dynamically.
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'theme' && oldValue !== newValue) {
      this.theme = newValue;
    } else if (name === 'carousel' && oldValue !== newValue) {
      this._carouselEnabled = newValue !== null;
      if (this._carouselEnabled && this.scrollingController && !this.collapsed) {
        this.scrollingController.enableAutoScroll();
      } else if (this.scrollingController) {
        this.scrollingController.disableAutoScroll();
      }
      // Update the carousel checkbox state if it exists
      const carouselCheckbox = this.shadowRoot.getElementById('carousel-toggle-checkbox');
      if (carouselCheckbox) {
        carouselCheckbox.checked = this._carouselEnabled;
      }
    } else if (name === 'collapse' && oldValue !== newValue) {
      this._collapsed = newValue !== null;
      this.collapseManager.applyCollapseState();
      // Update the collapse checkbox state if it exists
      const collapseCheckbox = this.shadowRoot.getElementById('collapse-toggle-checkbox');
      if (collapseCheckbox) {
        collapseCheckbox.checked = this._collapsed;
      }
    }
  }
  
  static get observedAttributes() {
    return ['theme', 'carousel', 'collapse'];
  }
  
  // Properties
  get theme() {
    return this._theme;
  }
  
  set theme(value) {
    this._theme = value;
    this.themeSystem.applyTheme(value);
  }
  
  get carouselEnabled() {
    return this._carouselEnabled;
  }
  
  set carouselEnabled(value) {
    this._carouselEnabled = Boolean(value);
    if (this._carouselEnabled && !this.collapsed) {
      this.setAttribute('carousel', '');
      if (this.scrollingController) {
        this.scrollingController.enableAutoScroll();
      }
    } else {
      this.removeAttribute('carousel');
      if (this.scrollingController) {
        this.scrollingController.disableAutoScroll();
      }
    }
    // Reflect state to the carousel checkbox
    const carouselCheckbox = this.shadowRoot.getElementById('carousel-toggle-checkbox');
    if (carouselCheckbox) {
      carouselCheckbox.checked = this._carouselEnabled;
    }
  }
  
  get collapsed() {
    return this._collapsed;
  }
  
  set collapsed(value) {
    this._collapsed = Boolean(value);
    if (this._collapsed) {
      this.setAttribute('collapse', '');
    } else {
      this.removeAttribute('collapse');
    }
    this.collapseManager.applyCollapseState();
    // Reflect state to the collapse checkbox
    const collapseCheckbox = this.shadowRoot.getElementById('collapse-toggle-checkbox');
    if (collapseCheckbox) {
      collapseCheckbox.checked = this._collapsed;
    }
  }
  
  // Methods
  renderComponent() {
    // Apply styles
    this.shadowRoot.innerHTML = this.styles.getShadowStyles();
    this.styles.injectLightDOMStyles();
    
    // Apply template
    this.shadowRoot.innerHTML += this.template.getTemplate();
  }
  
  initializeModules() {
    const row = this.shadowRoot.querySelector('.row');
    const leftButton = this.shadowRoot.getElementById('scroll-left');
    const rightButton = this.shadowRoot.getElementById('scroll-right');
    
    // Initialize scrolling functionality
    this.scrollingController = new ScrollingController(this, row, leftButton, rightButton);
    
    // Initialize column management
    const slot = this.shadowRoot.querySelector('slot');
    this.columnManager = new ColumnManager(slot);
    
    // Listen for column events
    this.columnManager.addEventListener('column-event', (e) => {
      this.dispatchEvent(new CustomEvent('column-event', {
        composed: true,
        bubbles: true,
        detail: e.detail
      }));
    });
  }
  
  

  // Public API methods
  
  /**
   * Scroll to a specific column by index
   * @param {number} index - The index of the column to scroll to
   */
  scrollToColumn(index) {
    const columnCount = this.columnManager.getColumnCount();
    if (index >= 0 && index < columnCount) {
      // Calculate position and scroll
      const columnWidthRem = getComputedStyle(document.documentElement).getPropertyValue('--column-width');
      const columnGapRem = getComputedStyle(document.documentElement).getPropertyValue('--column-gap');
      const remToPx = 16;
      const columnWidthPx = parseFloat(columnWidthRem) * remToPx;
      const columnGapPx = parseFloat(columnGapRem) * remToPx;
      
      const scrollDistance = index * (columnWidthPx + columnGapPx);
      
      const row = this.shadowRoot.querySelector('.row');
      row.scrollTo({
        left: scrollDistance,
        behavior: 'smooth'
      });
    }
  }

  /**
   * Register a new theme
   * @param {string} name - Theme name
   * @param {object} properties - Theme properties
   */
  registerTheme(name, properties) {
    this.themeSystem.registerTheme(name, properties);
  }
  
  /**
   * Enable additional scrolling features
   * @param {string} feature - Feature name ('infinite', 'drag', etc.)
   */
  enableScrollFeature(feature) {
    switch (feature) {
      case 'infinite':
        this.scrollingController.enableInfiniteScroll();
        break;
      case 'drag':
        this.scrollingController.enableDragScroll();
        break;
      // Add more features as needed
    }
  }
}


