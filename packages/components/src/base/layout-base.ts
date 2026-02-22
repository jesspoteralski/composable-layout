import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { spacing, borderWidths, colors, widths, justifyOptions } from '../styles/tokens.js';

export class LayoutBase extends LitElement {
  @property() padding: string = 'none';
  @property() border: string = 'none';
  @property({ attribute: 'border-color' }) borderColor: string = 'gray-200';
  @property() bg: string = 'transparent';
  @property({ attribute: 'max-width' }) maxWidth: string = 'full';
  @property() justify: string = 'stretch';
  @property() gap: string = 'md';

  protected _layoutStyles(): string {
    return `
      padding: ${spacing[this.padding] ?? '0'};
      border: ${borderWidths[this.border] ?? '0'} solid ${colors[this.borderColor] ?? 'transparent'};
      background: ${colors[this.bg] ?? 'transparent'};
      max-width: ${widths[this.maxWidth] ?? '100%'};
      margin-inline: auto;
      align-items: ${justifyOptions[this.justify] ?? 'stretch'};
      gap: ${spacing[this.gap] ?? '1rem'};
      box-sizing: border-box;
    `;
  }
}
