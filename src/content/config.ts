
import { defineCollection, z } from 'astro:content';

const logs = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        // Optional tags or other metadata
        tags: z.array(z.string()).optional(),
    }),
});

const articles = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        updatedDate: z.date().optional(),
        tags: z.array(z.string()).default([]),
    }),
});

export const collections = {
    'logs': logs,
    'articles': articles,
};
