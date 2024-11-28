import { LionForm } from '@lion/ui/form';
import { css } from 'lit';

class SimpleForm extends LionForm {
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
      `,
    ];
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('submit', this._onSubmit);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('submit', this._onSubmit);
  }

  _onSubmit(event) {
    event.preventDefault();
    this.dispatchEvent(new CustomEvent('form-submit', {
      detail: { message: 'Form submitted!' },
      bubbles: true,
      composed: true
    }));
  }
}

customElements.define('simple-form', SimpleForm);