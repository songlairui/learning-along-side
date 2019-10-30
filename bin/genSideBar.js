const fs = require('fs')
const path = require('path')

const targetFolder = path.resolve(__dirname, '../doc')

const ignore = ['assets', '.vuepress']

const AllMeta = []
const AllMetaNested = []

function repeatStr(str, times) {
  return Array.from({ length: times })
    .fill(str)
    .join('')
}

function grabMdFileMeta(file, dir, depth) {
  let __type__
  if (!file.endsWith('README.md')) {
    depth += 1
  } else {
    __type__ = 'README'
  }
  const raw = fs
    .readFileSync(file)
    .toString()
    .split(/\n+/)
    .map(line => line.trim())
    .filter(line => line)
  let titleLine = 0
  if (raw[0].startsWith('---')) {
    let reachMatterEnd = false
    while (!reachMatterEnd) {
      titleLine++
      reachMatterEnd = raw[titleLine].startsWith('---')
    }
    titleLine++
  }
  const title =
    (raw[titleLine] || '')
      .trim()
      .replace(/^#/, '')
      .trim() || file
  const abPath = path.relative(targetFolder, file).replace(/README.md$/, '')
  return {
    __type__,
    file,
    title,
    abPath,
    parent: `/${path.relative(targetFolder, dir)}`,
    text: `${repeatStr('    ', depth - 1)}- [${title}](/${abPath})`
  }
}

function grabDir(dir = targetFolder, depth = 0, parent = []) {
  const children = fs.readdirSync(dir)
  const folderMeta = []
  folderMeta.parent = parent
  if (!parent[0]) {
    parent[0] = [{ __type__: 'README', children: [] }]
  }
  if (parent[0].__type__ !== 'README') {
    parent.unshift({ __type__: 'README', children: [] })
  }
  if (!parent[0].children) {
    parent[0].children = []
  }
  parent[0].children.push(folderMeta)

  const folders = []
  const files = []
  children.forEach(file => {
    if (ignore.includes(file)) return
    const nextFolder = path.resolve(dir, file)
    if (file.toLowerCase() === 'readme.md') {
      files.unshift(nextFolder)
      return
    }
    if (file.endsWith('.md')) {
      files.push(nextFolder)
      return
    }
    if (!fs.statSync(nextFolder).isDirectory()) {
      return
    }
    folders.push(nextFolder)
  })
  // files first
  files.forEach(file => {
    const meta = grabMdFileMeta(file, dir, depth)
    folderMeta.push(meta)
  })
  AllMeta.push(...folderMeta)
  AllMetaNested.push(folderMeta)

  // folder then
  folders.forEach(folder => {
    grabDir(folder, depth + 1, folderMeta)
  })
}

function genMeta() {
  AllMeta.length = 0
  grabDir()
  AllMeta.__nested__ = AllMetaNested[0]
  return AllMeta
}

module.exports = { genMeta }

// grabDir();

// console.info(
//   'AllMeta \n',
//   AllMeta.slice(1)
//     .map((item) => item.text)
//     .join('\n')
// );
