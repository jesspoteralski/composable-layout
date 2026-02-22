import { html, fixture, expect } from '@open-wc/testing';
import '../dist/displays/display-card.js';

describe('display-card', () => {
  it('renders heading and body', async () => {
    const el = await fixture(html`
      <display-card heading="Test Title" body="Test body text"></display-card>
    `);
    const heading = el.shadowRoot.querySelector('.card-heading');
    const body = el.shadowRoot.querySelector('.card-text');
    expect(heading.textContent).to.equal('Test Title');
    expect(body.textContent).to.equal('Test body text');
  });

  it('renders image when image-src provided', async () => {
    const el = await fixture(html`
      <display-card image-src="https://example.com/img.jpg" image-alt="Test"></display-card>
    `);
    const img = el.shadowRoot.querySelector('img');
    expect(img).to.exist;
    expect(img.src).to.contain('img.jpg');
    expect(img.alt).to.equal('Test');
  });

  it('renders CTA link when both cta-text and cta-href provided', async () => {
    const el = await fixture(html`
      <display-card cta-text="Learn More" cta-href="/about"></display-card>
    `);
    const cta = el.shadowRoot.querySelector('.card-cta');
    expect(cta).to.exist;
    expect(cta.textContent).to.equal('Learn More');
    expect(cta.getAttribute('href')).to.equal('/about');
  });

  it('does not render CTA when cta-text is missing', async () => {
    const el = await fixture(html`
      <display-card cta-href="/about"></display-card>
    `);
    const cta = el.shadowRoot.querySelector('.card-cta');
    expect(cta).to.not.exist;
  });

  it('applies display style tokens', async () => {
    const el = await fixture(html`
      <display-card padding="md" shadow="lg" border-radius="md" heading="Styled"></display-card>
    `);
    const card = el.shadowRoot.querySelector('.card');
    expect(card.style.padding).to.equal('1rem');
    expect(card.style.borderRadius).to.equal('0.5rem');
  });
});
