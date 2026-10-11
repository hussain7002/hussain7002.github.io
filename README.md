# Hussain MS: portfolio site

Astro static site, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

- `npm run dev`: local preview at http://localhost:4321
- Case studies: `src/content/work/*.md`
- Articles: `src/content/writing/*.md` (front matter: title, summary, topic, date, minutes, featured, draft). `draft: true` articles appear on the live site as "Coming soon" cards (title and summary, no page); locally (`npm run dev` or `SHOW_DRAFTS=true npm run build`) their pages open too. Set `draft: false` to publish.
- Lab tools, publications, email, LinkedIn and CV path: `src/data/site.ts`
- Colours and type: tokens at the top of `src/styles/global.css`
- Custom domain: set `site` in `astro.config.mjs` and add `public/CNAME`
