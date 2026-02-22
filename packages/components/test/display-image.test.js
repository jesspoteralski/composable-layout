import { html, fixture, expect } from '@open-wc/testing';
import '../dist/displays/display-image.js';

describe('display-image', () => {
  it('renders an img element with src and alt', async () => {
    const el = await fixture(html`
      <display-image src="https://example.com/photo.jpg" alt="A photo"></display-image>
    `);
    const img = el.shadowRoot.querySelector('img');
    expect(img).to.exist;
    expect(img.src).to.contain('photo.jpg');
    expect(img.alt).to.equal('A photo');
  });

  it('renders caption when provided', async () => {
    const el = await fixture(html`
      <display-image src="img.jpg" alt="test" caption="My caption"></display-image>
    `);
    const figcaption = el.shadowRoot.querySelector('figcaption');
    expect(figcaption).to.exist;
    expect(figcaption.textContent).to.equal('My caption');
  });

  it('does not render caption when empty', async () => {
    const el = await fixture(html`
      <display-image src="img.jpg" alt="test"></display-image>
    `);
    const figcaption = el.shadowRoot.querySelector('figcaption');
    expect(figcaption).to.not.exist;
  });

  it('applies aspect-ratio style', async () => {
    const el = await fixture(html`
      <display-image src="img.jpg" alt="test" aspect-ratio="16/9"></display-image>
    `);
    const img = el.shadowRoot.querySelector('img');
    expect(img.style.aspectRatio).to.equal('16/9');
  });
});
