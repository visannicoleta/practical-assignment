import { LionInput } from "@lion/ui/input";
import { css } from "lit";

class SimpleInput extends LionInput {
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 16px;
          margin-bottom: 15px;
        }

        :host:focus {
          border-color: #007bff;
          box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
        }
      `,
    ];
  }
}

customElements.define("simple-input", SimpleInput);
