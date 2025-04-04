// File: ./managers/nav-v2-style-manager.js

export class NavV2StyleManager {
  constructor() {
    //console.log('NavV2StyleManager constructor');
  }

  getStyle() {
    //console.log('NavV2StyleManager getStyle');
    return `
      <style>

      :host {
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        justify-content: space-between;
        background-color: #333;
      }

      ::slotted(a) {
        display: inline-block;
        color: #f2f2f2;
        padding: 0.7rem 0.9rem;
        text-decoration: none;
        font-size: 1rem ;
      }

      ::slotted(a:hover) {
        background-color: #ddd;
        color: black;
      }

      ::slotted(a.active) {
        background-color: #04AA6D;
        color: white;
      }

      .icon {
        display: none;
        padding: 0.2rem;
      }

      @media screen and (max-width: 600px) {
          :host {

          }
          ::slotted(a:not(:first-child)) {
              display: none;
          }
          .icon {
              display: inline-block;
          }

          /* This selector targets the host element when it has the 'responsive' class */
          :host(.responsive) {
              position: relative;
              flex-direction: column;
              align-items: center;
          }
          :host(.responsive) .icon {
              position: absolute;
              right: 0;
              top: 0;
          }
          :host(.responsive) ::slotted(a) {
              display: inline-block;
          }
          :host(.responsive) ::slotted(a:first-child) {
            align-self: start;
          }
      }

      </style>
    `;
  }
}
