import { getCollection } from 'astro:content';

// Draft articles (draft: true) show only in local preview: `npm run dev`, or a build with SHOW_DRAFTS=true.
// The GitHub Pages build never sets SHOW_DRAFTS, so drafts never reach the live site.
export const showDrafts = import.meta.env.DEV || process.env.SHOW_DRAFTS === 'true';

export async function getArticles() {
  const all = await getCollection('writing', ({ data }) => showDrafts || !data.draft);
  return all.sort((a, b) => +b.data.date - +a.data.date);
}
