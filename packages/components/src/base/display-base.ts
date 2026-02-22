import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { spacing, borderWidths, colors, radii, shadows } from '../styles/tokens.js';

export class DisplayBase extends LitElement {
  @property() padding: string = 'none';
  @property() border: string = 'none';
  @property({ attribute: 'border-color' }) borderColor: string = 'gray-200';
  @property({ attribute: 'border-radius' }) borderRadius: string = 'none';
  @property() bg: string = 'transparent';
  @property() shadow: string = 'none';

  protected _displayStyles(): string {
    return `
      padding: ${spacing[this.padding] ?? '0'};
      border: ${borderWidths[this.border] ?? '0'} solid ${colors[this.borderColor] ?? 'transparent'};
      border-radius: ${radii[this.borderRadius] ?? '0'};
      background: ${colors[this.bg] ?? 'transparent'};
      box-shadow: ${shadows[this.shadow] ?? 'none'};
      box-sizing: border-box;
    `;
  }
}
