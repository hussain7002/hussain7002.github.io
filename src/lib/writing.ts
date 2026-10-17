import { getCollection, type CollectionEntry } from 'astro:content';

// Articles with draft: true are listed on the live site as "Coming soon" (title and summary only,
// no page). Locally (`npm run dev`, or a build with SHOW_DRAFTS=true) drafts also get their pages.
export const showDrafts = import.meta.env.DEV || process.env.SHOW_DRAFTS === 'true';

export const isReadable = (a: CollectionEntry<'writing'>) => !a.data.draft || showDrafts;

// Published first (featured, then newest), then upcoming.
export async function getArticles() {
  const all = await getCollection('writing');
  return all.sort((a, b) =>
    Number(a.data.draft) - Number(b.data.draft) ||
    Number(b.data.featured) - Number(a.data.featured) ||
    +(b.data.date ?? 0) - +(a.data.date ?? 0) ||
    a.data.title.localeCompare(b.data.title));
}

// Card illustration and colour for an article, by topic (generated art, never screenshots).
const byTopic: Record<string, { arts: string[]; tint: string; labels?: string }> = {
  AI: { arts: ['chat', 'grid'], tint: 'red' },
  DPI: { arts: ['links'], tint: 'blue', labels: 'ID,Consent,Registry,Records,Exchange' },
  'Health data': { arts: ['grid', 'links'], tint: 'green', labels: 'HMIS,RCH,Facility,Indicator,Registry' },
  'Health systems': { arts: ['wards'], tint: 'yellow' },
};
export function topicArt(a: CollectionEntry<'writing'>) {
  const t = byTopic[a.data.topic];
  if (a.data.featured && a.data.topic === 'Health systems') return { art: 'feature', tint: t.tint, labels: t.labels };
  const h = [...a.id].reduce((s, c) => s + c.charCodeAt(0), 0);
  return { art: t.arts[h % t.arts.length], tint: t.tint, labels: t.labels };
}
