import { html, fixture, expect } from '@open-wc/testing';
import '../dist/layouts/layout-grid.js';

describe('layout-grid', () => {
  it('renders a grid with auto-fill columns', async () => {
    const el = await fixture(html`<layout-grid><p>A</p></layout-grid>`);
    const div = el.shadowRoot.querySelector('div');
    expect(div).to.exist;
    expect(div.style.display).to.equal('grid');
    expect(div.style.gridTemplateColumns).to.contain('auto-fill');
  });

  it('uses default min-item-width of 280px', async () => {
    const el = await fixture(html`<layout-grid><p>A</p></layout-grid>`);
    const div = el.shadowRoot.querySelector('div');
    expect(div.style.gridTemplateColumns).to.contain('280px');
  });

  it('accepts custom min-item-width', async () => {
    const el = await fixture(html`<layout-grid min-item-width="200px"><p>A</p></layout-grid>`);
    const div = el.shadowRoot.querySelector('div');
    expect(div.style.gridTemplateColumns).to.contain('200px');
  });
});
