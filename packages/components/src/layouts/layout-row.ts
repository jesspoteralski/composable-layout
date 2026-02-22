import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LayoutBase } from '../base/layout-base.js';

const COLUMN_PRESETS: Record<string, string> = {
  '50/50': '1fr 1fr',
  '33/66': '1fr 2fr',
  '66/33': '2fr 1fr',
  '25/75': '1fr 3fr',
  '75/25': '3fr 1fr',
  '33/33/33': '1fr 1fr 1fr',
  '25/50/25': '1fr 2fr 1fr',
  '25/25/25/25': '1fr 1fr 1fr 1fr',
};

@customElement('layout-row')
export class LayoutRow extends LayoutBase {
  static styles = css`
    :host { display: block; }
    ::slotted(*) { container-type: inline-size; }
  `;

  @property() columns: string = '50/50';

  render() {
    const gridTemplate = COLUMN_PRESETS[this.columns] ?? COLUMN_PRESETS['50/50'];
    return html`
      <div style="
        display: grid;
        grid-template-columns: ${gridTemplate};
        ${this._layoutStyles()}
      ">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'layout-row': LayoutRow;
  }
}
