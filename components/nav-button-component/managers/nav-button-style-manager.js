export class NavButtonStyleManager {
  constructor() {
    
  }

  getStyle() {
    return `
      <style>
      :host {
        display: inline-block;
        cursor: pointer;
      }

      .bar1, .bar2, .bar3 {
        width: 2rem;
        height: 0.35rem;
        background-color: #333;
        margin: 0.3rem 0;
        transition: 0.4s;
      }

      div.bar1.changed {
        transform: translate(0, 11px) rotate(-45deg);
      }

      div.bar2.changed {opacity: 0;}

      div.bar3.changed {
        transform: translate(0, -11px) rotate(45deg);
      }
      </style>
    `;
  }
}
