// File: components/managers/scrolling-controller.js
// Handles scrolling behavior

export class ScrollingController {
  constructor(host, rowElement, leftButton, rightButton) {
    this.rowElement = rowElement;
    this.leftButton = leftButton;
    this.rightButton = rightButton;
    this.host = host;

    this.scrollDistance = this.computeScrollDistance();

    // for enableAutoScroll (carousel mode)
    this.autoScrollInterval = null;
    this.autoScrollSpeed = 3000; // ms
    
    this.initScrollButtons();

    // Listen to scroll events on the row to update button visibility during smooth scroll
    this.rowElement.addEventListener('scroll', this.updateScrollVisibility.bind(this));

    // Set row-wrapper (this.host) as focusable and controllable by arrow keys
    this.setFocusAndKeydownListener();
  }

  computeScrollDistance() {
    const columnWidthRem = getComputedStyle(document.documentElement).getPropertyValue('--column-width');
    const columnGapRem = getComputedStyle(document.documentElement).getPropertyValue('--column-gap');
    const remToPx = 16;
    const columnWidthPx = parseFloat(columnWidthRem) * remToPx;
    const columnGapPx = parseFloat(columnGapRem) * remToPx;
    return columnWidthPx + columnGapPx;
  }
  
  initScrollButtons() {
    this.leftButton.addEventListener('click', () => this.scrollLeft(this.scrollDistance));
    this.rightButton.addEventListener('click', () => this.scrollRight(this.scrollDistance));
    this.updateScrollVisibility();
  }
  
  scrollLeft(distance = this.scrollDistance) {
    this.rowElement.scrollBy({
      left: -distance,
      behavior: 'smooth'
    });
    // No need to call updateScrollVisibility() here since the scroll event will handle it
  }
  
  scrollRight(distance = this.scrollDistance) {
    this.rowElement.scrollBy({
      left: distance,
      behavior: 'smooth'
    });
    // No need to call updateScrollVisibility() here since the scroll event will handle it
  }

  setFocusAndKeydownListener() {
    this.host.setAttribute('tabindex', '0'); 
    this.host.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.scrollLeft();
      if (e.key === 'ArrowRight') this.scrollRight();
    });
  }
  
  // Updated updateScrollVisibility using requestAnimationFrame for smoother updates
  updateScrollVisibility() {
    window.requestAnimationFrame(() => {
      const scrollLeft = this.rowElement.scrollLeft;
      const maxScroll = this.rowElement.scrollWidth - this.rowElement.clientWidth;
      
      // Left button: visible if scrolled past the start
      this.leftButton.style.visibility = scrollLeft > 0 ? 'visible' : 'hidden';
      
      // Right button: visible if not scrolled to the end
      this.rightButton.style.visibility = scrollLeft < maxScroll ? 'visible' : 'hidden';
    });
  }

  // Additional methods for enhanced scrolling features can be added here

  /**
   * Enables automatic scrolling (carousel mode)
   * @param {number} speed - Time between scrolls in milliseconds
   */
  enableAutoScroll(speed = 3000) {
    this.autoScrollSpeed = speed;
    
    // Clear any existing interval
    this.disableAutoScroll();
    
    // Set up the auto-scroll interval
    this.autoScrollInterval = setInterval(() => {
      // Get the total scroll width and current position
      const isAtEnd = this.rowElement.scrollLeft + this.rowElement.clientWidth >= this.rowElement.scrollWidth - 10;
      
      if (isAtEnd) {
        // If at the end, scroll back to the beginning
        this.rowElement.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
      } else {
        // Otherwise, scroll right by one column
        this.scrollRight();
      }
    }, this.autoScrollSpeed);
  }

  /**
   * Disables automatic scrolling
   */
  disableAutoScroll() {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
      this.autoScrollInterval = null;
    }
  }
  
  enableInfiniteScroll() {
    // Implementation for infinite scrolling
  }
  
  enableDragScroll() {
    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    // Define event handlers so you can remove them later if needed
    const onTouchStart = (e) => {
      isDragging = true;
      startX = e.touches[0].pageX;
      scrollLeft = this.rowElement.scrollLeft;
    };

    const onTouchMove = (e) => {
      if (!isDragging) return;
      // Prevent default behavior (like scrolling the page)
      e.preventDefault();
      const x = e.touches[0].pageX;
      const walk = (x - startX) * 2; // Adjust multiplier for sensitivity
      this.rowElement.scrollLeft = scrollLeft - walk;
    };

    const endDrag = () => {
      isDragging = false;
    };

    // Attach event listeners
    this.rowElement.addEventListener('touchstart', onTouchStart, { passive: false });
    this.rowElement.addEventListener('touchmove', onTouchMove, { passive: false });
    this.rowElement.addEventListener('touchend', endDrag);
    this.rowElement.addEventListener('touchcancel', endDrag);

    // Optionally store references to handlers if you want to remove them later
    this._dragScrollHandlers = { onTouchStart, onTouchMove, endDrag };
  }

  disableDragScroll() {
    const { onTouchStart, onTouchMove, endDrag } = this._dragScrollHandlers;
    // Detach event listeners
    this.rowElement.removeEventListener('touchstart', onTouchStart);
    this.rowElement.removeEventListener('touchmove', onTouchMove);
    this.rowElement.removeEventListener('touchend', endDrag);
    this.rowElement.removeEventListener('touchcancel', endDrag);
  }

}
