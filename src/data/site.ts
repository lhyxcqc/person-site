// 站点级配置：改这里即可调整个人信息、技能、社交链接
// 工作经历 / 精选项目不在此文件，见 src/content/{experiences,projects}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  siteBase: string;
  tagline: string;
  location: string;
  email: string;
  resumeUrl: string;
  about: string;
  skills: SkillGroup[];
  social: SocialLink[];
}

export const site: SiteConfig = {
  name: '梁火云',
  title: '后端开发工程师',
  siteBase: '/person-site',
  tagline: '8 年 C#/.NET 后端开发工程师 · 2024 年下半年起接触 Java · 信创 / 达梦迁移方向',
  location: '重庆',
  email: 'lhyxcqc@qq.com',
  resumeUrl: '/resume.pdf',         // 放置简历 PDF 到 public/resume.pdf
  about:
    '8 年后端开发经验，以 C#/.NET 为主栈，2024 年下半年起接触并实践 Java/Spring Boot。近一年聚焦信创方向，' +
    '主导某工业监控平台的 MySQL → 达梦（DM）数据库迁移，处理方言差异、排序规则冲突与严格 GROUP BY 等适配问题；' +
    '并负责分布式点位同步服务的并发一致性与死锁排查。习惯先分析、再落地，用工程化方式解决迁移与同步难题。',
  skills: [
    { category: '语言', items: ['C#', 'Java'] },
    { category: '框架', items: ['.NET 6', 'ASP.NET', 'Spring Boot 3'] },
    { category: '数据库', items: ['MySQL', '达梦 DM', 'Redis'] },
    { category: '架构 / 中间件', items: ['微服务', '分布式同步', '消息队列', '信创适配'] },
  ],
  social: [
    { label: 'Email', url: 'mailto:lhyxcqc@qq.com' },
    { label: '微信', url: '#' }, // 后续替换为二维码图片（如 /wechat-qr.png）
  ],
};
