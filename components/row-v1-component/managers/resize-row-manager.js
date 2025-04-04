
export class ResizeRowManager {
  constructor(host) {
    this.host = host;
  }

  startObserving() {
    // Add ResizeObserver to adjust row width
    this.resizeObserver = new ResizeObserver(() => this.adjustRowWidth());
    this.resizeObserver.observe(this.host);

  }

  adjustRowWidth() {
    const row = this.host.shadowRoot.querySelector('.row');
    if (!row) return;

    const hostWidth = this.host.offsetWidth;
    const columnWidth = parseFloat(getComputedStyle(this.host).getPropertyValue('--column-width')) * 16; // rem to px
    const columnGap = parseFloat(getComputedStyle(this.host).getPropertyValue('--column-gap')) * 16;

    const columnsPerView = Math.floor((hostWidth + columnGap) / (columnWidth + columnGap));
    const totalWidth = columnsPerView * (columnWidth + columnGap) - columnGap;

    row.style.width = `${totalWidth}px`;
  }

  disconnectObserver() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

}
