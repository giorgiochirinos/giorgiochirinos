import { BaseVideoComponent } from '../base/BaseVideoComponent.js';
import { SubtitleManager } from './SubtitleManager.js';
//import { videoList } from '../../../init.js';

/**
 * Handles external events like column selection
 */
export class ExternalEventHandler extends BaseVideoComponent {
  constructor(wrapper) { // Pass the wrapper instance instead of root
    super(wrapper.shadowRoot);
    this.wrapper = wrapper; // Store reference to VideoWrapper
  }

  initialize() {
    document.body.addEventListener('column-event', (e) => this.handleColumnEvent(e));
  }

  handleColumnEvent(e) {
    console.log(e.detail.target);
    console.log(e.composedPath());
    const video = e.detail.target.querySelector('video');//new
    //const videoId = e.detail.target.id;
    //if (videoList[videoId]) {
      const selectedVideoWrapper = document.querySelector('video-wrapper');
      if (selectedVideoWrapper) {
        selectedVideoWrapper.video = video; //new 
        //selectedVideoWrapper.video = videoList[videoId]; // Use the setter
      }
    //}
  }
}
