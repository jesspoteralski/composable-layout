import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LayoutBase } from '../base/layout-base.js';

@customElement('layout-grid')
export class LayoutGrid extends LayoutBase {
  static styles = css`
    :host { display: block; }
    ::slotted(*) { container-type: inline-size; }
  `;

  @property({ attribute: 'min-item-width' }) minItemWidth: string = '280px';

  render() {
    return html`
      <div style="
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(${this.minItemWidth}, 1fr));
        ${this._layoutStyles()}
      ">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'layout-grid': LayoutGrid;
  }
}
