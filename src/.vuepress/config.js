const path = require('path');

module.exports = (ctx) => ({
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
          '/user-guide/': getUserGuideSidebar('使用指南', '高级功能')
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
