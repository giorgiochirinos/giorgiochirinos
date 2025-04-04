import { BaseVideoComponent } from '../base/BaseVideoComponent.js';
import { SubtitleManager } from './SubtitleManager.js';
import { videoList } from '../../init.js';

/**
 * Handles external events like column selection
 */
export class ExternalEventHandler extends BaseVideoComponent {
  constructor(root) {
    super(root);
  }

  initialize() {
    document.addEventListener('column-event', (e) => this.handleColumnEvent(e));
  }

  handleColumnEvent(e) {
    const videoId = e.detail.target.id;
    
    // Import videoList from global scope or a specific module
    if (Object.keys(videoList).length === 0) {
      throw new Error(`videoList is empty`);
    }
    
    if (videoList[videoId]) {
      const selectedVideoWrapper = document.querySelector('video-wrapper');
      if (selectedVideoWrapper) {
        //console.log(selectedVideoWrapper.shadowRoot.querySelector('slot').assignedElements());
        // Check if the video is already selected
        const slottedVideos = selectedVideoWrapper.shadowRoot.querySelector('slot').assignedElements();
        if (slottedVideos.length !== 0) {
          if (slottedVideos[0].id === videoId) {
            // if it is already selected, then don't
            // slot it again.
            return;
          }
        }
        selectedVideoWrapper.innerHTML = '';
        console.log(selectedVideoWrapper);
        
        // Clone video and copy text tracks
        const clonedVideo = videoList[videoId].cloneNode(true);
        SubtitleManager.copyTextTracks(videoList[videoId], clonedVideo);
        
        // Append to wrapper
        selectedVideoWrapper.appendChild(clonedVideo);
      }
    }
  }
}
