import {execSync} from 'child_process';

const npmToken = process.env.NPM_TOKEN;

if (!npmToken) {
  console.error('NPM_TOKEN 环境变量未设置！');
  process.exit(1);
}

// 为 npm 设置 auth token
execSync(`npm set //registry.npmjs.org/:_authToken=${npmToken}`);
execSync(`npx changeset publish`);
