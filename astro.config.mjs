// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://landing-page-6qh.pages.dev', // TODO: change to custom domain when ready
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});