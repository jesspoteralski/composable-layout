import { html, fixture, expect } from '@open-wc/testing';
import '../dist/layouts/layout-row.js';

describe('layout-row', () => {
  it('renders a grid container', async () => {
    const el = await fixture(html`<layout-row><p>A</p><p>B</p></layout-row>`);
    const div = el.shadowRoot.querySelector('div');
    expect(div).to.exist;
    expect(div.style.display).to.equal('grid');
  });

  it('defaults to 50/50 columns (1fr 1fr)', async () => {
    const el = await fixture(html`<layout-row><p>A</p><p>B</p></layout-row>`);
    const div = el.shadowRoot.querySelector('div');
    expect(div.style.gridTemplateColumns).to.equal('1fr 1fr');
  });

  it('applies 33/66 column preset (1fr 2fr)', async () => {
    const el = await fixture(html`<layout-row columns="33/66"><p>A</p><p>B</p></layout-row>`);
    const div = el.shadowRoot.querySelector('div');
    expect(div.style.gridTemplateColumns).to.equal('1fr 2fr');
  });

  it('applies 25/50/25 column preset', async () => {
    const el = await fixture(html`<layout-row columns="25/50/25"><p>A</p><p>B</p><p>C</p></layout-row>`);
    const div = el.shadowRoot.querySelector('div');
    expect(div.style.gridTemplateColumns).to.equal('1fr 2fr 1fr');
  });

  it('falls back to 50/50 for unknown preset', async () => {
    const el = await fixture(html`<layout-row columns="10/90"><p>A</p><p>B</p></layout-row>`);
    const div = el.shadowRoot.querySelector('div');
    expect(div.style.gridTemplateColumns).to.equal('1fr 1fr');
  });
});
