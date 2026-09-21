import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// 纯静态站，部署到 Gitee Pages（项目页托管在 /personal-site/ 子路径下）
export default defineConfig({
  site: 'https://lhyxcqc.gitee.io/personal-site',
  base: '/personal-site',
  vite: {
    plugins: [tailwindcss()],
  },
});
