// File: components/managers/row-wrapper-template.js
export class RowWrapperTemplate {
  getTemplate() {
    return `
      <div class="row">
        <slot name="column"></slot>
      </div>
      <button class="scroll-button-left" id="scroll-left" aria-label="Scroll left">&lsaquo;</button>
      <button class="scroll-button-right" id="scroll-right" aria-label="Scroll right">&rsaquo;</button>
      <div class="controls">
        <div class="carousel-toggle">
          <label>
            <input type="checkbox" id="carousel-toggle-checkbox" />
            Carousel Mode
          </label>
        </div>
        <div class="collapse-toggle">
          <label>
            <input type="checkbox" id="collapse-toggle-checkbox" />
            Collapse
          </label>
        </div>
      </div>
    `;
  }
}
