export class TemplateManager {
  constructor() {
    
  }
  
  getStyle() {
    return `
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

      :host {
        font-family: "Roboto", sans-serif;
        display: inline grid;
        grid-template-areas:
          "ch_lang it_pub_date it_media_type"
          "it_duration ch_category caption_language"
          "ch_title ch_title ch_title"
          "it_title it_title it_title";
        justify-items: center;
        align-items: center;
        align-content: space-between;
        position: relative;
      }
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        object-fit: contain;
        transform: translate(-50%, -50%);
        z-index: -1;
      }

      span {
        font-size: 0.8rem;
        padding: .5rem;
        border: 1px solid black;
        border-radius: 10px;
        text-align: center;
      }

      span.ch_lang {
        grid-area: ch_lang;
      }
      span.ch_lang::before {
        content: attr(data-ch_lang);
      }

      span.it_pub_date {
        grid-area: it_pub_date;
      }
      span.it_pub_date::before {
        content: attr(data-it_pub_date);
      }

      span.it_media_type {
        grid-area: it_media_type;
      }
      span.it_media_type::before {
        content: attr(data-it_media_type);
      }

      span.it_duration {
        grid-area: it_duration;
      }
      span.it_duration::before {
        content: attr(data-it_duration);
      }

      span.ch_category {
        grid-area: ch_category;
      }
      span.ch_category::before {
        content: attr(data-ch_category);
      }

      span.caption_language {
        grid-area: caption_language;
      }
      span.caption_language::before {
        content: attr(data-caption_language);
      }
      
      span.ch_title {
        grid-area: ch_title;
      }
      span.ch_title::before {
        content: attr(data-ch_title);
      }

      span.it_title {
        grid-area: it_title;
      }
      span.it_title::before {
        content: attr(data-it_title);
      }

    </style>
    `;
  }

  getTemplate() {
    return `
      <img class="ch_image_url">
      <span class="ch_lang">
      </span>
      <span class="it_pub_date">
      </span>
      <span class="it_media_type">
      </span>
      <span class="it_duration">
      </span>
      <span class="ch_category">
      </span>
      <span class="caption_language">
      </span>
      <span class="ch_title">
      </span>
      <span class="it_title">
      </span>
    `;
  }
}
