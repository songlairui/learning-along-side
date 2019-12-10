var path = require('path')
var extendMarkdown = require('./extendMarkdown')
var componentsDir = path.resolve(__dirname, '../../sfc')
var chainGql = require('./chainGql')

module.exports = {
  markdown: {
    extendMarkdown,
    lineNumbers: true
  },
  base: '/learning-along-side/',
  dest: path.resolve(__dirname, '../../dist'),
  locales: {
    '/': {
      editLinkText: '在 GitHub 上编辑此页',
      lang: 'zh-CN',
      title: '学习记录',
      description: 'Trace'
    }
  },
  head: [['meta', { name: 'theme-color', content: '#3eaf7c' }]],
  themeConfig: {
    repo: 'songlairui/learning-along-side',
    docsDir: 'doc',
    editLinks: true,
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: require('./nav/zh'),
        sidebar: {
          '/user-guide/': getUserGuideSidebar('使用指南', '高级功能'),
          '/basic-skills/': getBasicSkillsSidebar('数据结构', '算法')
        }
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    ['@vuepress/medium-zoom', true],
    ['@vuepress/notification', true],
    [
      '@vuepress/register-components',
      {
        componentsDir
      }
    ],
    ['@vuepress/nprogress'],
    [
      '@vssue/vuepress-plugin-vssue',
      {
        platform: 'github',

        owner: 'songlairui',
        repo: 'https://github.com/songlairui/learning-along-side',
        clientId: '65c3f006e1b4a04d624e',
        clientSecret: '25a503d52dbd31ddd7cde927cdf75195ecb5408b'
      }
    ],
    ['flowchart'],
    ['element-tabs']
  ],
  clientRootMixin: path.resolve(__dirname, 'mixin.js'),
  chainWebpack(config) {
    chainGql(config)
  }
}

function getUserGuideSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: ['', 'product', 'application']
    },
    {
      title: groupB,
      collapsable: false,
      children: ['clients']
    }
  ]
}

function getBasicSkillsSidebar() {
  return [
    {
      title: '栈',
      children: ['/basic-skills/stack/', '/basic-skills/stack/min-stack']
    },
    {
      title: '队列',
      children: ['/basic-skills/queue/', '/basic-skills/queue/priority-queue']
    },
    {
      title: '堆',
      children: [
        '/basic-skills/heap/',
        '/basic-skills/heap/init',
        '/basic-skills/heap/animated',
        '/basic-skills/heap/sort',
        '/basic-skills/heap/sort-animated',
        '/basic-skills/heap/divider',
        '/basic-skills/heap/binomial'
      ]
    },
    {
      title: '树',
      children: [
        '/basic-skills/tree/',
        '/basic-skills/tree/display.md',
        '/basic-skills/tree/bst.md',
        '/basic-skills/tree/avl.md'
      ]
    }
  ]
}
