import { defineConfig } from 'vitepress'

export default defineConfig({
	lang: 'zh-Hans',
	title: 'StarM Team Docs',
	description: '碎梦星尘Star的文档站',
	head: [['link', { rel: 'icon', href: '/logo.ico' }]],
	themeConfig: {
		logo: '/logo.svg',
		nav: [
			{ text: 'Home', link: '/' },
			{
				text: 'StarM Client',
				link: '/mcclient/download',
				activeMatch: '/mcclient/',
			},
			{
				text: 'Blog',
				link: '/blog/ai/在Windows上部署ollama',
				activeMatch: '/blog/',
			},
		],
		search: {
			provider: 'local',
			options: {
				translations: {
					button: {
						buttonText: '搜索文档',
						buttonAriaLabel: '搜索文档',
					},
					modal: {
						noResultsText: '无法找到结果',
						resetButtonTitle: '清除查询条件',
						footer: {
							selectText: '选择',
							navigateText: '切换',
							closeText: '关闭',
						},
					},
				},
			},
		},
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/BrokenDreamStar' },
			{
				icon: {
					svg: '<svg t="1711953207027" class="icon" viewBox="0 0 1129 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3635" width="32" height="32"><path d="M234.909 9.656a80.468 80.468 0 0 1 68.398 0 167.374 167.374 0 0 1 41.843 30.578l160.937 140.82h115.07l160.936-140.82a168.983 168.983 0 0 1 41.843-30.578A80.468 80.468 0 0 1 930.96 76.445a80.468 80.468 0 0 1-17.703 53.914 449.818 449.818 0 0 1-35.406 32.187 232.553 232.553 0 0 1-22.531 18.508h100.585a170.593 170.593 0 0 1 118.289 53.109 171.397 171.397 0 0 1 53.914 118.288v462.693a325.897 325.897 0 0 1-4.024 70.007 178.64 178.64 0 0 1-80.468 112.656 173.007 173.007 0 0 1-92.539 25.75h-738.7a341.186 341.186 0 0 1-72.421-4.024A177.835 177.835 0 0 1 28.91 939.065a172.202 172.202 0 0 1-27.36-92.539V388.662a360.498 360.498 0 0 1 0-66.789A177.03 177.03 0 0 1 162.487 178.64h105.414c-16.899-12.07-31.383-26.555-46.672-39.43a80.468 80.468 0 0 1-25.75-65.984 80.468 80.468 0 0 1 39.43-63.57M216.4 321.873a80.468 80.468 0 0 0-63.57 57.937 108.632 108.632 0 0 0 0 30.578v380.615a80.468 80.468 0 0 0 55.523 80.469 106.218 106.218 0 0 0 34.601 5.632h654.208a80.468 80.468 0 0 0 76.444-47.476 112.656 112.656 0 0 0 8.047-53.109v-354.06a135.187 135.187 0 0 0 0-38.625 80.468 80.468 0 0 0-52.304-54.719 129.554 129.554 0 0 0-49.89-7.242H254.22a268.764 268.764 0 0 0-37.82 0z m0 0" fill="#20B0E3" p-id="3636"></path><path d="M348.369 447.404a80.468 80.468 0 0 1 55.523 18.507 80.468 80.468 0 0 1 28.164 59.547v80.468a80.468 80.468 0 0 1-16.094 51.5 80.468 80.468 0 0 1-131.968-9.656 104.609 104.609 0 0 1-10.46-54.719v-80.468a80.468 80.468 0 0 1 70.007-67.593z m416.02 0a80.468 80.468 0 0 1 86.102 75.64v80.468a94.148 94.148 0 0 1-12.07 53.11 80.468 80.468 0 0 1-132.773 0 95.757 95.757 0 0 1-12.875-57.133V519.02a80.468 80.468 0 0 1 70.007-70.812z m0 0" fill="#20B0E3" p-id="3637"></path></svg>',
				},
				link: 'https://space.bilibili.com/96257456',
			},
		],
		sidebar: {
			'/mcclient/': sidebarMcclient(),
			'/blog/ai/': sidebarBlog(),
		},
		outlineTitle: '当前页面目录',
		outline: [2, 5],
		docFooter: {
			prev: '上一页',
			next: '下一页',
		},
		lastUpdated: {
			text: '最后更新于',
			formatOptions: {
				dateStyle: 'short',
				timeStyle: 'medium',
			},
		},
		footer: {
			copyright: 'Copyright © 2021-2025 StarM Team',
		},
	},
	ignoreDeadLinks: true,
})

function sidebarMcclient() {
	return [
		{
			text: '开始使用StarM Client',
			items: [
				{ text: '关于StarM Client', link: '/mcclient/about' },
				{ text: '下载客户端', link: '/mcclient/download' },
				{ text: '安装客户端', link: '/mcclient/install' },
				{ text: '安装可选模组', link: '/mcclient/install-optional-mod' },
				{ text: '配置客户端', link: '/mcclient/config' },
			],
		},
		{
			text: '各版本默认配置及问题',
			items: [
				{ text: '1.21', link: '/mcclient/version/1.21' },
				{ text: '1.20.4', link: '/mcclient/version/1.20.4' },
				{ text: '1.20.1', link: '/mcclient/version/1.20.1' },
				{ text: '1.19.4', link: '/mcclient/version/1.19.4' },
				{ text: '1.18.2', link: '/mcclient/version/1.18.2' },
				{ text: '1.17.1', link: '/mcclient/version/1.17.1' },
				{ text: '1.16.5', link: '/mcclient/version/1.16.5' },
				{ text: '1.15.2', link: '/mcclient/version/1.15.2' },
				{ text: '1.14.4', link: '/mcclient/version/1.14.4' },
				{ text: '1.13.2', link: '/mcclient/version/1.13.2' },
				{ text: '1.12.2-1.7.10', link: '/mcclient/version/1.12.2-1.7.10' },
			],
		},
		{
			text: '常见问题',
			items: [{ text: '视频设置', link: '/mcclient/faq-settings' }],
		},
		{
			text: '模组配置',
			items: [
				{
					text: '箱子物品查找ChestTracher',
					link: '/mcclient/modconfig/ChestTracker',
				},
			],
		},
	]
}

function sidebarBlog() {
	return [
		{
			text: '本地部署大模型',
			items: [
				{ text: '在Windows上部署', link: '/blog/ai/在Windows上部署' },
				{
					text: '在WSL2上使用Docker部署ollama',
					link: '/blog/ai/在WSL2上使用Docker部署ollama',
				},
			],
		},
	]
}
