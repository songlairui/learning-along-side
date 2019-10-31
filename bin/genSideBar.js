const fs = require('fs')
const path = require('path')

const targetFolder = path.resolve(__dirname, '../doc')

const ignore = ['assets', '.vuepress']

function grabMdFileMeta(file, dir, depth) {
  if (!file.endsWith('README.md')) {
    depth += 1
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

  const href = `/${path
    .relative(targetFolder, file)
    .replace(/(README)?\.md$/, '')}`

  const title =
    (raw[titleLine] || '')
      .trim()
      .replace(/^#/, '')
      .trim() || href

  return {
    title,
    href
  }
}

function grabDir(dir = targetFolder, depth = 0, parent = {}) {
  const children = fs.readdirSync(dir)
  const folderMeta = {
    __type__: 'FOLDER',
    cover: null,
    sumlen: null,
    children: []
  }
  // folderMeta.parent = parent
  if (parent) {
    if (!parent.children) {
      parent.children = []
    }
    parent.children.unshift(folderMeta)
  }

  let cover
  const folders = []
  const files = []
  children.forEach(file => {
    if (ignore.includes(file)) return
    const subFolder = path.resolve(dir, file)
    if (file.toLowerCase() === 'readme.md') {
      cover = subFolder
      return
    }
    if (file.endsWith('.md')) {
      files.push(subFolder)
      return
    }
    if (!fs.statSync(subFolder).isDirectory()) {
      return
    }
    folders.push(subFolder)
  })

  if (cover) {
    folderMeta.cover = grabMdFileMeta(cover, dir, depth)
  }
  // files first
  files.forEach(file => {
    const meta = grabMdFileMeta(file, dir, depth)
    folderMeta.children.push(meta)
  })

  // folder then
  folders.forEach(folder => {
    grabDir(folder, depth + 1, folderMeta)
  })

  return folderMeta
}

function calcChildren(meta) {
  const subLengths = (meta.children || []).reduce((sum, item) => {
    const itemLength = calcChildren(item)
    return sum + itemLength
  }, 0)
  const sumlen = (meta.children ? meta.children.length : 0) + subLengths
  if (meta.children) {
    meta.sumlen = sumlen
  }
  return sumlen
}

const genMeta = function() {
  const meta = grabDir()
  calcChildren(meta)
  return meta
}

module.exports = { genMeta }
