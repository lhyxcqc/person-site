import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 工作经历：每个公司一个 .md 文件，放在 src/content/experiences/
const experiences = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experiences' }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    period: z.string(),
    summary: z.string(),
    highlights: z.array(z.string()),
    stack: z.array(z.string()).default([]),
    order: z.number().default(0), // 数字越小排越前
  }),
});

// 精选项目：每个项目一个 .md 文件，放在 src/content/projects/
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string(),
    stack: z.array(z.string()).default([]),
    challenge: z.string(),
    solution: z.string(),
    result: z.string(),
    tags: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

export const collections = { experiences, projects };
