import { LionButton } from '@lion/ui/button';
import { html, css } from 'lit';

class SimpleButton extends LionButton {
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: inline-block;
          width: 100%;
          background-color: #0056b3;
          color: white;
          border: none;
          border-radius: 5px; 
          cursor: pointer;
          font-size: 16px;
          text-align: center;
          line-height: inherit;
        }
        :host(:hover) {
          background-color: #076fcf;
        }
      `,
    ];
  }

  render() {
    return html`
        <slot></slot>
    `;
  }
}

customElements.define('simple-button', SimpleButton);