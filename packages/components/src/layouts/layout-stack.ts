import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { LayoutBase } from '../base/layout-base.js';

@customElement('layout-stack')
export class LayoutStack extends LayoutBase {
  static styles = css`
    :host { display: block; }
    ::slotted(*) { container-type: inline-size; }
  `;

  render() {
    return html`
      <div style="display:flex; flex-direction:column; ${this._layoutStyles()}">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'layout-stack': LayoutStack;
  }
}
