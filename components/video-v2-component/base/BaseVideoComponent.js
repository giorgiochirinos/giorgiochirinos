/**
 * Base class for all video component managers
 */
export class BaseVideoComponent {
  constructor(root) {
    this.root = root;
  }

  // Hook method to be implemented by subclasses
  initialize() {}
}