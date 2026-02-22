import { html, fixture, expect } from '@open-wc/testing';
import '../dist/layouts/layout-stack.js';

describe('layout-stack', () => {
  it('renders a slot inside a flex-column container', async () => {
    const el = await fixture(html`<layout-stack><p>Hello</p></layout-stack>`);
    const div = el.shadowRoot.querySelector('div');
    expect(div).to.exist;
    expect(div.style.display).to.equal('flex');
    expect(div.style.flexDirection).to.equal('column');
  });

  it('applies token-driven padding', async () => {
    const el = await fixture(html`<layout-stack padding="lg"><p>Hi</p></layout-stack>`);
    const div = el.shadowRoot.querySelector('div');
    expect(div.style.padding).to.equal('2rem');
  });

  it('applies gap from token', async () => {
    const el = await fixture(html`<layout-stack gap="xl"><p>Hi</p></layout-stack>`);
    const div = el.shadowRoot.querySelector('div');
    expect(div.style.gap).to.equal('4rem');
  });

  it('defaults gap to md', async () => {
    const el = await fixture(html`<layout-stack><p>Hi</p></layout-stack>`);
    const div = el.shadowRoot.querySelector('div');
    expect(div.style.gap).to.equal('1rem');
  });

  it('distributes slotted children', async () => {
    const el = await fixture(html`
      <layout-stack>
        <p>One</p>
        <p>Two</p>
      </layout-stack>
    `);
    const slot = el.shadowRoot.querySelector('slot');
    const assigned = slot.assignedElements();
    expect(assigned.length).to.equal(2);
  });
});
