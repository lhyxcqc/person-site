// 部署脚本：把 dist 强推到 gh-pages 分支（不改动源码仓库的工作区）
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const ROOT = 'C:/Users/18496/WorkBuddy/personal-site';
const DIST = path.join(ROOT, 'dist');
const TMP = path.join(os.tmpdir(), 'person-site-ghpages');

function run(cmd, cwd) {
  execSync(cmd, { cwd: cwd || ROOT, stdio: 'inherit' });
}

// 1. 提交源码到 develop
run('git add -A');
run('git commit -m "refactor: 项目按项目展示，功能介绍改为点击展开；补全参与项目"');

// 2. 准备临时目录
fs.rmSync(TMP, { recursive: true, force: true });
fs.mkdirSync(TMP, { recursive: true });

// 3. 复制 dist 内容（保留 .nojekyll）
function copyDir(src, dest) {
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      fs.mkdirSync(d, { recursive: true });
      copyDir(s, d);
    } else {
      fs.copyFileSync(s, d);
    }
  }
}
copyDir(DIST, TMP);
if (!fs.existsSync(path.join(TMP, '.nojekyll'))) {
  fs.writeFileSync(path.join(TMP, '.nojekyll'), '');
}

// 4. 初始化临时仓库并强推 gh-pages
run('git init', TMP);
run('git checkout -b gh-pages', TMP);
run('git add -A', TMP);
run('git commit -m "deploy: update site (projects by project + feature details)"', TMP);
run('git remote add origin git@github.com:lhyxcqc/person-site.git', TMP);
run('git push origin gh-pages --force', TMP);

console.log('DEPLOY_DONE');
