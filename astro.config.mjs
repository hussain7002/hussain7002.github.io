// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

// The Writing index stays out of the sitemap while there are no articles at all.
const hasWriting = readdirSync('./src/content/writing').some((f) => f.endsWith('.md'));
const hasLab = /lab: [^=]+= \[\s*\{/.test(readFileSync('./src/data/site.ts', 'utf8'));

// Change `site` to the custom domain (e.g. https://hussainrao.com) once it is bought,
// and add public/CNAME containing that domain.
export default defineConfig({
  site: 'https://hussain7002.github.io',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => (hasWriting || !page.endsWith('/writing/')) && (hasLab || !page.endsWith('/lab/')) })],
});
