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
        sidebar: [
            genWhySidebarConfig('环境配置', '/start/', ['one']),
            genWhySidebarConfig('计算机系统漫游', '/one/', [])
        ]
    }
}
function genWhySidebarConfig(title, path, children = []) {
    return {
        title,
        collapsable: false,
        children: [path, ...children.map(item => path + item)]
    }

}