import { TemplateManager } from "./managers/templateManager.js";

export class CardV1Component extends HTMLElement{
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.templateManager = new TemplateManager();
    this.shadowRoot.innerHTML = this.templateManager.getStyle() + this.templateManager.getTemplate();
  }

  connectedCallback() {
    this.setAttribute("class", "column")
    this.setAttribute("slot", "column")

  }

  disconnectedCallback() {

  }

  attributeChangedCallback(attrName, oldVal, newValue) {
    if (oldVal !== newValue) {
      switch (attrName) {
        case 'data-ch_lang':
          this.shadowRoot.querySelector(`.${attrName.slice(5)}`)?.setAttribute(
            attrName, newValue
          );
          break;
        case 'data-it_pub_date':
          this.shadowRoot.querySelector(`.${attrName.slice(5)}`)?.setAttribute(
            attrName, newValue
          );
          break;
        case 'data-it_media_type':
          this.shadowRoot.querySelector(`.${attrName.slice(5)}`)?.setAttribute(
            attrName, newValue
          );
          break;
        case 'data-it_duration':
          this.shadowRoot.querySelector(`.${attrName.slice(5)}`)?.setAttribute(
            attrName, newValue
          );
          break;
        case 'data-ch_category':
          this.shadowRoot.querySelector(`.${attrName.slice(5)}`)?.setAttribute(
            attrName, newValue
          );
          break;
        case 'data-caption_language':
          newValue = newValue.slice(0,-1);
          this.shadowRoot.querySelector(`.${attrName.slice(5)}`)?.setAttribute(
            attrName, newValue
          );
          break;
        case 'data-ch_title':
          this.shadowRoot.querySelector(`.${attrName.slice(5)}`)?.setAttribute(
            attrName, newValue
          );
          break;
        case 'data-it_title':
          this.shadowRoot.querySelector(`.${attrName.slice(5)}`)?.setAttribute(
            attrName, newValue
          );
          this.shadowRoot.querySelector(`.${attrName.slice(5)}`)?.setAttribute(
            'title', newValue
          );
          break;
        case 'data-ch_image_url':
          this.shadowRoot.querySelector(`.${attrName.slice(5)}`)?.setAttribute(
            'src', newValue
          );
          break;
      }
    }

  }

  static get observedAttributes() {
    return [
      'data-ch_lang',
      'data-it_pub_date',
      'data-it_media_type',
      'data-it_duration',
      'data-ch_category',
      'data-caption_language',
      'data-ch_title',
      'data-it_title',
      'data-ch_image_url',
    ];
  }


}
