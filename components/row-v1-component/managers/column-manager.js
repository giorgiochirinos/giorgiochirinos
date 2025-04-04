// File: components/managers/column-manager.js
// Manages column elements and their events

export class ColumnManager extends EventTarget {
  constructor(slotElement) {
    super();
    this.slotElement = slotElement;
    this.columns = [];

    this.handleColumnClick = this.handleColumnClick.bind(this)
    
    this.init();
  }
  
  init() {
    console.log('init() columnManger');
    this.slotElement.addEventListener('slotchange', (e) => {
      console.log('slotchange event')
      this.columns = e.target.assignedElements();
      this.setupColumnEvents();
    });
  }
  
  setupColumnEvents() {

    if (this.slotElementClickEventHandler) {
      console.log('this.slotElementClickEventHandler already exists');
      // remove existing clic event listener
      this.slotElement.removeEventListener('click', this.slotElementClickEventHandler);
    }
    // save handle
    this.slotElementClickEventHandler = (e) => {
      const column = e.target.closest('.column');
      if (column && this.columns.includes(column)) {
        this.handleColumnClick(e, column);
      }
    }

    this.slotElement.addEventListener('click', this.slotElementClickEventHandler);
  }
  
  handleColumnClick(e, column) {
    console.log('column-event dispatched')
    // Remove highlight from all columns
    this.columns.forEach(col => this.removeColumnHighlight(col));
    // Highlight the clicked column
    this.addColumnHighlight(column);
    // Dispatch a custom event
    this.dispatchEvent(new CustomEvent('column-event', {
      detail: {
        target: e.target
      }
    }));


  }
  
  // Methods for column management can be added here
  // For example:
  
  getColumnByIndex(index) {
    return this.columns[index] || null;
  }
  
  getColumnCount() {
    return this.columns.length;
  }
  
  addColumnHighlight(columnElement) {
    columnElement.classList.add('highlighted');
  }

  removeColumnHighlight(columnElement) {
    columnElement.classList.remove('highlighted');
  }
}
