import { BaseVideoComponent } from '../base/BaseVideoComponent.js';

export class SubtitleManager extends BaseVideoComponent {
  constructor(root) {
    super(root);
    this.video = null;
    this.subtitleSelect = null;
    this.fontSizeSlider = null;
    this.handleSubtitleChangeListener = (e) => this.handleSubtitleChange(e);
    this.fontSizeChangeListener = (e) => {
      if (!this.video.id) return;
      const fontSize = `${e.target.value}px`;
      document.documentElement.style.setProperty('--subtitle-font-size', fontSize);
    };
  }

  setVideo(video) {
    this.video = video;
  }

  initialize() {
    this.subtitleSelect = this.root.querySelector("#subtitle-select");
    this.fontSizeSlider = this.root.querySelector('#font-size-slider');
    this.subtitleSelect.addEventListener("change", this.handleSubtitleChangeListener);
    this.fontSizeSlider.addEventListener('input', this.fontSizeChangeListener);
    if (this.video) {
      this.populateSubtitleOptions();
    }
  }

  populateSubtitleOptions() {
    if (!this.video) return;
    while (this.subtitleSelect.options.length > 1) {
      this.subtitleSelect.remove(1);
    }
    Array.from(this.video.textTracks).forEach((track, index) => {
      track.mode = "disabled";
      const option = document.createElement("option");
      option.value = index.toString();
      option.text = track.label || track.language || `Track ${index + 1}`;
      this.subtitleSelect.add(option);
    });
    if (this.video.textTracks.length > 0) {
      this.video.textTracks[0].mode = "showing";
      this.subtitleSelect.selectedIndex = 1;
    }
  }

  handleSubtitleChange(event) {
    if (!this.video) return;
    const value = event.target.value;
    const tracks = Array.from(this.video.textTracks);
    if (value === "off") {
      tracks.forEach(track => { track.mode = "disabled"; });
    } else {
      const selectedIndex = parseInt(value, 10);
      tracks.forEach((track, index) => {
        track.mode = index === selectedIndex ? "showing" : "disabled";
      });
    }
  }

  static copyTextTracks(sourceVideo, targetVideo) {
    Array.from(sourceVideo.textTracks).forEach(track => {
      const newTrack = targetVideo.addTextTrack(track.kind, track.label, track.language);
      newTrack.mode = track.mode;
      if (track.cues) {
        Array.from(track.cues).forEach(cue => {
          newTrack.addCue(new VTTCue(cue.startTime, cue.endTime, cue.text));
        });
      }
    });
  }
}
