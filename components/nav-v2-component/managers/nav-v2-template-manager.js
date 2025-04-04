// File: ./managers/nav-v2-template-manager.js

export class NavV2TemplateManager {
  constructor() {

  }

  getTemplate() {
    return `
      <slot name="menu-item"></slot>
      <nav-button-component></nav-button-component>
    `;
  }
}
