import { NavV2StyleManager } from "./managers/nav-v2-style-manager.js";
import { NavV2TemplateManager } from "./managers/nav-v2-template-manager.js";
import { NavButtonManager } from "./managers/nav-button-manager.js";

export class NavV2Component extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});

    this.styleManager = new NavV2StyleManager();
    this.templateManager = new NavV2TemplateManager();
    this.navButtonManager = null;

  }

  connectedCallback() {
    this.shadowRoot.innerHTML = this.styleManager.getStyle() + this.templateManager.getTemplate();
    this.navButtonManager = new NavButtonManager(this);
  }
  
  disconnectedCallback() {

  }

  attributeChangedCallback(name, oldValue, newValue) {
    
  }
  static get observedAttributes() {
    return [];
  }


}
