
export class CollapseManager {
  constructor(host) {
    this.host = host;
    
    this.initCollapseToggle();
  }

  // Initialize collapse checkbox toggle
  initCollapseToggle() {
    const collapseCheckbox = this.host.shadowRoot.getElementById('collapse-toggle-checkbox');
    if (collapseCheckbox) {
      collapseCheckbox.checked = this.host._collapsed;
      collapseCheckbox.addEventListener('change', (e) => {
        this.host.collapsed = e.target.checked;
      });
    }
  }

  // Apply collapse state to the .row element and adjust carousel/arrow behavior.
  applyCollapseState() {
    const row = this.host.shadowRoot.querySelector('.row');
    const leftButton = this.host.shadowRoot.getElementById('scroll-left');
    const rightButton = this.host.shadowRoot.getElementById('scroll-right');
    
    if (row) {
      if (this.host._collapsed) {
        // Change layout to wrap
        row.style.flexWrap = 'wrap';
        // Optionally, disable/hide scrolling controls
        if (leftButton) leftButton.style.visibility = 'hidden';
        if (rightButton) rightButton.style.visibility = 'hidden';
        // Disable carousel auto-scroll if enabled
        if (this.host.scrollingController) {
          this.host.scrollingController.disableAutoScroll();
        }
      } else {
        // Revert to single-line row
        row.style.flexWrap = 'nowrap';
        // Restore scrolling buttons visibility (based on scroll position)
        if (this.host.scrollingController) {
          this.host.scrollingController.updateScrollVisibility();
          // If carousel was enabled before, re-enable it:
          if (this.host._carouselEnabled) {
            this.host.scrollingController.enableAutoScroll();
          }
        }
      }
    }
  }

}
