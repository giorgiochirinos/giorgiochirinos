export class NavButtonEventManager {
  constructor(host) {
    this.host = host;
    this.dispatchNavButtonEvent = this.dispatchNavButtonEvent.bind(this);
    this.init();
  }

  init() {
    this.host.addEventListener("click", this.dispatchNavButtonEvent);
  }

  dispatchNavButtonEvent() {
    console.log('here')
    // Toggle the host's state
    this.host.close = !this.host.close;
    // Dispatch event for external listeners
    this.host.dispatchEvent(
      new CustomEvent("nav-button-event", {
        bubbles: true,
        composed: true,
        detail: { name: 'nav-button-event', state: this.host.close },
      }),
    );
  }
}
