import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { DisplayBase } from '../base/display-base.js';

@customElement('display-card')
export class DisplayCard extends DisplayBase {
  static styles = css`
    :host {
      display: block;
      container-type: inline-size;
    }
    .card {
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .card-image img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
      aspect-ratio: 16/9;
    }
    .card-body {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 1rem;
    }
    .card-heading {
      margin: 0;
      font-size: 1.25rem;
      font-weight: 600;
    }
    .card-text {
      margin: 0;
      color: #4b5563;
      line-height: 1.5;
    }
    .card-cta {
      display: inline-block;
      margin-top: 0.5rem;
      padding: 0.5rem 1rem;
      background: #2563eb;
      color: white;
      text-decoration: none;
      border-radius: 0.375rem;
      font-size: 0.875rem;
      align-self: flex-start;
    }
    .card-cta:hover { background: #1d4ed8; }

    @container (min-width: 600px) {
      .card {
        flex-direction: row;
      }
      .card-image {
        flex: 0 0 40%;
      }
      .card-image img {
        height: 100%;
        aspect-ratio: auto;
      }
    }
  `;

  @property({ attribute: 'image-src' }) imageSrc: string = '';
  @property({ attribute: 'image-alt' }) imageAlt: string = '';
  @property() heading: string = '';
  @property() body: string = '';
  @property({ attribute: 'cta-text' }) ctaText: string = '';
  @property({ attribute: 'cta-href' }) ctaHref: string = '';

  render() {
    return html`
      <div class="card" style="${this._displayStyles()}">
        ${this.imageSrc ? html`
          <div class="card-image">
            <img src="${this.imageSrc}" alt="${this.imageAlt}" />
          </div>
        ` : ''}
        <div class="card-body">
          ${this.heading ? html`<h3 class="card-heading">${this.heading}</h3>` : ''}
          ${this.body ? html`<p class="card-text">${this.body}</p>` : ''}
          ${this.ctaText && this.ctaHref ? html`
            <a class="card-cta" href="${this.ctaHref}">${this.ctaText}</a>
          ` : ''}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'display-card': DisplayCard;
  }
}
