import { getCollection, type CollectionEntry } from 'astro:content';

// Articles with draft: true are listed on the live site as "Coming soon" (title and summary only,
// no page). Locally (`npm run dev`, or a build with SHOW_DRAFTS=true) drafts also get their pages.
export const showDrafts = import.meta.env.DEV || process.env.SHOW_DRAFTS === 'true';

export const isReadable = (a: CollectionEntry<'writing'>) => !a.data.draft || showDrafts;

// Published first (newest first), then upcoming.
export async function getArticles() {
  const all = await getCollection('writing');
  return all.sort((a, b) => Number(a.data.draft) - Number(b.data.draft) || +b.data.date - +a.data.date);
}
