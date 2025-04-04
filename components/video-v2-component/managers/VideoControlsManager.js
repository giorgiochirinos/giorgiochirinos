import { BaseVideoComponent } from '../base/BaseVideoComponent.js';

export class VideoControlsManager extends BaseVideoComponent {
  constructor(root) {
    super(root);
    this.video = null;
    this.toggleButton = null;
    this.togglePlayListener = () => this.togglePlay(); // Simplified listener
    this.updateToggleButtonListener = () => this.updateToggleButton();
  }

  setVideo(video) {
    this.video = video; // No need to remove old listeners
  }

  initialize() {
    this.toggleButton = this.root.querySelector('.toggleButton');
    this.toggleButton.addEventListener("click", this.togglePlayListener);
    if (this.video) {
      this.video.addEventListener("click", this.togglePlayListener);
      this.video.addEventListener("play", this.updateToggleButtonListener);
      this.video.addEventListener("pause", this.updateToggleButtonListener);
      this.updateToggleButton(); // Set initial state
    }
  }

  togglePlay() {
    if (!this.video.id) { console.log("select a video"); return; }
    if (this.video.paused || this.video.ended) {
      this.video.play();
    } else {
      this.video.pause();
    }
  }

  updateToggleButton() {
    if (!this.video.id) { console.log("select a video"); return; }
    this.toggleButton.innerHTML = this.video.paused ? "►" : "❚❚";
  }
}
