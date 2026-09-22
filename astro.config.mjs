import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// 纯静态站，部署到 GitHub Pages（项目页托管在 /person-site/ 子路径下）
export default defineConfig({
  site: 'https://lhyxcqc.github.io/person-site',
  base: '/person-site',
  vite: {
    plugins: [tailwindcss()],
  },
});
