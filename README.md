# hussainrao site

Astro static site, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

- `npm run dev`: local preview at http://localhost:4321
- Case studies: `src/content/work/*.md`
- Articles: `src/content/writing/*.md` (front matter: title, summary, topic, date, minutes, featured, draft). The Writing nav link, homepage section and sitemap entry appear automatically once the first article exists.
- Lab tools, publications, email, LinkedIn and CV path: `src/data/site.ts`
- Colours and type: tokens at the top of `src/styles/global.css`
- Custom domain: set `site` in `astro.config.mjs` and add `public/CNAME`
