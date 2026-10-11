// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'node:fs';

// /writing/ only redirects to /work/#articles, so it stays out of the sitemap.
const hasLab = /lab: [^=]+= \[\s*\{/.test(readFileSync('./src/data/site.ts', 'utf8'));

// Change `site` to the custom domain (e.g. https://hussainrao.com) once it is bought,
// and add public/CNAME containing that domain.
export default defineConfig({
  site: 'https://hussain7002.github.io',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.endsWith('/writing/') && (hasLab || !page.endsWith('/lab/')) })],
});
