import { defineCollection, z } from 'astro:content';

// Định nghĩa schema cho collection posts
const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.union([z.date(), z.string().transform((str) => new Date(str))]),
    author: z.string(),
    tags: z.array(z.string()),
    layout: z.string().optional(),
  }),
});

// Xuất các collections
export const collections = {
  posts: postsCollection,
};
