# 梁火云 · 个人求职网站

基于 **Astro + Tailwind CSS** 构建的静态个人站点，用于展示工作经历、精选项目与联系方式，并托管于 **GitHub Pages**。

> 说明：本仓库为源码仓库，GitHub Pages 部署的是 `dist/` 构建产物（见下方部署流程）。

## 技术栈

- [Astro 5](https://astro.build/) — 静态站点生成器
- [Tailwind CSS v4](https://tailwindcss.com/)（`@tailwindcss/vite` 集成）
- 内容集合（Content Collections）：经历与项目均以 Markdown 维护，零前端框架负担

## 目录结构

```
personal-site/
├── astro.config.mjs        # 站点配置（含 GitHub Pages 子路径 base）
├── src/
│   ├── data/site.ts        # 全站配置（姓名/标题/技能/联系方式等）
│   ├── content/            # Markdown 内容
│   │   ├── experiences/    # 工作经历（每家公司一个 .md）
│   │   └── projects/       # 精选项目（每个项目一个 .md）
│   ├── components/         # 页面区块组件（Hero/About/Experience/...）
│   ├── layouts/            # 布局
│   ├── pages/              # 路由页面（首页）
│   └── styles/global.css   # 全局样式与主题变量
└── public/                 # 静态资源（简历 PDF、图片等）
```

## 本地开发与构建

```bash
# 安装依赖
npm install

# 本地预览（开发服务器，热更新）
npm run dev

# 构建静态产物到 dist/
npm run build

# 预览构建结果
npm run preview
```

## 内容维护

- **工作经历**：在 `src/content/experiences/` 新增 `.md`，frontmatter 字段：`company` / `role` / `period` / `summary` / `highlights` / `stack` / `order`（数字越小越靠前）。
- **精选项目**：在 `src/content/projects/` 新增 `.md`，frontmatter 字段：`title` / `summary` / `role` / `stack` / `challenge` / `solution` / `result` / `tags` / `order`。
- **全站信息**：编辑 `src/data/site.ts`（姓名、标题、技能分组、联系方式等）。
- **简历 PDF**：将 `resume.pdf` 放入 `public/` 目录。

## GitHub Pages 部署

本站以子路径形式托管在 GitHub Pages：访问地址为 `https://lhyxcqc.github.io/person-site/`。

配置要点：

- `astro.config.mjs` 中已设置 `base: '/person-site'`，使所有内链与资源路径自动带上子路径前缀。
- 部署时把 `dist/`（构建产物）推送到仓库的 `gh-pages` 分支根目录。
- 在 GitHub 仓库 **Settings → Pages** 中，Source 选择 **Deploy from a branch**，分支选 **`gh-pages`**、目录选 **`/ (root)`**，保存后即生效（首次生成约需 1 分钟）。

```bash
# 1. 本地构建
npm run build

# 2. 将 dist 内容发布到 gh-pages 分支
#    方式 A：用 gh-pages 工具（推荐，先 npm i -D gh-pages）
npx gh-pages -d dist

#    方式 B：手动 subtree 推送
git subtree push --prefix dist origin gh-pages
```

> 注意：GitHub Pages 项目站点地址带仓库名子路径；若改用用户主页仓库 `<username>.github.io`，则需将 `base` 置空并部署到该仓库的 `main` 分支。

## 仓库与镜像

- 主仓库（部署源）：GitHub `lhyxcqc/person-site`
- 镜像仓库：Gitee `lhyxcqc/personal-site`

## 说明

- 站点页面内不含任何第三方代码托管平台的跳转链接。
- 联系方式中的微信二维码等素材为后续补充项。
