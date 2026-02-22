import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { DisplayBase } from '../base/display-base.js';

@customElement('display-text')
export class DisplayText extends DisplayBase {
  static styles = css`
    :host {
      display: block;
      container-type: inline-size;
    }
    .text-wrapper {
      line-height: 1.6;
    }
    @container (max-width: 400px) {
      .text-wrapper { font-size: 0.9rem; }
    }
    @container (min-width: 401px) and (max-width: 768px) {
      .text-wrapper { font-size: 1rem; }
    }
    @container (min-width: 769px) {
      .text-wrapper { font-size: 1.125rem; }
    }
  `;

  render() {
    return html`
      <div class="text-wrapper" style="${this._displayStyles()}">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'display-text': DisplayText;
  }
}
