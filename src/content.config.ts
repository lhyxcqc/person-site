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

// 精选项目：每个「项目 / 系统」一个 .md 文件，放在 src/content/projects/
// 卡片只展示项目级信息（title/summary/role/stack/tags）；
// 具体的「功能介绍」放在 features 里，由前端折叠展开，点击项目即可查看。
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string(),
    stack: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    // 参与概述：一句话概括在该项目中的职责与参与范围（含日常增删查改类工作），不单独列条目
    scope: z.string().default(''),
    // 功能介绍：项目下的核心模块 / 功能点（点击展开查看）
    features: z
      .array(
        z.object({
          name: z.string(),
          desc: z.string().default(''),
        }),
      )
      .default([]),
    challenge: z.string().default(''),
    solution: z.string().default(''),
    result: z.string().default(''),
    order: z.number().default(0),
  }),
});

export const collections = { experiences, projects };
