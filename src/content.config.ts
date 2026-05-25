import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
    // Load Markdown files in the src/content directory.
    loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.coerce.date(),
        tags: z.array(z.string()),
        img: z.string(),
        img_alt: z.string().optional(),
    }),
});

export const collections = { projects }