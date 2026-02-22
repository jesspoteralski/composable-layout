import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { DisplayBase } from '../base/display-base.js';

@customElement('display-image')
export class DisplayImage extends DisplayBase {
  static styles = css`
    :host { display: block; }
    figure { margin: 0; }
    img { display: block; width: 100%; height: auto; object-fit: cover; }
    figcaption {
      font-size: 0.875rem;
      color: #6b7280;
      margin-top: 0.5rem;
    }
  `;

  @property() src: string = '';
  @property() alt: string = '';
  @property() caption: string = '';
  @property({ attribute: 'aspect-ratio' }) aspectRatio: string = '';

  render() {
    const imgStyle = this.aspectRatio ? `aspect-ratio:${this.aspectRatio};` : '';
    return html`
      <figure style="${this._displayStyles()}">
        <img src="${this.src}" alt="${this.alt}" style="${imgStyle}" />
        ${this.caption ? html`<figcaption>${this.caption}</figcaption>` : ''}
      </figure>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'display-image': DisplayImage;
  }
}
