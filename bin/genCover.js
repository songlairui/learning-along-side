const fs = require('fs');
const path = require('path');

const { genMeta } = require('./genSideBar');

const targetFile = path.resolve(__dirname, '../src/README.md');
const meta = genMeta();

const str = `# 文档\n<!-- 自动生成 -->\n\n${meta
  .slice(1)
  .map((item) => item.text)
  .join('\n')}`;

fs.writeFileSync(targetFile, str);