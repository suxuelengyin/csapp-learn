module.exports = {
    title: "CSAPP 阅读指南",
    head: [
        ['link', { rel: 'icon', href: `/favicon.ico` }],
    ],
    themeConfig: {
        editLinks: true,
        nav: [
            { text: '首页', link: '/' },
            { text: 'Blog', link: 'https://www.suxuewb.cn' },
            { text: 'GitHub', link: 'https://github.com/suxuelengyin/csapp-learn' },
        ],
        sidebar: {
            '/start/': genWhySidebarConfig('为什么')
        }
    }
}
function genWhySidebarConfig (title) {
    return [
      {
        title,
        collapsable: false,
        children: [
          '',
          'one',
        ]
      }
    ]
  }