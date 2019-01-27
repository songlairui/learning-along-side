const path = require('path');

module.exports = (ctx) => ({
  base: '/learning-along-side/',
  dest: path.resolve(__dirname, '../../dist'),
  theme: '@vuepress/theme-default',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '学习纪录',
      description: 'Trace'
    }
  },
  head: [['meta', { name: 'theme-color', content: '#3eaf7c' }]],
  themeConfig: {
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitLab 上编辑此页',
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
    ['@vuepress/notification', true]
  ],
  clientRootMixin: path.resolve(__dirname, 'mixin.js')
});

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
  ];
}

function getBasicSkillsSidebar() {
  return [
    {
      title: '堆',
      collapsable: true,
      children: [
        '/basic-skills/heap/',
        '/basic-skills/heap/init',
        '/basic-skills/heap/animated',
        '/basic-skills/heap/sort',
        '/basic-skills/heap/sort-animated'
      ]
    },
    {
      title: '-',
      collapsable: false,
      children: ['/basic-skills/']
    }
  ];
}
