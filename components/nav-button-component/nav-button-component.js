import { NavButtonStyleManager } from "./managers/nav-button-style-manager.js";
import { NavBUttonTemplateManager } from "./managers/nav-button-template-manager.js";
import { NavButtonEventManager } from "./managers/nav-button-event-manager.js";

export class NavButtonComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.styleManager = new NavButtonStyleManager();
    this.templateManager = new NavBUttonTemplateManager();
    this.eventManager = null;
    this._closed = true; // Initial state: closed
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = 
      this.styleManager.getStyle() + this.templateManager.getTemplate();
    this.eventManager = new NavButtonEventManager(this);
  
    // Initialize accessibility attributes
    this.setAttribute("role", "button");
    this.setAttribute("aria-label", this._closed ? "Open menu" : "Close menu");
    this.setAttribute("aria-expanded", !this._closed);

    this.updateStyles(); // Apply initial styles
  }

  // Update styles based on _closed state
  updateStyles() {
    const divs = this.shadowRoot.querySelectorAll('div');
    divs.forEach(div => {
      div.classList.toggle('changed', !this._closed);
    });

    // Update ARIA attributes when state changes
    this.setAttribute("aria-expanded", !this._closed);
    this.setAttribute("aria-label", this._closed ? "Open menu" : "Close menu")
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "close") {
      const isClosed = newValue !== null;
      if (this._closed !== isClosed) {
        this._closed = isClosed;
        this.updateStyles();
      }
    }
  }

  static get observedAttributes() {
    return ['close'];
  }

  get close() {
    return this._closed;
  }

  set close(newValue) {
    const isClosed = Boolean(newValue);
    if (this._closed === isClosed) return; // No change
    this._closed = isClosed;
    // Reflect to attribute
    if (isClosed) {
      this.setAttribute('close', '');
    } else {
      this.removeAttribute('close');
    }
    this.updateStyles();
  }
}
