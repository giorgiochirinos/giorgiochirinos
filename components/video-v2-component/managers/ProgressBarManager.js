import { BaseVideoComponent } from '../base/BaseVideoComponent.js';

export class ProgressBarManager extends BaseVideoComponent {
  constructor(root) {
    super(root);
    this.video = null;
    this.progress = null;
    this.progressBar = null;
    this.forwardToListener = (e) => this.forwardTo(e);
    this.handleProgressListener = () => this.handleProgress();
  }

  setVideo(video) {
    this.video = video; // No cleanup needed
  }

  initialize() {
    this.progress = this.root.querySelector(".progress");
    this.progressBar = this.root.querySelector(".progress_filled");
    this.progress.addEventListener("click", this.forwardToListener);
    if (this.video) {
      this.video.addEventListener("timeupdate", this.handleProgressListener);
    }
  }

  handleProgress() {
    if (!this.video.id) { console.log("select a video"); return; }
    const progressPercentage = (this.video.currentTime / this.video.duration) * 100;
    this.progressBar.style.flexBasis = `${progressPercentage}%`;
  }

  forwardTo(e) {
    if (!this.video.id) { console.log("select a video"); return; }
    const scrubTime = (e.offsetX / this.progress.offsetWidth) * this.video.duration;
    this.video.currentTime = scrubTime;
  }

  setProgressBarToZero() {
    this.progressBar.style.flexBasis = '0%';
  }
}
