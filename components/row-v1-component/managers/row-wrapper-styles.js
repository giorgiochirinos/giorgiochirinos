// File: components/managers/row-wrapper-styles.js
// Handles all styling concerns

export class RowWrapperStyles {
  getShadowStyles() {
    return `
    <style>
      :host {
        display: block;
        position: relative; 
        padding-bottom: 2rem;
      }

      :host:focus {
        border: var(--host-border);
      }

      :host .row {
        /*outline: var(--row-outline, 3px solid green);*/
        display: flex;
        justify-content: flex-start;
        row-gap: 1rem;
        column-gap: var(--column-gap);
        /*width: 100%;*/
        overflow-x: scroll;
        margin: 0 auto;
        scroll-snap-type: x mandatory;
      }

      ::slotted(.column) {
        width: var(--column-width);
        height: 12rem;
        flex-shrink: 0;
        display: grid;
        justify-items: center;
        align-content: space-between;
        position: relative;
        scroll-snap-align: start;
      }

      ::slotted(.highlighted) {
        border: 1px solid red;
      }

      :host .scroll-button-right, 
      :host .scroll-button-left {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: var(--button-background, rgba(0, 0, 0, 0.5));
        color: var(--button-color, white);
        font-size: 2rem;
        border: none;
        padding: 0.5rem;
        cursor: pointer;
        z-index: 1;
      }

      :host .scroll-button-right {
        right: 10px;
      }

      :host .scroll-button-left {
        left: 10px;
      }
    </style>
    `;
  }
  
  injectLightDOMStyles() {
    // Check if styles are already injected
    if (document.getElementById('row-wrapper-light-styles')) {
      return;
    }
    
    const style = document.createElement('style');
    style.id = 'row-wrapper-light-styles';
    style.textContent = `
      :root {
        --column-width: 14rem; /* Set the width of each column as a CSS variable */
        --column-gap: 1rem; /* Define the column gap as a CSS variable */
      }
    `;
    document.head.appendChild(style);
  }
}
