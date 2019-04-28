var mk = require('markdown-it-katex')
module.exports = {
	title: "CSAPP 阅读指南",
	head: [
		['link', { rel: 'icon', href: `/favicon.ico` }],
		['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css" }]
	],
	markdown: {
		extendMarkdown: md => {
			md.use(mk, { "throwOnError": false, "errorColor": " #cc0000" })
		}
	},
	themeConfig: {
		editLinks: true,
		nav: [
			{ text: '首页', link: '/' },
			{ text: 'Blog', link: 'https://www.suxuewb.cn' },
			{ text: 'GitHub', link: 'https://github.com/suxuelengyin/csapp-learn' },
		],
		sidebar: [
			genWhySidebarConfig('环境配置', '/environment/', ['start']),
			genWhySidebarConfig('计算机系统漫游', '/one-guide/', ["compilation","deal","operating"])
		]
	},

}
function genWhySidebarConfig(title, path, children = []) {
	return {
		title,
		collapsable: false,
		children: [path, ...children.map(item => path + item)]
	}

}