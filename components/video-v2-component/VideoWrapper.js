import { StyleManager } from './managers/StyleManager.js';
import { VideoControlsManager } from './managers/VideoControlsManager.js';
import { ProgressBarManager } from './managers/ProgressBarManager.js';
import { SubtitleManager } from './managers/SubtitleManager.js';
import { ExternalEventHandler } from './managers/ExternalEventHandler.js';

export class VideoWrapper extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.fixedVideo = null; // Reference to the fixed video element
  }

  connectedCallback() {
    // Set up shadow DOM
    this.styleManager = new StyleManager(this.shadowRoot);
    this.shadowRoot.innerHTML = this.styleManager.getStyles() + this.styleManager.getTemplate();
    this.styleManager.initialize();

    // Get the fixed video element
    this.fixedVideo = this.shadowRoot.querySelector('video');
    this.fixedVideo.controls = false; // Disable native controls

    // Initialize managers with the fixed video
    this.controls = new VideoControlsManager(this.shadowRoot);
    this.controls.setVideo(this.fixedVideo);
    this.controls.initialize();

    this.progressBar = new ProgressBarManager(this.shadowRoot);
    this.progressBar.setVideo(this.fixedVideo);
    this.progressBar.initialize();

    this.subtitles = new SubtitleManager(this.shadowRoot);
    this.subtitles.setVideo(this.fixedVideo);
    this.subtitles.initialize();

    // Handle external events
    new ExternalEventHandler(this).initialize();
  }

  // Setter to update the fixed video’s content
  set video(newVideo) {
    // Copy innerHTML for <source> elements
    this.fixedVideo.innerHTML = newVideo.innerHTML;

    // Copy attributes, excluding 'controls'
    Array.from(newVideo.attributes).forEach(attr => {
      if (attr.name !== 'controls') {
        this.fixedVideo.setAttribute(attr.name, attr.value);
      }
    });

    // Copy text tracks
    SubtitleManager.copyTextTracks(newVideo, this.fixedVideo);

    // Update managers for the new video content
    this.subtitles.populateSubtitleOptions();
    this.progressBar.setProgressBarToZero();
  }
}
