import { BaseVideoComponent } from '../base/BaseVideoComponent.js';

/**
 * StyleManager handles all style-related concerns
 */
export class StyleManager extends BaseVideoComponent {
  constructor(root) {
    super(root);
  }

  initialize() {
    this.injectStyleToLightDOM();
  }

  getStyles() {
    return `
    <style>
      :host {
        display: block;
        padding-bottom: 2rem;
      }
      .selectedVideoAudio {
        width: min(680px, 90vw);    /* Responsive width */
        max-width: 680px;           /* Maximum width */
        min-width: 20rem;           /* Minimum width */
        margin: 2rem auto;          /* Center horizontally with spacing */
        background-color: #000;     /* Background for contrast */
        aspect-ratio: 16 / 9;       /* Maintain a 16:9 aspect ratio */
        display: flex;              /* Center content with Flexbox */
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: visible;           /* Hide overflow if needed */
      }

      /* Ensure that inserted video elements fill the container */
      video {
        width: 100%;
        height: 100%;
        object-fit: cover;  /* Change to 'contain' if you prefer letterboxing */
      }
      .controls {
        display: flex;
        position: absolute;
        bottom: 0;
        width: 100%;
        flex-wrap: wrap;
        background: rgba(0,0,0,0.1);
        transform: translateY(100%);
      }
      .controls > * {
        flex: 1;
      }
      .controls_button {
        background: none;
        line-height: 1;
        color: black;
        text-align: center;
        padding: 0;
        cursor: pointer;
        max-width: 3rem;
      }
      .progress {
        flex: 10;
        position: relative;
        display: flex;
        flex-basis: 100%;
        background: rgba(255,255,255,0.5);
        cursor: pointer;
        height: 1rem;
      }
      .progress_filled {
        width: 50%;
        background: #00ff40;
        flex: 0;
        flex-basis: 0%;
      }
    </style>
    `;
  }

  getTemplate() {
    return `
      <div class="selectedVideoAudio">
        <video></video>
        <div class='controls'>
          <div class="progress">
            <div class="progress_filled"></div>
          </div>
          <button class="controls_button toggleButton" title="Toggle Play">►</button>
          <select id="subtitle-select">
            <option value="off">Off</option>
          </select>
          <div>
            <label for="font-size-slider">Subtitle Font Size:</label>
            <input type="range" min="16" max="30" value="16" id="font-size-slider">
          </div>
        </div>
      </div>
    `;
  }

  injectStyleToLightDOM() {
    const style = document.createElement('style');
    style.textContent = `
      video::cue {
        font-size: var(--subtitle-font-size, 16px);
      }
    `;
    document.head.appendChild(style);
  }
}
