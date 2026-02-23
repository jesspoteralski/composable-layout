import { defineConfig } from 'astro/config';
import lit from '@astrojs/lit';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [lit(), mdx()],
});
