import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const tint = z.enum(['blue', 'red', 'green', 'yellow']);

// Case studies: one Markdown file each in src/content/work/
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    org: z.string(),
    client: z.string(),
    place: z.string(),
    year: z.string(),
    role: z.string(),
    tag: z.string(),
    tint,
    art: z.string(),
    artLabels: z.string().optional(),
    number: z.string(),
    numberCaption: z.string(),
    order: z.number(),
    home: z.boolean().default(false),
  }),
});

// Articles: one Markdown file each in src/content/writing/. Set draft: true to hide.
const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    topic: z.enum(['DPI', 'Health data', 'Health systems', 'AI']),
    date: z.coerce.date(),
    minutes: z.number(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, writing };
