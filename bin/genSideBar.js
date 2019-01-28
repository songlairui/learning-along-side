const fs = require('fs');
const path = require('path');

const targetFolder = path.resolve(__dirname, '../src');

const ignore = ['assets', '.vuepress'];

const AllMeta = [];

function repeatStr(str, times) {
  return Array.from({ length: times })
    .fill(str)
    .join('');
}

function grabMdFileMeta(file, dir, depth) {
  if (!file.endsWith('README.md')) {
    depth += 1;
  }
  const raw = fs
    .readFileSync(file)
    .toString()
    .split(/\n+/)
    .map((line) => line.trim())
    .filter((line) => line);
  const title =
    (raw[0] || raw[1])
      .trim()
      .replace(/^#/, '')
      .trim() || file;
  const abPath = path.relative(targetFolder, file).replace(/README.md$/, '');
  return {
    file,
    title,
    abPath,
    parent: `/${path.relative(targetFolder, dir)}`,
    text: `${repeatStr('    ', depth - 1)}- [${title}](/${abPath})`
  };
}

function grabDir(dir = targetFolder, parent = '', depth = 0) {
  const children = fs.readdirSync(dir);
  const folderMeta = [];
  const folders = [];
  const files = [];
  children.forEach((file) => {
    if (ignore.includes(file)) return;
    const nextFolder = path.resolve(dir, file);
    if (file.toLowerCase() === 'readme.md') {
      files.unshift(nextFolder);
      return;
    }
    if (file.endsWith('.md')) {
      files.push(nextFolder);
      return;
    }
    if (!fs.statSync(nextFolder).isDirectory()) {
      return;
    }
    folders.push(nextFolder);
  });
  // files first
  files.forEach((file) => {
    const meta = grabMdFileMeta(file, dir, depth);
    folderMeta.push(meta);
  });
  AllMeta.push(...folderMeta);

  // folder then
  folders.forEach((folder) => {
    grabDir(folder, dir, depth + 1);
  });
}

grabDir();

console.info(
  'AllMeta \n',
  AllMeta.slice(1)
    .map((item) => item.text)
    .join('\n')
);